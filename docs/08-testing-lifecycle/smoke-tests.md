---
sidebar_position: 5
---

# Smoke Tests

Smoke tests are lightweight, fast-running checks that verify the most critical paths of the application are functional. They act as a first line of defense after a deployment or environment change.

## What a Smoke Test Should Do

- **Verify core infrastructure is up** — confirm the app loads, key pages render, and essential services (auth, API) respond.
- **Test only happy-path flows** — cover the primary user journeys (e.g. login, navigate to dashboard) without edge cases.
- **Run quickly** — each test should complete in seconds, keeping the full suite under a few minutes.
- **Avoid data mutation** — prefer read-only assertions; do not create, update, or delete resources that could affect other tests or environments.
- **Target production-safe scenarios** — these tests may run against production, so they must never alter real user data or trigger irreversible actions.

## When to Run

- After every deployment to any environment.
- As a periodic health check on production.
- Before kicking off heavier regression or E2E suites.

