# 1.1 · Requirement to verified code: a repeatable agent workflow

**Phase 1 · AI-native delivery workflow** · Estimated time: 8–10 hours

## Objective

Use AI as an engineering system, not as code autocomplete. Build a workflow you can repeat on every task: the agent gets the right context, works from a plan you approved, and nothing reaches the main branch until it is tested and reviewed.

## Why it matters

Without a workflow, an agent guesses: it fills gaps with assumptions, widens the scope without telling you, and calls the work done before it is checked. Every later module in this roadmap runs on the workflow you build here.

This is not a prompt-engineering module. You are building an engineering process, not collecting clever prompts.

## Learn

- Context engineering: what an agent needs to know about a project, and where that knowledge lives
- Repository instructions: `AGENTS.md`, `CLAUDE.md` or your tool's equivalent
- Planning before implementation
- Breaking work into bounded tasks
- Agent boundaries: what it may change, and what it must ask about first
- Human approval points
- Verification: tests, AI-assisted review, your own review
- Generating documentation from the work

## Practical task

Use a project you already work on, in your own field. Pick **one bounded feature**: something you could build by hand in 2 to 4 hours.

### Part 1: give the agent the project's context

Write a repository instructions file for the project (`AGENTS.md`, `CLAUDE.md` or your tool's equivalent). Include:

- What the project is, and its architecture in a few lines
- Commands: install, run, test, lint, build
- Conventions: naming, structure, patterns to follow and to avoid
- Boundaries: files and areas the agent must not touch, and actions that need your approval
- The Definition of Done for any task in this project

Then compare. Give the agent the same small task twice: once without the file, once with it. Write down what changed.

### Part 2: run one feature through the loop

```
Requirement → Questions → Plan → Approval → Implement → Test → Review → Fix → Document
```

1. **Requirement.** Write the feature down as the client would say it.
2. **Questions.** Ask the agent to list what is unclear. Answer each question, or record it as an open question. Don't let it become a silent assumption.
3. **Plan.** Ask for a plan: steps, the files each step changes, and how each step will be tested.
4. **Approval.** Read the plan and correct it. Nothing gets implemented before you approve it.
5. **Implement.** One plan step at a time.
6. **Test.** Tests run automatically, not "I tried it once".
7. **Review.** A separate review step: a fresh agent session reviewing the diff, and your own reading of it.
8. **Fix.** Act on the review findings.
9. **Document.** Update the README or the docs, and the instructions file if you learned something about the project.

**Scope guard:** if the agent changes a file the plan didn't mention, stop and decide: update the plan or undo the change. Either way, write it down.

## Deliverable

```
work/1.1-agent-workflow/
├── AGENTS.md         # a copy of the instructions file you wrote (or CLAUDE.md…)
├── comparison.md     # the same task without and with the file: what changed
├── workflow.md       # your loop: the steps, the approval points, the commands
└── run-log.md        # the feature run: what the agent did, what needed your judgment
```

In `run-log.md`, link to the pull request or commits of the feature in your project.

## Definition of Done

- [ ] The instructions file is specific to the project: not generic advice
- [ ] Build and test commands are written in it
- [ ] Boundaries and approval points are explicit
- [ ] The without/with comparison is recorded
- [ ] Unknowns became questions, not assumptions
- [ ] Implementation started from an approved plan
- [ ] Tests run automatically
- [ ] A separate review step happened, and its findings were handled
- [ ] Any change outside the plan was caught and recorded
- [ ] `run-log.md` separates what the agent did from what you decided

## Resources

- [AGENTS.md: a simple, open format for guiding coding agents](https://agents.md/)
- [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/overview)
- [OpenAI Codex documentation](https://developers.openai.com/codex/)
- [Anthropic webinar: Claude Code foundations](https://www.anthropic.com/webinars/claude-code-foundations)
- [Anthropic webinar: Claude Code advanced patterns](https://www.anthropic.com/webinars/claude-code-advanced-patterns)

Any coding agent works for this module. The workflow matters more than the tool.

## Next

2.1 · Turn a job description into a product brief: the same discipline, applied before any code exists.
