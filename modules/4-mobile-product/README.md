# 4.mobile · Deliver a mobile product

**Phase 4 · Field project (Mobile)** · Estimated time: 40–60 hours

## Objective

Prove you can deliver a whole mobile product, not only screens: from product brief to an app that runs on real devices and is ready for the stores, using the agent workflow from module 1.1.

## Why it matters

This is the project the rest of the roadmap builds on. In phases 5 to 7 you add agents, MCP, evals, security and quality gates to **this** product. Choose something you are willing to keep working on.

Mobile also tests whether your workflow holds up outside your usual stack. Agents write mobile code confidently, including code that breaks on a real device, offline, or in store review. Your job is to catch that.

## Choose a project

Your project starts from a real job description (JD), the way client work does. Choose one of two ways:

1. **Find a JD yourself.** Search a freelance marketplace (Upwork, Freelancer.com, Contra or similar) for a mobile app project posted by a real client. If one of your briefs from module 2.1 is a mobile project, you can use that JD.
2. **Use one of ours.** Pick a mobile JD from the [`jds/`](../../jds/README.md) folder.

### What makes a JD suitable

- **A real app with users and data.** Look for accounts, data that comes from an API, and something the user does again and again. A brochure app or a single form is too small.
- **Buildable in 40–60 hours as an MVP.** If the JD is bigger, cut it down to a clear first version in your brief.
- **Vague is fine.** Turning an unclear request into a clear scope is part of the work.

If the JD doesn't ask for some of the required capabilities below, add them to your brief as your own additions, and mark them as such.

Don't apply to the job or contact the client. You are using the JD only as practice material.

## Required capabilities

- Authentication
- API integration, including what happens when the API is slow or fails
- Local state and storage
- One device capability (camera, location, biometrics…) or push notifications
- Error and offline handling
- A release build that installs on a real device

## Practical task

1. Start from a product brief. If your JD doesn't have one yet, write it first using the format from module 2.1.
2. Choose **React Native** or **Flutter**. If you know TypeScript and React, React Native transfers the most. The goal is delivering a product with agents, not mastering a new framework.
3. Break the brief into small tasks an agent can complete and you can verify.
4. Build in short cycles: plan, approve, implement, test, review. Record decisions you validated yourself, especially where you rejected the agent's suggestion.
5. Test on at least one real device, not only a simulator. Turn off the network, and check what the user sees.
6. Prepare a store-ready build: app name, icon, splash screen, version number. Publishing to the stores is optional. A test build on TestFlight or a Google Play internal testing track is enough.

## Deliverable

```
work/4-mobile-product/
├── README.md          # what it is, how to run it, how to install the test build
├── jd.md              # the job description, with identifying details removed
├── brief.md           # the product brief it was built from
├── architecture.md    # screens, state, API layer, storage, key decisions
└── decisions.md       # decisions you validated; where you overrode the agent
```

The source code can live in this folder or in its own repository. If it has its own repository, link it from `README.md`.

## Definition of Done

- [ ] The app runs on a real device or a target simulator, from a release build
- [ ] The main journey works end to end
- [ ] Authentication works, and a signed-out user can't reach private screens
- [ ] API integration is robust: loading, errors and retries are handled
- [ ] The app behaves sensibly offline: no blank screens, no silent failures
- [ ] The device capability or notification works on a real device
- [ ] Another developer can run it from the README alone
- [ ] The MVP satisfies its product brief
- [ ] `decisions.md` shows reviewed decisions, not blind acceptance

## Resources

Choose **one** framework:

- [React Native: Get started](https://reactnative.dev/docs/getting-started)
- [Expo documentation](https://docs.expo.dev/) (the quickest way to start with React Native)
- [Flutter: Get started](https://docs.flutter.dev/get-started/install)

For test builds:

- [Apple: TestFlight](https://developer.apple.com/testflight/)
- [Google Play: Set up an open, closed or internal test](https://support.google.com/googleplay/android-developer/answer/9845334)

## Next

Phase 5 · Agent engineering: you will add agent workflows to this product.
