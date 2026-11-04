# 0.1 · The agentic coding loop

**Phase 0 · Agentic coding foundations (optional)** · Estimated time: 2–3 hours

## Objective

Learn the basic loop every coding agent works in, and learn to keep it under control:

```
Inspect → Plan → Act → Verify → Iterate
```

## Why it matters

Agents are fast and confident, and that is the risk. Left alone, an agent edits files before it understands the code, fixes a symptom instead of the cause, and says "done" without checking. The loop puts a step between each of those: the agent looks first, you approve the plan, and the result is checked before anyone calls it finished.

## Learn

- What a coding agent can do: read files, search, run commands, edit code
- Inspect before acting: letting the agent read the repository first
- Asking for a plan, and approving it before any edit
- Keeping scope bounded: one problem, one change
- Verifying the result: run it, test it, read the diff
- Recording what happened

## Practical task

Pick **one small, real bug** in a project you work on: something you could fix by hand in under an hour. If you don't have one, pick a small, well-described issue from an open-source project you use.

1. **Inspect.** Describe the bug to the agent and ask it to find the cause, reading the code but not changing anything yet.
2. **Plan.** Ask for a plan: the cause, the fix, the files it will change, and how the fix will be checked.
3. **Approve.** Read the plan. Correct it if it is wrong or too wide. Only then let the agent edit.
4. **Act.** Let the agent make the change.
5. **Verify.** Reproduce the bug, and confirm it is gone. Run the tests. Read the whole diff yourself.
6. **Iterate.** If verification fails, go back to the plan, not straight to another edit.

## Deliverable

```
work/0.1-agentic-coding-loop/
└── notes.md    # the bug, the plan, a summary of the diff, the verification evidence, lessons
```

Link the commit or pull request with the fix from `notes.md`.

## Definition of Done

- [ ] The agent inspected the repository before editing
- [ ] You reviewed and approved the plan before any change
- [ ] The scope stayed bounded to the one bug
- [ ] Verification was run, and its evidence is recorded
- [ ] You read the diff, and recorded what you noticed

## Resources

- [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/overview)
- [OpenAI Codex documentation](https://developers.openai.com/codex/)
- [Anthropic webinar: Claude Code foundations](https://www.anthropic.com/webinars/claude-code-foundations)

Any coding agent works for this module.

## Next

0.2 · Repository context and agent instructions: give the agent what it needs to know about your project before it starts.
