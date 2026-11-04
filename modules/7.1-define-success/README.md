# 7.1 · Define success before optimizing the agent

**Phase 7 · Evals, security and quality gates** · Estimated time: 6–8 hours

## Objective

Replace "the agent seems better" with measurement. Define what success means for an agent feature, build a set of test cases that covers it, and measure where you stand before changing anything.

## Why it matters

AI output varies from run to run, and a change that fixes one case can quietly break three others. Without evals, every prompt tweak or model switch is a guess, and you find the damage when a client does. An eval set is to an agent what a test suite is to code: the thing that lets you change it with confidence.

## Learn

- Success criteria that can be measured: correctness, format, safety, cost, latency
- Building an eval set: typical cases, edge cases, failure and adversarial cases
- Grading methods: exact checks in code, rubrics, and a model as grader
- Checking that a model grader agrees with your own judgment
- Taking a baseline before you optimize

## Practical task

Pick **one agent feature** you have built: the feature from module 5.1, the skill from 6.3, or the agent using your MCP server from 6.2.

1. **Define success.** Write 3 to 5 criteria, each measurable. For example: "routes the request to the right team", "never invents a booking that isn't in the data", "replies in the user's language", "costs under a set amount per run".
2. **Build the dataset.** At least **30 cases**, each with its input and what a correct result looks like:
   - **Typical cases:** what real users will send most often
   - **Edge cases:** empty, long, ambiguous, mixed-language or contradictory inputs
   - **Failure and adversarial cases:** requests outside the feature's job, and inputs that try to make it misbehave
3. **Choose how to grade** each criterion. Use exact checks in code wherever you can. Where you need judgment, write a rubric. If a model grades with that rubric, compare its grades with yours on at least 10 cases, and adjust the rubric until you agree.
4. **Measure the baseline.** Run the feature on every case, and grade it. Record the score per criterion and per case type. Don't change the feature yet.

## Deliverable

```
work/7.1-define-success/
├── criteria.md       # the success criteria, and how each one is graded
├── dataset/          # the 30+ cases (JSON, CSV or Markdown), grouped by type
├── rubric.md         # rubrics for judgment-based criteria; model-grader agreement check
└── baseline.md       # baseline scores per criterion and per case type, and notable failures
```

## Definition of Done

- [ ] Success criteria are defined and measurable
- [ ] The dataset has 30+ cases, including typical, edge and failure cases
- [ ] Each criterion has a grading method, and code checks are used where possible
- [ ] Any model grader was checked against your own judgment
- [ ] The baseline was measured before any optimization

## Resources

- [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- [Anthropic: Define success criteria and build evaluations](https://docs.anthropic.com/en/docs/test-and-evaluate/develop-tests)
- [Hamel Husain: Your AI product needs evals](https://hamel.dev/blog/posts/evals/)

## Next

7.2 · Regression testing for agent systems: turn this eval set into a check you run on every change.
