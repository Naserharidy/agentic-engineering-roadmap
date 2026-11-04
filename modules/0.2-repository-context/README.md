# 0.2 · Repository context and agent instructions

**Phase 0 · Agentic coding foundations (optional)** · Estimated time: 2–3 hours

## Objective

Write down what an agent needs to know about your project, in a file it reads at the start of every session, so it works the same way every time.

## Why it matters

Each session, an agent starts knowing nothing about your project. It guesses the commands, invents conventions, and touches files it shouldn't. A short, specific instructions file fixes most of that. It is the cheapest improvement you can make to an agent's work.

## Learn

- Repository instruction files: `AGENTS.md`, `CLAUDE.md` or your tool's equivalent
- What belongs in one: architecture, commands, conventions, boundaries, Definition of Done
- What doesn't: generic advice ("write clean code"), long documentation the agent can read elsewhere
- Keeping it short and up to date

## Practical task

Use the project from module 0.1, or another project you work on.

1. **Before.** Give the agent a small task, such as adding a field to a form or writing a test for an existing function, with no instructions file. Save what it did.
2. **Write the file.** Include:
   - What the project is, and its architecture in a few lines
   - Commands: install, run, test, lint, build
   - Conventions: naming, structure, patterns to follow and to avoid
   - Boundaries: files and areas the agent must not touch, and actions that need your approval
   - The Definition of Done for any task in this project
3. **After.** Undo the first attempt, start a fresh session, and give the agent the same task.
4. **Compare.** What changed? What did it still get wrong? Add one line to the file for each repeated mistake, and leave out anything that didn't help.

In module 1.1 you build on this file and use it in a full delivery workflow.

## Deliverable

```
work/0.2-repository-context/
├── AGENTS.md         # a copy of the instructions file you wrote (or CLAUDE.md…)
└── comparison.md     # the same task before and after: what changed, what you added
```

## Definition of Done

- [ ] The instructions are specific to the project: not generic advice
- [ ] Build and test commands are written in it
- [ ] Boundaries are explicit
- [ ] The before/after comparison is recorded
- [ ] The file was improved after the comparison

## Resources

- [AGENTS.md: a simple, open format for guiding coding agents](https://agents.md/)
- [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Anthropic webinar: Claude Code foundations](https://www.anthropic.com/webinars/claude-code-foundations)

## Next

0.3 · Verification-first development: make evidence, not generated code, the definition of done.
