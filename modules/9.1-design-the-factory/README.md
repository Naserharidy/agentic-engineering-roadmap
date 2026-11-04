# 9.1 · Design the AI software factory

**Phase 9 · Capstone: the AI software factory** · Estimated time: 8–10 hours

## Objective

Design the complete system that turns a client request into controlled software delivery, combining everything you have built in this roadmap into one repeatable process.

```
Job description / idea → Discovery → Product brief → Architecture → Plan
  → Engineering → QA and security → Human approval → Deploy → Handover
```

## Why it matters

So far you have built the parts: a workflow, briefs, architecture, agents, MCP servers, skills, evals, quality gates, delivery documents. A factory connects them, so the next project starts from a working system instead of a blank page.

One principle holds the design together: **AI speeds up the execution. Human judgment owns the product decisions, the architecture approval, the scope, the risk and the final quality.**

## Learn

Nothing new. This module reuses the whole roadmap:

| Factory part | Where you built it |
|---|---|
| Intake and requirements | 2.1, 2.2 |
| Architecture and planning | 3.1 |
| Delivery workflow | 1.1 |
| Long-running work and handoffs | 5.2 |
| Parallel work | 5.3 |
| Tools and integrations | 6.1, 6.2 |
| Skills | 6.3, 6.4 |
| Evals, security, quality gates | 7.1 to 7.4 |
| Client delivery | 8.1, 8.2 |

## Practical task

Design your factory on paper first.

1. **Roles.** Define the roles in the flow. For example: intake and requirements, product and UX, architecture, planning, front end, back end, mobile, CMS, QA, security review, DevOps, documentation and handover. Each one can be an agent, a skill, a script, a checklist or you. Give each role a bounded responsibility.
2. **Artifacts.** Define what passes between stages: the brief, the requirements, the architecture and ADRs, the backlog, the code, the test and eval results, the handover. For each: its format, who produces it, who uses it.
3. **States.** Define how a project moves between stages, and what must be true to move forward.
4. **Human gates.** Mark where you must approve before work continues: at least the brief, the architecture, the scope and each release.
5. **Failure paths.** For each stage, what happens when it fails: a question goes back to the client, a task is retried, the work stops for you.
6. **Project types.** Show how the factory handles at least two project types, such as web and mobile, or web and CMS, without being redesigned.

## Deliverable

```
work/9.1-design-the-factory/
├── architecture.md          # roles, artifacts, states, gates, failure paths, project types
├── flow.md                  # a flow diagram (Mermaid is fine)
└── responsibility-matrix.md # each role: what it does, what it must not do, its inputs and outputs
```

## Definition of Done

- [ ] Every role has a bounded responsibility
- [ ] The artifacts passed between stages are defined
- [ ] The human gates are explicit
- [ ] Failure and retry paths are defined
- [ ] The factory supports at least two project types
- [ ] Each part of the design points to what you built earlier in the roadmap

## Resources

This module reuses your own work. Revisit:

- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- [Mermaid: diagrams in Markdown](https://mermaid.js.org/intro/)

## Next

9.2 · Implement the AI software factory: build the simplest version of this design that works.
