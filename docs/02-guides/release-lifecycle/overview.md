---
sidebar_position: 1
---

# Release Lifecycle Overview

Every code change in Agent Mantis must be backed by automated tests, and those tests gate every release through the CI/CD pipeline. This section outlines the development standards, testing tiers, and enforcement gates that ensure no untested work reaches production.

## The Three Tiers

```
Acceptance  ──▶  Regression  ──▶  Smoke
(per-ticket)    (feature-wide)   (critical-path)
```

| Tier | Purpose | Mutates data? | Runs in prod? |
|------|---------|---------------|---------------|
| **Acceptance** | Prove a single ticket's acceptance criteria | Yes | No |
| **Regression** | Guard existing features against side effects | Yes | No |
| **Smoke** | Verify critical paths are alive after deploy | No | Yes |

## Testing Workflow

The testing lifecycle follows a promotion model. Tests start as developer-owned acceptance tests and are promoted by QA into broader suites over time.

1. **Developer writes an acceptance test** — when working a ticket, the developer creates an acceptance test scoped to the ticket's acceptance criteria. After the build deploys to dev, this test runs automatically against the dev environment. If it fails, the build is blocked from progressing to UAT or production.
2. **QA promotes to regression or smoke** — once the feature is stable and the ticket is closed, QA reviews the acceptance test and promotes it to the appropriate suite.
3. **Ticket-to-test verification** — every release includes a manifest of tickets being shipped. Before deployment to UAT, the pipeline checks that each ticket has a matching acceptance test. If any ticket is missing a test, the UAT deployment is blocked.
4. **CI/CD enforces the gates** — the pipeline runs the appropriate test suites at every stage and blocks progress if any check fails.

This promotion model keeps each tier focused and prevents test suites from growing without purpose.

```
Developer writes code + acceptance test (named with ticket key)
        │
        ▼
   Code committed to main
        │
        ▼
   Deploy to dev → acceptance tests run on dev
        │
        ▼
   Release created → ticket manifest generated
        │
        ▼
   Ticket-to-test check → every ticket must have a matching spec
        │
        ▼
   Check passes → UAT deployment proceeds → regression tests run
        │
        ▼
   QA promotes acceptance test → regression / smoke
        │
        ▼
   Production release → regression tests must pass
        │
        ▼
   Production deploy → smoke tests must pass
```

**No test, no promotion. No match, no UAT. No pass, no release.**

## Further Reading

- [Developer Responsibilities →](./developer-responsibilities)
- [Acceptance Tests →](./acceptance-tests)
- [Regression Tests →](./regression-tests)
- [Smoke Tests →](./smoke-tests)
- [CI/CD Test Gates →](./ci-cd-gates)

