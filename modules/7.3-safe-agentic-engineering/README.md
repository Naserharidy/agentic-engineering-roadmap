# 7.3 · Safe agentic engineering

**Phase 7 · Evals, security and quality gates** · Estimated time: 6–8 hours

## Objective

Design agents that can act usefully without holding more authority than they need. Threat-model everything agentic you have built so far, and put controls in place that you have actually tested.

## Why it matters

An agent with broad access is an attack surface. It can be tricked by instructions hidden in a web page, an email or a database record. It can run a destructive command by mistake. It can leak a secret into a log or a reply. Clients trust you with their systems and their data; showing that your agents are controlled is part of the job.

## Learn

- Threat modeling: assets, actors, trust boundaries, threats, controls
- Least privilege for tools, tokens and file access
- Prompt injection: instructions arriving through data
- Excessive agency: an agent allowed to do more than its task needs
- Secrets management
- Destructive actions, and controls on them
- Human approval gates
- Audit logs: being able to answer "what did the agent do, and why?"

## Practical task

Cover everything agentic you have built: your coding-agent setup (modules 1.1 and 5.x), the agent feature in your product (5.1), and your MCP servers (6.1 and 6.2).

### 1. Threat model

- **Assets:** data, systems and accounts the agents can reach
- **Actions:** what each agent can do, marking anything that changes data, spends money, sends messages or deletes
- **Trust boundaries:** where untrusted input reaches an agent: user input, web content, tool results, documents
- **Threats:** for each boundary, what could go wrong. Include prompt injection, excessive agency, secret leakage and destructive mistakes.

### 2. Controls

Put controls in place for the highest risks:

- Narrow tokens and permissions for each tool and server
- Deny or confirm rules for dangerous commands in your coding agent
- Human approval before sensitive actions in your product
- Secrets kept out of prompts, logs, code and replies
- An audit log of agent actions: what, when, with what input, approved by whom

### 3. Test them

Try to break at least **two** controls. For example: hide an instruction in a record your product's agent reads, and check that it isn't followed. Or ask your coding agent to run a blocked command, and check that it is stopped. Record what happened, and fix what failed.

## Deliverable

```
work/7.3-safe-agentic-engineering/
├── threat-model.md    # assets, actions, trust boundaries, threats, and their risk
├── controls.md        # the controls in place, and the risk each one addresses
└── tests.md           # the attempts to break controls, the results, the fixes
```

## Definition of Done

- [ ] Sensitive assets and actions are identified
- [ ] Every point where untrusted input reaches an agent is listed
- [ ] Least privilege is applied to tools, tokens and servers
- [ ] Destructive and sensitive actions require control
- [ ] Secrets are protected, and none are committed
- [ ] Agent actions are auditable
- [ ] Human approval boundaries are documented
- [ ] At least two controls were tested by trying to break them

## Resources

- [OWASP Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/)
- [MCP security best practices](https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices)
- [Claude Code: Security](https://docs.anthropic.com/en/docs/claude-code/security)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

## Next

7.4 · Quality gates: make tests, security checks and review mandatory before anything reaches production.
