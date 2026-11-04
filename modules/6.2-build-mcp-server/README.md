# 6.2 · Build a custom MCP server

**Phase 6 · MCP and skills** · Estimated time: 8–10 hours

## Objective

Expose a real capability of your product to agents through a clean, safe MCP interface that another agent or client can use without your help.

## Why it matters

Clients increasingly want their systems to work with AI assistants: their own, their staff's, their customers'. An MCP server is how you offer that without handing over database access or writing a custom integration for every assistant. A good server is like a good API: clear contracts, validated inputs, useful errors, and no more access than the job needs.

## Learn

- MCP server SDKs (TypeScript, Python and others)
- Designing tools: names, descriptions and input schemas a model understands
- Resources: read-only data the agent can load
- Input validation and error messages that help the agent recover
- Least privilege: read-only first, write actions behind explicit approval
- Testing a server: the MCP Inspector, then a real agent

## Practical task

Build a small MCP server for **your Phase 4 product**. Choose **one capability** that would be useful to an agent or to the client's team. For example:

- Look up records (bookings, orders, content) through the product's API
- Report the product's status: recent errors, failing jobs, usage
- Create or update one kind of item, such as a draft or a task, with approval

Steps:

1. **Design first.** List 2 to 4 tools (and resources, if useful). For each one: its name, what it does, its inputs and their types, what it returns, and its errors.
2. **Build it** with an official SDK. Call your product through its API, not straight into its database.
3. **Validate and fail well.** Reject bad inputs with a message that says what to fix. Never return raw stack traces or secrets.
4. **Limit access.** Use a credential with only the permissions this server needs. Mark any tool that changes data, and require approval for it.
5. **Test** each tool with the MCP Inspector, then connect the server to an agent and complete a real task with it.
6. **Document** how to install, configure and use it, so someone else can connect it.

## Deliverable

```
work/6.2-build-mcp-server/
├── README.md       # what it exposes, install and configuration, example usage
├── design.md       # the tools: inputs, outputs, errors, permissions
└── test-log.md     # Inspector checks, the agent task, what you fixed
```

The server's code can live in this folder or in your Phase 4 project. Link it from `README.md`.

## Definition of Done

- [ ] Every tool and resource has a clear name, description and input schema
- [ ] Inputs are validated, and errors say what to fix
- [ ] The server uses the least access it needs, and write tools need approval
- [ ] No secrets are in the code or the logs
- [ ] Each tool was tested with the Inspector
- [ ] An agent completed a real task with the server
- [ ] Someone else could connect it from the README alone

## Resources

- [Build an MCP server](https://modelcontextprotocol.io/docs/develop/build-server)
- [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector)
- [MCP specification](https://modelcontextprotocol.io/specification/)
- [MCP security best practices](https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices)

## Next

6.3 · Create a reusable skill: package a procedure you repeat so an agent does it the same way every time.
