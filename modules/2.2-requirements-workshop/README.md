# 2.2 · Run a requirements workshop

**Phase 2 · Product discovery** · Estimated time: 5–7 hours

## Objective

Lead a client conversation instead of waiting for requirements to arrive. Turn a brief full of assumptions into requirements that are clear enough to design and build.

## Why it matters

A brief is your best guess. The client knows things that never made it into the job description: how they work today, the systems you must connect to, what "success" means to them. If you don't ask, you find out halfway through the build, when changes are most expensive.

## Learn

- Discovery interviews: open questions, follow-ups, listening for the real problem
- Clarifying vague requirements
- Stakeholder goals, and how they differ
- The client's current workflow: how the job gets done today
- Functional and non-functional requirements
- Edge cases
- Constraints and integrations
- Success metrics
- Scope control: saying "not in the first version" clearly

## Practical task

Take **the brief from module 2.1 that is in your field**. It will become your Phase 4 project.

### 1. Prepare

- **Agenda** for a 30-minute meeting: goals, current workflow, users and journeys, constraints and integrations, success, scope, next steps.
- **Question bank.** Start from the brief's discovery questions. Group them by agenda item, and mark the ones you must have answered before you can design anything.

### 2. Run the workshop

You need someone to play the client:

- **A peer (best).** Give them the job description. Ask them to decide, in private, the details the job description leaves out, and to answer like a busy client: short answers, and sometimes they don't know.
- **An agent (when no peer is available).** Give it the job description and ask it to play the client: stay consistent, give short answers, say "I don't know" sometimes, and never volunteer information you didn't ask for.

Keep to 30 minutes. Take notes as you go.

### 3. Turn the conversation into requirements

- Update the requirements: functional, non-functional, edge cases.
- Write down how the client works today, step by step.
- Record every decision, with the reason for it.
- List what is still unknown, and who can answer it.
- Draw the scope line: what is in the first version, and what is out.
- Recommend an MVP and propose success metrics.

Describe *what* the product must do. Don't tie the solution to a framework yet: that is module 3.1.

## Deliverable

```
work/2.2-requirements-workshop/
├── agenda.md          # agenda and question bank
├── notes.md           # what was said in the workshop
├── decisions.md       # decision log: decision, reason, date
└── requirements.md    # requirements, current workflow, constraints and integrations,
                       # success metrics, scope (in/out), MVP recommendation, open questions
```

## Definition of Done

- [ ] The business goal is clear and written down
- [ ] The client's current workflow is documented
- [ ] The main user journey is documented
- [ ] Edge cases are captured
- [ ] Constraints and integrations are captured
- [ ] Success metrics are proposed
- [ ] Unknowns are explicit, each with who can answer it
- [ ] In scope and out of scope are agreed
- [ ] The solution isn't tied to a framework too early
- [ ] Someone else could start the architecture from `requirements.md` alone

## Resources

- [Atlassian: Product discovery guides](https://www.atlassian.com/software/jira/product-discovery/guides)
- [Atlassian: Team Playbook](https://www.atlassian.com/team-playbook)
- [Atlassian: Product requirements](https://www.atlassian.com/agile/product-management/requirements)

## Next

3.1 · System design, ADRs and agent-ready tasks: turn these requirements into an architecture and a backlog.
