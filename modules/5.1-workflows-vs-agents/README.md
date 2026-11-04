# 5.1 · Workflows vs autonomous agents

**Phase 5 · Agent engineering** · Estimated time: 6–8 hours

## Objective

Know when a fixed workflow is enough and when giving an AI model autonomy is worth it. Prove it by building the same feature both ways and measuring the difference.

## Why it matters

"Add an AI agent" is easy to promise and expensive to run. An autonomous agent chooses its own steps, so it can handle cases nobody planned for, but it is slower, costs more, and fails in ways that are harder to predict. A workflow with an AI model at fixed points is often more reliable and cheaper. Clients pay for the right choice, not for the most impressive one.

## Learn

- Workflows: prompt chaining, routing, parallel calls: the model works inside steps you define
- Agents: the model decides which tools to call and when to stop
- Tools: giving a model clear, narrow actions it can take
- Measuring reliability, cost and latency
- Choosing the simplest design that does the job

## Practical task

Use **your Phase 4 product**. Pick one small process in it that an AI model could help with. For example:

- Sort incoming requests or messages and route each one to the right place
- Draft a reply, a summary or a report from the product's data
- Check a submitted form or document and flag what is missing

### 1. Build it twice

- **As a workflow.** Fixed steps that you define. The model is called at known points, with known inputs, and its output is checked before the next step.
- **As an agent.** Give the model the goal and a small set of tools (read data, search, create a draft…), and let it decide the steps.

Use any model provider. Small, cheap models are fine for this module.

### 2. Measure

Prepare **at least 20 test inputs**, including awkward ones: empty fields, contradictions, inputs in another language, requests outside the feature's job. Run both versions on all of them and compare:

| | Workflow | Agent |
|---|---|---|
| Correct results (out of 20+) | | |
| Average cost per run | | |
| Average time per run | | |
| Lines of code and moving parts | | |
| Cases it handled that the other couldn't | | |

### 3. Decide

Choose which version ships, and why. Autonomy has to earn its place: if the workflow is as good, the workflow wins.

## Deliverable

```
work/5.1-workflows-vs-agents/
├── comparison.md     # the feature, both designs, the results table, your decision
└── test-inputs.md    # the 20+ inputs, and the expected result for each
```

The code for both versions lives in your Phase 4 project. Link it from `comparison.md`.

## Definition of Done

- [ ] Both versions work on the same feature
- [ ] Both were run on the same 20+ test inputs, including awkward ones
- [ ] Reliability, cost, time and complexity are measured, not estimated
- [ ] The decision is written down, with its reasons
- [ ] Autonomy is used only where the results justify it

## Resources

- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- [Building effective AI agents (Anthropic guide)](https://resources.anthropic.com/building-effective-ai-agents)
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)

## Next

5.2 · Context engineering and long-running tasks: keep agent work on track across many sessions.
