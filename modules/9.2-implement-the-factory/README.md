# 9.2 · Implement the AI software factory

**Phase 9 · Capstone: the AI software factory** · Estimated time: 20–30 hours

## Objective

Turn your factory design into a working, reusable system, using the simplest architecture that works.

## Why it matters

A design on paper doesn't make the next project faster; a working system does. The temptation here is to over-build: a dozen agents, a custom platform, a dashboard. Resist it. The best factory is the smallest one that reliably takes a request through every stage, with you in control at the gates.

## Learn

Nothing new: the instructions files, skills, MCP servers, orchestration, evals and quality gates you already built are the materials. Learn anything missing just in time, then write it into the factory as an instruction, a skill, a check or a documented decision.

## Practical task

1. **Choose the simplest architecture.** For example: a repository with your instructions files, your skills library, a set of templates for each artifact, your MCP servers, and CI workflows for the gates. Add agents and orchestration only where module 5.1's lesson says they earn their place.
2. **Build the flow, stage by stage.** Make sure that:
   - A raw job description can enter the system
   - Unknowns produce questions, not invented requirements
   - A product brief and a plan are produced, and wait for your approval
   - The work becomes trackable tasks, such as issues
   - Each agent stays within its role
   - The quality gates run
   - You can stop or approve progress at every gate
   - The state survives an interrupted session
3. **Run a sample.** Take a job description you already know, from `jds/` or from module 2.1, through the factory as far as an approved plan and the first tasks. Fix what breaks.
4. **Document it** so that you could set it up again on a new machine, for a new project.

## Deliverable

```
work/9.2-implement-the-factory/
├── README.md        # what the factory is, how to set it up, how to start a project
├── sample-run.md    # the sample job description through the factory: each stage, what broke, what you fixed
└── ...              # or a link to the factory's own repository
```

The factory can live in this folder or in its own repository. Link it from `README.md`.

## Definition of Done

- [ ] A raw job description can enter the system
- [ ] Unknowns produce questions
- [ ] A product brief and a plan are produced
- [ ] The work becomes trackable tasks
- [ ] Agents stay within their roles
- [ ] The quality gates run
- [ ] A human can stop or approve progress at every gate
- [ ] The state survives an interrupted session
- [ ] The sample run is documented

## Resources

- [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/overview)
- [OpenAI Codex documentation](https://developers.openai.com/codex/)
- [Model Context Protocol](https://modelcontextprotocol.io/introduction)
- [Example skills](https://github.com/anthropics/skills)
- [GitHub Actions documentation](https://docs.github.com/actions)

## Next

9.3 · Run a new job description end to end and ship: prove the factory on a project it has never seen.
