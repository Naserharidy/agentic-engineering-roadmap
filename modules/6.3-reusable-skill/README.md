# 6.3 · Create a reusable skill

**Phase 6 · MCP and skills** · Estimated time: 4–6 hours

## Objective

Package a procedure you repeat as an **agent skill**: instructions and supporting files an agent loads when the task calls for it, so the work is done the same way every time.

## Why it matters

You have already built procedures in this roadmap: a product brief, a verification report, a session handoff. Each time you explain them to an agent from scratch, the results vary. A skill turns your way of working into something reusable. It is how one experienced developer's judgment scales across many projects.

## Learn

- What a skill is: a folder with a `SKILL.md` file (a name, a description and instructions) and optional supporting files and scripts
- How agents decide to use a skill: the description is what triggers it
- Writing short, specific instructions
- Supporting resources: templates, checklists, examples, scripts
- Testing a skill: on several inputs, and on cases where it should *not* be used

## Practical task

1. **Pick a procedure** you have done at least twice in this roadmap, or often in your own work. For example:
   - Turning a job description into a product brief (module 2.1)
   - Writing a verification report (module 0.3)
   - A session handoff (module 5.2)
   - A release checklist for your field
2. **Write the skill.** A `SKILL.md` with:
   - A **description** that says what the skill does and when to use it. This is what the agent reads to decide.
   - **Instructions**: the steps, the rules, and what "done" looks like. Keep them short; put long material in supporting files.
   - **Supporting files**: a template, a checklist, a good example.
3. **Test it** on **at least 3 different inputs**. Check the output each time against your own standard.
4. **Test the trigger.** Give the agent 2 tasks where the skill should be used and 2 where it shouldn't. Does it choose correctly? If not, improve the description.

## Deliverable

```
work/6.3-reusable-skill/
├── <skill-name>/
│   ├── SKILL.md
│   └── ...            # templates, checklists, examples, scripts
└── test-results.md    # the 3+ inputs and results, the trigger tests, what you changed
```

## Definition of Done

- [ ] The skill solves a problem that really repeats
- [ ] Its description makes clear when to use it, and when not to
- [ ] The instructions are short; long material is in supporting files
- [ ] Supporting files are organized and referenced from `SKILL.md`
- [ ] It works on at least 3 different inputs
- [ ] The trigger tests pass, or the failures are explained and fixed

## Resources

- [Agent Skills: the open format](https://agentskills.io)
- [Anthropic: Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- [Agent Skills documentation](https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills/overview)
- [Example skills](https://github.com/anthropics/skills)

## Next

6.4 · A skills library and your specialization playbook: decide what you want to be known for, and build the toolkit for it.
