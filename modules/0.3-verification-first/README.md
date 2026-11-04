# 0.3 · Verification-first development

**Phase 0 · Agentic coding foundations (optional)** · Estimated time: 3–4 hours

## Objective

Make verification, not generated code, the definition of done. A task is finished when there is evidence that it works, not when the agent says so.

## Why it matters

An agent can produce a lot of plausible code in minutes. Without automated checks, you either read every line yourself, which doesn't scale, or you trust it, which isn't safe. Writing the acceptance criteria first, and wiring up checks that run on every change, is what lets you hand more work to agents safely.

## Learn

- Writing acceptance criteria before the code
- Automated checks: tests, linting, type checking, build
- Running checks on every push with continuous integration (CI)
- Reviewing a diff: what to look for in agent-written code
- A verification report: the evidence that a task is done

## Practical task

Use a project you work on, with the instructions file from module 0.2 if you did it.

1. **Criteria first.** Pick a small feature and write 3 to 5 acceptance criteria, each one testable, before involving the agent.
2. **Checks in place.** Make sure the project has tests, a linter, type checking (if your language has it) and a build. Add a CI workflow that runs them on every push and pull request, for example with GitHub Actions.
3. **Build with the agent.** Give it the feature and the criteria. Require tests that cover each criterion.
4. **Verify.** Let CI run. Then read the diff yourself, looking for code that passes the tests but doesn't meet the criteria, tests that check nothing, and changes outside the feature.
5. **Report.** Write a short verification report: each criterion, and the evidence that it is met.

## Deliverable

```
work/0.3-verification-first/
└── verification.md    # the criteria, the checks, the CI run, what the diff review found,
                       # and the evidence for each criterion
```

Link the pull request and its CI run from `verification.md`.

## Definition of Done

- [ ] Acceptance criteria were written before the code
- [ ] Tests, lint, type checks and build run automatically in CI
- [ ] Each criterion is covered by a test or other evidence
- [ ] You reviewed the diff, and recorded what you found
- [ ] The task is called done only with evidence for every criterion

## Resources

- [GitHub Actions documentation](https://docs.github.com/actions)
- [Atlassian: Acceptance criteria](https://www.atlassian.com/work-management/project-management/acceptance-criteria)
- [Anthropic webinar: Claude Code foundations](https://www.anthropic.com/webinars/claude-code-foundations)

## Next

1.1 · Requirement to verified code: put the loop, the context file and verification together into one repeatable workflow.
