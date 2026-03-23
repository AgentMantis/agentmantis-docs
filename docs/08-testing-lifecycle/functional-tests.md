---
sidebar_position: 3
---

# Functional Tests

Functional tests validate that a specific feature or requirement works as intended. Each test is scoped to a single ticket and exercises the acceptance criteria defined in that ticket.

## What a Functional Test Should Do

- **Prove a feature meets its requirements** — verify the behaviour described in the ticket's acceptance criteria.
- **Test both happy and unhappy paths** — cover expected inputs as well as validation errors, edge cases, and permission boundaries.
- **Be self-contained** — each spec should set up its own data, run its assertions, and clean up afterwards without depending on other specs.

## Connecting Tests to Tickets

- **File naming** — name specs as `{TICKET}-{description}.spec.ts` (e.g. `MAN-452-environment-variable-limits.spec.ts`).
- **Describe block** — include the ticket key in `test.describe` so test reports link back to the source requirement (e.g. `test.describe('MAN-452 Environment variable limits', ...)`).
- This traceability makes it easy to look up which ticket a failing test relates to and why the test exists.

## Who Is Responsible

The **developer working the ticket** is responsible for creating the functional test as part of delivering the feature. A ticket is not considered complete until its functional test is written, passing, and merged.

## Promoting Tests

Once a feature is stable and the ticket is closed, promote the spec to `tests/regression/` (or `tests/smoke/` for critical-path checks) so it continues to guard against regressions.

