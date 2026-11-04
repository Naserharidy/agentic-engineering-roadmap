# 4.cms · Deliver a CMS project

**Phase 4 · Field project (CMS)** · Estimated time: 30–45 hours

## Objective

Deliver a business website on **WordPress or Drupal** that the client's own team can run without calling you, and learn to choose a platform for the client's problem instead of forcing every project into a custom application.

## Why it matters

This is the project the rest of the roadmap builds on. In phases 5 to 7 you add agents, MCP, evals, security and quality gates to **this** product. Choose something you are willing to keep working on.

In CMS work the real users are often the editors, not only the visitors. A site that looks right but that editors can't update without a developer isn't finished.

## Choose a project

Your project starts from a real job description (JD), the way client work does. Choose one of two ways:

1. **Find a JD yourself.** Search a freelance marketplace (Upwork, Freelancer.com, Contra or similar) for a WordPress or Drupal project posted by a real client. If one of your briefs from module 2.1 is a CMS project, you can use that JD.
2. **Use one of ours.** Pick a CMS JD from the [`jds/`](../../jds/README.md) folder.

### What makes a JD suitable

- **Content that changes.** Look for several types of content (services, projects, team, news, locations), editors who update it, and a form or integration. A single static page is too small.
- **Buildable in 30–45 hours.** If the JD is bigger, cut it down to a clear first version in your brief.
- **Vague is fine.** Turning an unclear request into a clear scope is part of the work.

If the JD doesn't ask for some of the required capabilities below, add them to your brief as your own additions, and mark them as such.

Don't apply to the job or contact the client. You are using the JD only as practice material.

## Required capabilities

- Structured content: custom content types and fields, not everything in one page editor
- Roles and permissions for editors
- Multilingual or configurable content
- Forms or an integration (CRM, email, maps, booking…)
- Performance basics: caching, image sizes, page speed
- Security basics: updates, user accounts, backups
- Deployment, with a way to move changes between environments

## Practical task

1. Start from a product brief. If your JD doesn't have one yet, write it first using the format from module 2.1.
2. **Justify the platform.** Before you build, write down why a CMS fits this client better than a custom application, and why WordPress or Drupal.
3. **Model the content.** List the content types, their fields and how they relate. Decide who can create, edit and publish each one.
4. Build in short cycles with the agent workflow from module 1.1: plan, approve, implement, test, review. Agents are good at generating theme code and plugins or modules; check what they add, and prefer well-maintained existing plugins or modules over generated ones where they fit.
5. Deploy it, and write a short guide for editors. Then ask someone who isn't a developer to make a change using only that guide.

## Deliverable

```
work/4-cms-project/
├── README.md           # what it is, live link, how to run it locally, how to deploy
├── jd.md               # the job description, with identifying details removed
├── brief.md            # the product brief it was built from
├── content-model.md    # content types, fields, relations, roles and permissions
├── decisions.md        # why a CMS, why this one; where you overrode the agent
└── editor-guide.md     # how editors do the common tasks, without a developer
```

The site's code (theme, custom plugins or modules, configuration) can live in this folder or in its own repository. If it has its own repository, link it from `README.md`.

## Definition of Done

- [ ] The site is deployed and reachable
- [ ] Editors can manage content without developer help, tested with someone who isn't a developer
- [ ] Content is structured, not hard-coded in templates
- [ ] Roles and permissions fit the client's team
- [ ] Multilingual or configurable content works
- [ ] The form or integration works end to end
- [ ] Performance and security basics are addressed
- [ ] Deployment is documented and repeatable
- [ ] The choice of CMS over a custom application is justified in `decisions.md`

## Resources

Choose according to your project:

- [WordPress Developer Resources](https://developer.wordpress.org/)
- [Learn WordPress](https://learn.wordpress.org/)
- [Drupal User Guide](https://www.drupal.org/docs/user_guide/en/index.html)
- [Drupal developer documentation](https://www.drupal.org/docs/develop)

Focus on content modeling, the editor experience, permissions, multilingual content, integrations, security and deployment.

## Next

Phase 5 · Agent engineering: you will add agent workflows to this product.
