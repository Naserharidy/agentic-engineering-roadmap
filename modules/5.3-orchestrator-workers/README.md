# 5.3 · Orchestrator, workers and parallel work

**Phase 5 · Agent engineering** · Estimated time: 6–10 hours

## Objective

Split work across several agents running in parallel, with one orchestrator that divides the work, collects the results and puts them together, and without adding complexity where a single agent would do.

## Why it matters

Parallel agents can finish independent work faster, and a separate reviewer catches what the builder missed. But agents working on overlapping parts produce conflicting changes, duplicated work and results nobody can merge. The skill is knowing which work is truly independent, giving each worker a clear brief, and owning the synthesis yourself.

## Learn

- The orchestrator-workers pattern
- When work is genuinely independent, and when it only looks that way
- Writing a worker brief: goal, scope, inputs, expected output, what not to touch
- Isolating parallel work: separate sessions, branches or worktrees, subagents
- Synthesis: combining results, and resolving conflicts between them
- Where human approval belongs

## Practical task

Pick a feature from **your Phase 4 backlog** that can be split into parts that don't depend on each other. For example: research a third-party API, build two separate components, and write the tests, then review everything.

### 1. Decide whether to split

Write down the parts and the dependencies between them. If the parts share files or wait on each other, they are not independent. In that case, either split differently or explain why one agent is the better choice. That counts as a valid result for this module.

### 2. Brief the workers

For each worker, write a brief: its goal, the files or areas it owns, its inputs, the output it must return, and what it must not touch.

### 3. Run them in parallel

Run the workers at the same time, each isolated: its own session, branch or worktree, or a subagent. The orchestrator can be you, or a lead agent that you supervise.

### 4. Synthesize

The orchestrator collects the results, checks them against the briefs, resolves conflicts, and produces one coherent change. Then a separate review, and your approval, before anything is merged.

## Deliverable

```
work/5.3-orchestrator-workers/
├── orchestration.md    # the split, why the parts are independent, how results were combined,
│                       # conflicts and how they were resolved, where you approved
└── briefs/             # one brief per worker
```

Link the resulting pull request from `orchestration.md`.

## Definition of Done

- [ ] Each worker's responsibility is bounded by its brief
- [ ] The parallel work is genuinely independent, or the decision not to split is justified
- [ ] The orchestrator owns the synthesis
- [ ] Conflicting outputs had a resolution path, and it was used or explained
- [ ] Human approval happened at a meaningful point, before merge
- [ ] `orchestration.md` says whether splitting was worth it, compared with one agent

## Resources

- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (the orchestrator-workers pattern)
- [Anthropic: How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- [Claude Code: Create custom subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
- [Git: worktree](https://git-scm.com/docs/git-worktree) (several working copies of one repository)
- [Anthropic webinar: Claude Code advanced patterns](https://www.anthropic.com/webinars/claude-code-advanced-patterns)

## Next

Phase 6 · MCP and skills: give your agents new tools and reusable know-how.
