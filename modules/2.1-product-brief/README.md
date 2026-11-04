# 2.1 · Turn a job description into a product brief

**Phase 2 · Product discovery** · Estimated time: 6–8 hours

## Objective

Move from "build this feature" to understanding the business problem, the users, the outcome and the scope, before any code is written.

## Why it matters

Clients describe solutions ("I need an app with a dashboard"). Your job is to find the problem behind the request. An agent can generate code fast, but if the brief is wrong, it generates the wrong product fast. Every later module in this roadmap starts from a brief like the one you write here.

## Learn

- Problem framing: separating the problem from the requested implementation
- User personas and Jobs-to-be-Done
- User stories and acceptance criteria
- MVP vs. nice-to-have
- Business outcomes and success metrics
- Discovery questions

## Practical task

Choose **3 real job descriptions** from a freelance marketplace or a job board, or from the [`jds/`](../../jds/README.md) folder. Pick ones that are vague or incomplete; they teach more than clear ones. Make at least one of them a project in your own field: it can become your Phase 4 project.

For each one, write a product brief with these 10 sections:

1. Business problem
2. Target users
3. Desired outcome
4. Key user journeys
5. MVP scope
6. Out-of-scope items
7. Assumptions
8. Risks
9. Discovery questions
10. Definition of Done

See a complete example: [a website for a local home-services contractor](example/brief-contractor-website.md).

### Working with an agent

1. Write your own first reading of the job description in five lines, before using any agent.
2. Ask an agent for a first draft of the brief.
3. Go through the draft and mark every statement as **stated** (the job description says it), **inferred** (a reasonable reading) or **assumed** (a guess). Move every assumed item to *Assumptions* or turn it into a *Discovery question*.
4. Note at the end of each brief what the agent got wrong and what you changed.

### Keep it public-safe

Your briefs will sit in a repository others can read. Remove the client's name, company, links and any detail that identifies them. Describe the business in general terms ("a local services company", "a regional clinic chain").

## Deliverable

```
work/2.1-product-brief/
├── brief-1.md
├── brief-2.md
└── brief-3.md
```

Paste each original job description (with identifying details removed) at the end of its brief.

## Definition of Done

- [ ] 3 real job descriptions analyzed
- [ ] The problem is separated from the requested implementation
- [ ] The MVP is explicitly defined, and so is what is out of scope
- [ ] Assumptions and unknowns are written down, not hidden in the scope
- [ ] Acceptance criteria are testable
- [ ] Each brief can be understood without reading the original job description
- [ ] Each brief notes what you corrected in the agent's draft

## Resources

- [Atlassian: User stories](https://www.atlassian.com/agile/project-management/user-stories)
- [Atlassian: Acceptance criteria](https://www.atlassian.com/work-management/project-management/acceptance-criteria)
- [Atlassian: Product discovery guides](https://www.atlassian.com/software/jira/product-discovery/guides)

## Next

2.2 · Run a requirements workshop: turn your discovery questions into a structured conversation with a client.
