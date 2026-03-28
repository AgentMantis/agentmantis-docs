---
sidebar_position: 4
---

# Regression Tests

Regression tests verify that existing features continue to work correctly after code changes. They are the primary safety net against unintended side effects.

## What a Regression Test Should Do

- **Cover full feature lifecycles** — test create, read, update, and delete flows end-to-end for each feature.
- **Validate business-critical workflows** — ensure key user journeys (e.g. environment management, team invitations, navigation) behave as expected.
- **Use Page Object Models (POMs)** — all interactions go through POMs that extend `BasePage` for consistency and maintainability.
- **Be parallel-safe** — use the `testData` fixture to stamp unique values so tests never collide when running concurrently.
- **Clean up after themselves** — leverage `setUp()` and `tearDown()` in POMs to create and remove test data.

## Where Regression Tests Run

- **Staging / QA environments** — run as part of CI on every pull request and merge to the default branch.
- **Not in production** — regression tests mutate data (create, update, delete), so they must not target production.

## Promoting Tests Here

Tests graduate to this folder from `tests/acceptance/` once their coverage is stable and no longer tied to a single in-progress ticket. See [Acceptance Tests → Promotion Lifecycle](./acceptance-tests#promotion-lifecycle) for the full promotion checklist.

