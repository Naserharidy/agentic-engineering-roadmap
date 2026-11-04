# 8.1 · From prototype to a production plan

**Phase 8 · Client delivery** · Estimated time: 8–10 hours

## Objective

Turn a new client request into a quick prototype that tests the riskiest assumption, then into a credible plan for getting it to production, without ever letting a prototype pass for a finished product.

## Why it matters

Agents make prototypes almost free. That is a gift and a trap. A prototype answers one question fast, such as "will users understand this?" or "can that API do what we need?". But a prototype that looks finished tempts everyone, including the client, to ship it as it is. Clients trust developers who show results quickly *and* say plainly what it will take to make them real.

## Learn

- Finding the riskiest assumption in a request
- The smallest prototype that tests it
- Collecting stakeholder feedback on a prototype
- Separating prototype shortcuts from production requirements
- A production plan: architecture, security, quality, deployment, monitoring, handover

## Practical task

Take a **new request** for your Phase 4 product: the next phase from its job description's long-term vision, a feature your brief left out of scope, or a request a real client would plausibly make next.

1. **Find the riskiest assumption.** Run a short discovery as in module 2.2, and write down what must be true for the request to succeed. Pick the assumption that is most uncertain *and* most costly if wrong.
2. **Prototype it.** Build the smallest thing that tests that one assumption, within a fixed time limit (one or two days at most). Agents can move fast here; let them.
3. **Get feedback.** Show it to someone playing the client, or to a real user. Record what they said, and whether the assumption held.
4. **List every shortcut.** Everything the prototype skipped or faked: data, auth, error handling, tests, security, scale.
5. **Write the production plan.** What it takes to make this real: architecture changes, security, quality gates, deployment, monitoring and handover. Reuse what you built in Phases 3 and 7. Include an estimate, and the risks.

## Deliverable

```
work/8.1-prototype-to-production/
├── assumption.md         # the request, the riskiest assumption, why it was chosen
├── prototype.md          # what was built, the time spent, how to run it, the feedback
└── production-plan.md    # the shortcuts, the plan to production, the estimate, the risks
```

Keep the prototype's code clearly separate from production code: a separate branch or folder, labelled as a prototype.

## Definition of Done

- [ ] The prototype tests one specific assumption
- [ ] It was built within its time limit
- [ ] Stakeholder feedback was collected and recorded
- [ ] Every shortcut is listed; the gaps to production are explicit
- [ ] The architecture, quality and security path to production is documented
- [ ] Nothing from the prototype is silently treated as production-ready

## Resources

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/)
- [The Twelve-Factor App](https://12factor.net/)
- [Atlassian: Product discovery guides](https://www.atlassian.com/software/jira/product-discovery/guides)

## Next

8.2 · Proposal, milestones and handover: run the whole engagement, from proposal to a client who can run the product without you.
