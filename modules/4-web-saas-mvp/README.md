# 4.web · Build a production-ready SaaS MVP

**Phase 4 · Field project (Web / SaaS)** · Estimated time: 40–60 hours

## Objective

Prove you can deliver an entire web product, not only individual features: from product brief to a deployed MVP, using the agent workflow from module 1.1.

## Why it matters

This is the project the rest of the roadmap builds on. In phases 5 to 7 you add agents, MCP, evals, security and quality gates to **this** product. Choose something you are willing to keep working on.

## Choose a project

Your project starts from a real job description (JD), the way client work does. Choose one of two ways:

1. **Find a JD yourself.** Search a freelance marketplace (Upwork, Freelancer.com, Contra or similar) for a web or SaaS project posted by a real client. If one of your briefs from module 2.1 is a web or SaaS project, you can use that JD.
2. **Use one of ours.** Pick a web JD from the [`jds/`](../../jds/README.md) folder.

### What makes a JD suitable

- **A real product with users and data.** Look for accounts, records that change, and more than one kind of user. A landing page or a one-off fix is too small.
- **Buildable in 40–60 hours as an MVP.** "Build the next marketplace for everything" is too big, unless you cut it down to a clear first version in your brief.
- **Vague is fine.** Turning an unclear request into a clear scope is part of the work.

If the JD doesn't ask for some of the required capabilities below, add them to your brief as your own additions, and mark them as such.

Don't apply to the job or contact the client. You are using the JD only as practice material.

## Required capabilities

- Authentication
- Roles and permissions
- Dashboard
- A full CRUD workflow
- Database
- API
- Responsive UI
- Notifications or email
- One external integration (payments, calendar, maps, messaging…)
- Deployment

## Practical task

1. Start from a product brief. If your JD doesn't have one yet, write it first using the format from module 2.1.
2. Break the brief into small tasks an agent can complete and you can verify.
3. Build in short cycles: plan, approve, implement, test, review. Record decisions you validated yourself, especially where you rejected the agent's suggestion.
4. Deploy it, then hand the README to someone else and check that they can run it.

## Deliverable

```
work/4-web-saas-mvp/
├── README.md          # what it is, live link, how to run it locally
├── jd.md              # the job description, with identifying details removed
├── brief.md           # the product brief it was built from
├── architecture.md    # main components, data model, key decisions
└── decisions.md       # decisions you validated; where you overrode the agent
```

The source code can live in this folder or in its own repository. If it has its own repository, link it from `README.md`.

## Definition of Done

- [ ] The product is deployed and reachable
- [ ] The core journey works end to end
- [ ] Authentication and authorization work, including a user trying to reach data that isn't theirs
- [ ] Data is persistent
- [ ] Error, loading and empty states exist
- [ ] Another developer can run it from the README alone
- [ ] The MVP satisfies its product brief
- [ ] `decisions.md` shows reviewed decisions, not blind acceptance

## Resources

Use these **as references while building**. Do not finish them all before you start.

- [Next.js Learn](https://nextjs.org/learn)
- [PostgreSQL tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [Docker: Get started](https://docs.docker.com/get-started/)
- [GitHub Actions documentation](https://docs.github.com/actions)
- [web.dev: Learn performance](https://web.dev/learn/performance)

Any stack you already know well is fine. The goal is delivering a whole product with agents, not learning a new framework.

## Next

Phase 5 · Agent engineering: you will add agent workflows to this product.
