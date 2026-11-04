# 6.1 · Understand the Model Context Protocol

**Phase 6 · MCP and skills** · Estimated time: 3–4 hours

## Objective

Understand MCP as a standard way to connect AI applications to tools and data, and use an existing MCP server in real work on your product.

## Why it matters

An agent can only act on what it can reach. MCP is the common plug between agents and outside systems: a code host, a database, a browser, a design tool, a ticketing system. Connecting one is quick. Understanding what it can see and do, and what that means for security, is the part clients rely on you for.

## Learn

- The roles: host (the AI application), client (its connection), server (the tool provider)
- What a server exposes: tools, resources and prompts
- Transports: local (stdio) and remote (HTTP)
- Configuration and authentication
- Permissions: what the agent can read, what it can change, what needs your approval
- Security risks: over-broad tokens, and instructions hidden in tool results (prompt injection)

## Practical task

1. **Choose a server** that is useful for **your Phase 4 product**: for example your code host, your database, a browser for testing pages, or your issue tracker. Prefer official servers, or well-maintained ones.
2. **Connect it** to your agent environment. Give it the narrowest access that works: read-only, or a single project, where possible.
3. **Use it in a real task.** Complete a task on your product that uses **at least two** of the server's capabilities. For example: read open issues and draft a fix plan, or query test data and check a report against it.
4. **Observe.** Record each tool call the agent made: which tool, with what input, what came back, and whether you approved it.
5. **Assess the risk.** What could go wrong if the agent misused this access, or if a tool result contained hostile instructions? What did you limit, and what would you limit for a client?

## Deliverable

```
work/6.1-understand-mcp/
└── mcp-notes.md    # host/client/server in your setup, the configuration (no secrets),
                    # the permissions you granted, the tool calls you observed, the risk assessment
```

Never commit tokens or keys. Describe them ("a read-only token for one repository") instead.

## Definition of Done

- [ ] You can explain the host, client and server roles in your own setup
- [ ] The MCP connection works
- [ ] The agent used at least two of the server's capabilities in a real task
- [ ] Every tool call in the task is recorded
- [ ] Access is limited, and the security implications are written down
- [ ] No secrets are committed

## Resources

- [What is the Model Context Protocol?](https://modelcontextprotocol.io/docs/getting-started/intro)
- [MCP architecture overview](https://modelcontextprotocol.io/docs/learn/architecture)
- [MCP security best practices](https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices)
- [Reference and community MCP servers](https://github.com/modelcontextprotocol/servers)

## Next

6.2 · Build a custom MCP server: expose your own product to agents.
