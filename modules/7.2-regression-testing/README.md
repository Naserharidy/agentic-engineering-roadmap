# 7.2 · Regression testing for agent systems

**Phase 7 · Evals, security and quality gates** · Estimated time: 6–8 hours

## Objective

Turn your eval set into a regression check you can run with one command, and use it to decide, with evidence, whether a change to the agent made it better or worse.

## Why it matters

Prompts, tool descriptions and models change all the time, often by someone other than you, including the model provider. An eval you ran once is a snapshot. An eval you can rerun on every change is a safety net: it shows exactly which cases improved, which broke, and whether the trade is worth it.

## Learn

- Building a repeatable eval runner
- Comparing two versions case by case, not only by total score
- Grouping failures into categories to find their causes
- Variance: running cases more than once when results vary
- Running evals automatically when prompts, tools or models change

## Practical task

Use the feature and the eval set from module 7.1.

1. **Build the runner.** One command runs every case, grades it and writes a results file. Save each run with its date and the version of the feature it tested.
2. **Make changes.** Try **2 or 3 changes** aimed at the weaknesses the baseline showed. For example: rewrite the instructions, change a tool description, add an example, or switch the model.
3. **Compare.** For each change, run the evals and compare with the baseline **case by case**:
   - Which cases improved? Which regressed? Which stayed the same?
   - Group the remaining failures into categories, such as wrong tool, missing data, wrong format, or unsafe action.
   - If results vary between runs, run each case more than once and compare the averages.
4. **Decide.** Keep a change only if the evidence supports it. A higher total that breaks a critical case is not an improvement.
5. **Automate.** Run the evals automatically when the files that define the agent change (prompts, tools, configuration), for example in CI. If cost makes that impractical, document exactly when and how they are run.

## Deliverable

```
work/7.2-regression-testing/
├── runner.md        # how to run the evals, and where the runner lives
├── comparison.md    # baseline vs. each change: case-by-case results, failure categories,
│                    # decisions with their evidence
└── results/         # saved results of each run
```

The runner's code can live in this folder or in your Phase 4 project. Link it from `runner.md`.

## Definition of Done

- [ ] The evals run with one command, and every run is saved
- [ ] Each change was compared with the baseline case by case
- [ ] Failures are grouped into categories
- [ ] Every kept change is supported by evidence; regressions are explained or reverted
- [ ] The evals run automatically on relevant changes, or when to run them is documented

## Resources

- [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- [Anthropic: Define success criteria and build evaluations](https://docs.anthropic.com/en/docs/test-and-evaluate/develop-tests)
- [Hamel Husain: Your AI product needs evals](https://hamel.dev/blog/posts/evals/)
- [GitHub Actions documentation](https://docs.github.com/actions)

## Next

7.3 · Safe agentic engineering: give your agents what they need to be useful, and nothing more.
