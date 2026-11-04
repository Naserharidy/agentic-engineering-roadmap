// Creates the roadmap's issues and milestones in a learner's repository.
//
//   node .github/scripts/start-roadmap.mjs --field SaaS --start-phase 1 [--dry-run]
//
// Without GITHUB_TOKEN (or with --dry-run) it only prints what it would create.
// Safe to run again: modules that already have an issue are skipped.

import { readFile, access } from 'node:fs/promises';
import { posix } from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((pairs, arg, i, all) => {
    if (arg.startsWith('--')) pairs.push([arg.slice(2), all[i + 1]?.startsWith('--') ? true : all[i + 1] ?? true]);
    return pairs;
  }, []),
);

const roadmap = JSON.parse(await readFile('roadmap.json', 'utf8'));
const field = String(args.field ?? "").toLowerCase();
const startPhase = Number(args['start-phase'] ?? 1);
const token = process.env.GITHUB_TOKEN;
const dryRun = Boolean(args['dry-run']) || !token;
const repo = process.env.GITHUB_REPOSITORY ?? 'owner/repo';
const apiBase = process.env.GITHUB_API_URL ?? 'https://api.github.com';
const webBase = `${process.env.GITHUB_SERVER_URL ?? 'https://github.com'}/${repo}`;
const branch = process.env.GITHUB_REF_NAME ?? 'main';

if (!roadmap.fields[field]) fail(`--field must be one of: ${Object.keys(roadmap.fields).join(', ')}`);
if (!roadmap.phases.some((p) => p.number === startPhase)) fail(`--start-phase ${args['start-phase']} is not a phase`);

const selected = roadmap.modules.filter(
  (m) => m.phase >= startPhase && (m.track === 'core' || m.track === field),
);
const ready = selected.filter((m) => m.status === 'ready');
const planned = selected.filter((m) => m.status !== 'ready');

for (const m of ready) {
  await access(m.path).catch(() => fail(`Module ${m.id} is marked ready but ${m.path} is missing`));
}

const phaseTitle = (n) => `Phase ${n} · ${roadmap.phases.find((p) => p.number === n).title}`;
const marker = (id) => `<!-- roadmap-module: ${id} -->`;
const markerPattern = /<!-- roadmap-module: (\S+) -->/;

console.log(`Field: ${roadmap.fields[field]} · start phase: ${startPhase} · ${dryRun ? 'DRY RUN' : repo}`);
console.log(`Modules ready: ${ready.length} · still being written: ${planned.length}\n`);

if (dryRun) {
  for (const n of new Set(ready.map((m) => m.phase))) {
    console.log(`milestone  ${phaseTitle(n)}`);
    for (const m of ready.filter((x) => x.phase === n)) console.log(`  issue    ${m.id} ${m.title}`);
  }
  console.log('issue      Start here');
  process.exit(0);
}

// --- GitHub API -------------------------------------------------------------

async function api(method, path, body) {
  const res = await fetch(`${apiBase}/repos/${repo}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  });
  if (res.status === 404 && method === 'GET') return null;
  if (!res.ok) fail(`${method} ${path} → ${res.status} ${await res.text()}`);
  return res.status === 204 ? null : res.json();
}

async function listAll(path) {
  const items = [];
  for (let page = 1; ; page++) {
    const batch = await api('GET', `${path}${path.includes('?') ? '&' : '?'}per_page=100&page=${page}`);
    items.push(...batch);
    if (batch.length < 100) return items;
  }
}

// Stay well under GitHub's limits on creating content in quick succession.
const pause = () => new Promise((r) => setTimeout(r, 1000));

// --- Create -------------------------------------------------------------------

if (!(await api('GET', '/labels/roadmap'))) {
  await api('POST', '/labels', { name: 'roadmap', color: '6f42c1', description: 'A module of the roadmap' });
}

const milestones = await listAll('/milestones?state=all');
const milestoneFor = {};
for (const n of new Set(ready.map((m) => m.phase))) {
  const title = phaseTitle(n);
  milestoneFor[n] = milestones.find((x) => x.title === title) ?? (await api('POST', '/milestones', { title }));
}

const existing = new Map();
for (const issue of await listAll('/issues?state=all')) {
  const id = issue.body?.match(markerPattern)?.[1];
  if (id && !issue.pull_request) existing.set(id, issue);
}

const created = [];
for (const m of ready) {
  if (existing.has(m.id)) {
    console.log(`skip     ${m.id} (already #${existing.get(m.id).number})`);
    continue;
  }
  // Relative links in the module file would break inside an issue; point them at the repository.
  const moduleDir = m.path.slice(0, m.path.lastIndexOf('/') + 1);
  const content = (await readFile(m.path, 'utf8')).replace(
    /\]\((?!https?:|#|mailto:)([^)]+)\)/g,
    (_, link) => `](${webBase}/blob/${branch}/${posix.normalize(moduleDir + link)})`,
  );
  const body = [
    content.trim(),
    '---',
    `Module source: [${m.path}](${webBase}/blob/${branch}/${m.path})`,
    'Deliver your work in a pull request whose description says `Closes #` followed by this issue\'s number. Merging it closes this issue and updates the phase progress.',
    marker(m.id),
  ].join('\n\n');
  const issue = await api('POST', '/issues', {
    title: `${m.id} · ${m.title}`,
    body,
    labels: ['roadmap'],
    milestone: milestoneFor[m.phase].number,
  });
  existing.set(m.id, issue);
  created.push(m.id);
  console.log(`created  ${m.id} → #${issue.number}`);
  await pause();
}

if (!existing.has('start-here')) {
  const lines = ready.map((m) => `- [ ] #${existing.get(m.id).number} ${m.id} · ${m.title}`);
  const body = [
    `Your roadmap is set up for the **${roadmap.fields[field]}** field, starting at **Phase ${startPhase}**.`,
    '## Your modules',
    lines.join('\n'),
    planned.length
      ? `${planned.length} more modules are still being written. When they are published, copy the new module folders and \`roadmap.json\` into this repository and run the **Start roadmap** workflow again: it only adds what is missing.`
      : '',
    '## How to work',
    [
      '1. Open the next module\'s issue and read it in full.',
      '2. Create a branch, and put your work in the `work/` folder the module names.',
      '3. Open a pull request using the template, and tick the Definition of Done honestly.',
      '4. Merge it. The issue closes, and the milestone for that phase shows your progress.',
    ].join('\n'),
    '---',
    'Agentic Engineering Roadmap, by [Abdelrahman Haridy](https://github.com/ab-haridy), Senior Software Developer.',
    marker('start-here'),
  ].filter(Boolean).join('\n\n');
  const issue = await api('POST', '/issues', { title: 'Start here', body, labels: ['roadmap'] });
  console.log(`created  Start here → #${issue.number}`);
}

console.log(`\nDone: ${created.length} new module issues.`);

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}
