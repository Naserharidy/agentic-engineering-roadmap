# Agentic Engineering Roadmap — AGENTS.md

## Project
Training repo for working with AI coding agents under human control. Teaches a repeatable loop: **Inspect → Plan → Act → Verify → Iterate**. Contains 26 modules across 9 phases (see `roadmap.json`). Deliverables live in `work/<module-folder>/` and are merged via pull request using `.github/pull_request_template.md`.

## Architecture
- `modules/<id>-<slug>/README.md` — module definition: objective, task, deliverable, Definition of Done
- `work/<module-folder>/` — your deliverables for each module
- `jds/` — real job descriptions to practise on
- `assets/` — static assets (banner images referenced in `README.md`)
- `.github/` — roadmap automation (`start-roadmap.mjs`, `start-roadmap.yml`) and pull request template
- `roadmap.json` — machine-readable map of all modules, phases, tracks, hour estimates

## Commands
No install/build step required for most modules (markdown + static files). For the demo webpage:
- Open `work/0.1-agentic-coding-loop/index.html` directly in a browser (works via `file://`, no server needed).
- No lint, test, or build tooling is configured in this repo.

## Conventions
- Files: kebab-case folder and file names (e.g., `0.1-agentic-coding-loop`, `index.html`, `style.css`).
- HTML: semantic HTML5, `lang="en"`, viewport meta tag, external CSS/JS links.
- CSS: CSS custom properties (`:root`), `box-sizing: border-box`, system font stack, responsive breakpoints (`@media (max-width: 600px)`).
- JS: vanilla JavaScript, IIFE-wrapped, `getElementById` + `addEventListener`, no frameworks, no build step.
- Commit/PR: open a pull request using `.github/pull_request_template.md`, tick the Definition of Done honestly, link to the module issue.

## Boundaries
**Do not touch:**
- `modules/` — canonical module definitions; edit only through the repo's contribution process
- `.github/` — roadmap automation and workflow files
- `LICENSE`, `CITATION.cff`, `CONTRIBUTING.md`, `CHANGELOG.md` — project-level documents

**Requires your approval before implementation:**
- Any file edit or creation (plan must be approved first in Plan mode)
- Any change outside the approved plan — stop and either update the plan or undo it
- Anything that modifies `modules/`, `.github/`, or root-level project files

## Definition of Done (per task)
- Agent inspected the repository before editing
- Plan was reviewed and approved by you before any change
- Scope stayed bounded to the one task
- Verification was run, and its evidence is recorded
- You read the diff and recorded what you noticed

