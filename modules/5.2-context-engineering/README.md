# 5.2 · Context engineering and long-running tasks

**Phase 5 · Agent engineering** · Estimated time: 6–8 hours

## Objective

Treat an agent's context as something you engineer. Run a feature across several sessions so that each new session picks up exactly where the last one stopped, without rediscovering the project or repeating decisions.

## Why it matters

Real features don't fit in one session. When a session ends, everything the agent learned goes with it, unless it was written down. Without a strategy, every new session spends its first part rediscovering the code, reopens settled decisions, and sometimes undoes earlier work. The fix isn't a bigger context window: it is deciding what the agent needs to know, where that lives, and when it gets replaced.

## Learn

- Context as a limited resource: what to include, what to leave out
- Persistent state: requirements, decisions, progress and verification status in files
- Handoffs: what a session must leave behind for the next one
- Compacting and summarizing without losing what matters
- Replacing stale information instead of piling new notes on top

## Practical task

Pick a feature from **your Phase 4 backlog** big enough to need **at least 3 working sessions**, and build it.

### 1. Set up the state files

Before the first session, create files the agent reads at the start and updates at the end:

- **Progress:** what is done, what is next, what is blocked
- **Decisions:** what was decided, why, and when
- **Verification:** which checks pass, which fail, what hasn't been tested

Keep them short. Link to code and docs instead of copying them.

### 2. Work in fresh sessions

Start every session **fresh**, with only the instructions file and the state files. End every session by filling in a **handoff** from a template you write: where things stand, what the next session should do first, and what it must not redo.

### 3. Watch for rediscovery

At the start of each session, note anything the agent re-explored, re-asked or re-decided that the files should have answered. Fix the files, not just the session.

### 4. Clean up

Halfway through, review the state files. Remove what is out of date, and replace notes that are no longer true. The files should get more accurate over time, not only longer.

## Deliverable

```
work/5.2-context-engineering/
├── context-strategy.md    # what lives where, what is loaded when, how stale notes are replaced
├── handoff-template.md    # the template you used at the end of each session
└── session-log.md         # each session: its start state, what was rediscovered, what you fixed
```

Link the feature's pull request from `session-log.md`.

## Definition of Done

- [ ] The feature was built across at least 3 fresh sessions
- [ ] A new session can continue without rediscovering the project
- [ ] Decisions persisted and were not reopened
- [ ] The state files stayed short and relevant
- [ ] Stale information was replaced, not just added to
- [ ] Every case of rediscovery is logged, with the fix you made

## Resources

- [Anthropic: Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Anthropic webinar: Claude Code advanced patterns](https://www.anthropic.com/webinars/claude-code-advanced-patterns)

## Next

5.3 · Orchestrator, workers and parallel work: split work across several agents, only where it pays off.
