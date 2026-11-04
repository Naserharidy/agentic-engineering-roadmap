# 3.1 · System design, ADRs and agent-ready tasks

**Phase 3 · Architecture** · Estimated time: 8–12 hours

## Objective

Turn your requirements into an end-to-end architecture, with a reason for every major decision, and break it into tasks an agent can carry out safely and you can verify.

## Why it matters

An agent will happily build whatever you ask for, including an architecture that won't survive real users. The design decisions are yours: the agent can propose options and argue for them, but you choose and you write down why. A good backlog is what lets you hand work to an agent in Phase 4 without losing control of the product.

## Learn

- API design
- Authentication and authorization
- Relational data modeling (PostgreSQL or similar)
- File and object storage
- Caching
- Queues and background jobs
- Notifications and email
- Payments
- Logging and monitoring
- Deployment basics
- Monolith vs. services: the trade-offs
- Architecture Decision Records (ADRs)
- Breaking work into agent-ready tasks

The aim is judging trade-offs: reliability, security, data, APIs, auth and deployment. It is not memorizing cloud services.

## Practical task

Start from `requirements.md` from module 2.2.

### 1. Design the system

Write `architecture.md` covering:

- System context: users, your system, and the external systems around it
- Components and their responsibilities
- Data model, and which component owns which data
- API boundaries
- Auth model: who can do what
- External integrations
- Deployment model
- Security considerations
- Major failure scenarios, and what happens in each

Include at least one diagram. Mermaid diagrams in Markdown are enough.

### 2. Record the decisions

Write an ADR for every major choice, **at least three**. For example: the stack, the data store, auth, hosting, or monolith vs. services. Each ADR states the context, the options you considered, the decision and its consequences.

**Working with an agent:** ask it for two or three options for each decision, with the trade-offs. Then decide yourself and write the ADR in your own words. Note anywhere you went against its recommendation, and why.

### 3. Build an agent-ready backlog

Break the MVP into tasks. Each task is **agent-ready** when it has:

- One clear goal
- The areas or files it touches, and what it must not touch
- Its dependencies on other tasks
- A verification check: a test, a command or an observable result that proves it is done
- A size small enough for one agent session and one reviewable pull request

Order the tasks so that each one builds on finished work.

## Deliverable

```
work/3.1-architecture/
├── architecture.md    # the system design, with at least one diagram
├── adr/
│   ├── 0001-<decision>.md
│   ├── 0002-<decision>.md
│   └── 0003-<decision>.md
└── backlog.md         # agent-ready tasks, in dependency order
```

## Definition of Done

- [ ] At least one architecture diagram exists
- [ ] Data ownership is clear
- [ ] Auth and permissions are defined
- [ ] External dependencies and integrations are identified
- [ ] Major failure scenarios are considered
- [ ] Every major technology choice has an ADR with a reason
- [ ] Every task is bounded and has a verification check
- [ ] Dependencies between tasks are explicit
- [ ] The backlog covers the whole MVP from module 2.2

## Resources

- [Architecture Decision Records: templates and examples](https://adr.github.io/)
- [The C4 model for visualizing software architecture](https://c4model.com/)
- [Mermaid: diagrams in Markdown](https://mermaid.js.org/intro/)
- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/)
- [Azure Architecture Center](https://learn.microsoft.com/azure/architecture/)
- [PostgreSQL tutorial](https://www.postgresql.org/docs/current/tutorial.html)

## Next

Phase 4 · Field project: build the MVP from this backlog, one agent-ready task at a time.
