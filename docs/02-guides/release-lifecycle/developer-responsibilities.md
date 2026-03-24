---
sidebar_position: 2
---

# Developer Responsibilities

Every contributor to the project is expected to follow these testing standards. They are enforced by the CI/CD pipeline and by code review.

## Rules

1. **Every code change requires a test.** Whether committed via a pull request or directly to main, every change must have an accompanying functional test.
2. **Every new function, component, or endpoint must have a corresponding test** that validates its expected inputs, outputs, and error handling.
3. **Commits always deploy to dev.** Developers may commit directly to main or via a pull request. Every commit triggers a deployment to the **dev** environment — this is never blocked.
4. **Functional tests run on dev and gate promotion.** After the build is deployed to dev, the functional test suite runs automatically against the dev environment. If any functional test fails, the build cannot be promoted to UAT or production.
5. **Tests must pass before release.** The release pipeline runs regression and smoke suites against higher environments. If any test fails, the release is halted.

## What This Means in Practice

- When you pick up a ticket, plan the test alongside the implementation — not as an afterthought.
- Name your functional test spec with the ticket key (e.g. `MAN-452-environment-variable-limits.spec.ts`) so the pipeline can verify coverage automatically.
- Every commit deploys to dev automatically. Your functional tests run there — if they fail, the build is blocked from promotion.
- A ticket is **not considered complete** until its functional test is written, passing, and merged.

## Further Reading

- [Functional Tests →](./functional-tests) — how to write and name ticket-scoped tests.
- [CI/CD Test Gates →](./ci-cd-gates) — how the pipeline enforces these rules.

