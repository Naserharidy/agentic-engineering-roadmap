# 7.4 · Quality gates: CI/CD, end-to-end tests and release readiness

**Phase 7 · Evals, security and quality gates** · Estimated time: 10–14 hours

## Objective

Build the quality layer that separates AI-generated code from production-ready software: a pipeline that blocks anything broken, insecure or unreviewed from reaching your users, and a plan for when something goes wrong anyway.

## Why it matters

Agents let you ship more code, faster. That only helps if the code that ships works. Quality gates turn your standards into checks nobody can skip: not you on a tired evening, not a teammate, not an agent. This is what a client means by "production-ready", whether they say it or not.

## Learn

- Unit and integration tests
- End-to-end tests of critical user journeys
- Accessibility and performance checks
- Security basics: the OWASP Top 10
- Dependency and secret scanning
- CI/CD, and branch protection that enforces it
- Observability: knowing when production breaks
- Backups, recovery and rollback

## Practical task

Add a **mandatory quality pipeline** to **your Phase 4 product**:

```
Lint → Type check → Tests → End-to-end → Security → Build → Human review → Deploy
```

1. **Automate the checks.** Run lint, type checks, unit and integration tests, and the build on every pull request.
2. **Cover the critical journey end to end.** At least one automated test of the main journey from your brief:
   - **Web and CMS:** Playwright or similar
   - **Mobile:** Maestro, Flutter integration tests, or similar
3. **Add security checks:** dependency scanning and secret scanning, and fix what they find. Check your product against the most relevant OWASP Top 10 risks.
4. **Check accessibility and performance** where they apply: automated accessibility checks on key pages or screens, and a performance budget for your field.
5. **Include your evals.** If your product has an agent feature, run its evals from module 7.2 when the agent's prompts, tools or configuration change.
6. **Enforce it.** Protect the main branch: required checks must pass and a review must be approved before merging. Deploy only from the main branch.
7. **Prepare for production.** Set up error tracking or logging so you see failures before users report them. Document how to deploy, how to roll back, and how data is backed up and restored.

## Deliverable

```
work/7.4-quality-gates/
├── pipeline.md          # each gate, what it checks, how it is enforced; link to a blocked run
└── readiness.md         # production readiness checklist: observability, deployment, rollback,
                         # backup and recovery, known risks
```

The pipeline itself lives in your Phase 4 project. Link it from `pipeline.md`, together with a run where a gate blocked a broken change.

## Definition of Done

- [ ] The pipeline blocks broken builds, and branch protection enforces it
- [ ] The critical journey has end-to-end coverage
- [ ] Dependency and secret scanning run, and nothing secret is committed
- [ ] Basic security, accessibility and performance checks run
- [ ] Agent evals run when the agent changes, if the product has one
- [ ] Production errors can be observed
- [ ] Deployment, rollback, backup and recovery are documented
- [ ] A gate has been seen blocking a broken change

## Resources

- [Playwright: Best practices](https://playwright.dev/docs/best-practices)
- [Maestro: end-to-end testing for mobile and web](https://maestro.dev)
- [Flutter: Testing overview](https://docs.flutter.dev/testing/overview)
- [OWASP Top 10:2025](https://top10.owasp.org/2025/)
- [GitHub: About secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning)
- [GitHub: Dependabot](https://docs.github.com/en/code-security/dependabot)
- [web.dev: Learn accessibility](https://web.dev/learn/accessibility)
- [web.dev: Learn performance](https://web.dev/learn/performance)
- [GitHub Actions documentation](https://docs.github.com/actions)

Reading these doesn't complete the module. The gates have to run and block.

## Next

Phase 8 · Client delivery: turn a working product into a delivery a client can sign off and run.
