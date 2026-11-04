# 6.4 · A skills library and your specialization playbook

**Phase 6 · MCP and skills** · Estimated time: 8–12 hours

## Objective

Stop competing as a generic "developer who can build anything". Choose the client outcomes you want to be known for, and build a small library of skills and reusable building blocks that lets you deliver them faster and better each time.

## Why it matters

With agents, writing code is no longer the scarce part. What is scarce is knowing a kind of problem well: the questions to ask, the patterns that work, the mistakes to avoid. A specialist with a tested playbook is faster, more predictable and easier to hire than a generalist starting from zero on every project.

## Learn

- Specializing by outcome, not by framework ("booking systems for clinics", not "React developer")
- Defining an ideal client and the problem you solve for them
- Reusable building blocks: auth and roles, dashboards, notifications, multilingual content, CMS, payments, design system, CI/CD
- Boundaries: what a building block does, and what it leaves to the project
- A skills library: small skills that each do one thing and work together
- Versioning a library and recording changes

## Practical task

### Part 1: your playbook

1. **Choose 2 or 3 target outcomes**: kinds of client problems you want to solve repeatedly. Draw on your field, your Phase 4 project, and the job descriptions you have analyzed. For example: SaaS MVPs for service businesses, multilingual content platforms, internal tools for operations teams, booking and scheduling apps.
2. **For each outcome**, define the ideal client, the problem in their words, what a successful delivery looks like, and the usual architecture.
3. **Identify reusable building blocks** that appear across your outcomes. For each one, document its boundaries: what it covers, what it doesn't, and how a project configures it.
4. **Write your positioning** in two or three sentences that describe outcomes for clients, not frameworks.

### Part 2: your skills library

Build **at least 3 focused skills** that serve your outcomes. Module 6.3's skill can be one of them. Ideas: requirements analysis for your outcome, a quality review for your field, architecture review, deployment and handover.

- Each skill does **one** job. No "do everything" skill.
- Skills must work together without contradicting each other. Check this by using two of them in the same task.
- Give the library a README: what each skill does, its boundaries, and how they combine.
- Record versions and changes.

## Deliverable

```
work/6.4-skills-library-and-playbook/
├── playbook.md        # outcomes, ideal clients, usual architectures, building blocks and
│                      # their boundaries, positioning
└── skills/
    ├── README.md      # what each skill does, boundaries, how they combine
    ├── CHANGELOG.md
    ├── <skill-1>/
    ├── <skill-2>/
    └── <skill-3>/
```

## Definition of Done

- [ ] 2 or 3 target outcomes are chosen
- [ ] The ideal client and their problem are defined for each
- [ ] Reusable building blocks are identified, each with documented boundaries
- [ ] The positioning describes outcomes, not frameworks
- [ ] At least 3 focused skills, each with examples
- [ ] No skill tries to do everything
- [ ] Two skills were used together without contradictions
- [ ] Versions and changes are recorded

## Resources

- [Strategyzer: Value Proposition Canvas](https://www.strategyzer.com/library/the-value-proposition-canvas)
- [Martin Fowler: Catalog of Patterns of Enterprise Application Architecture](https://martinfowler.com/eaaCatalog/)
- [Example skills](https://github.com/anthropics/skills)
- [Agent Skills: the open format](https://agentskills.io)

## Next

Phase 7 · Evals, security and quality gates: prove that your agents and your product work, and keep proving it.
