---
sidebar_position: 6
---

# CI/CD Test Gates

The GitHub Actions pipeline enforces testing at every stage of the development and release process. If any check fails — missing test coverage for a ticket, or a failing test — the pipeline fails and the action (merge, deploy, or release) cannot proceed.

## Pipeline Stages

| Stage              | Suite Run                          | Environment        | Blocks                    |
|--------------------|------------------------------------|--------------------|---------------------------|
| Deploy to Dev      | Acceptance (post-deploy)           | Dev                | Promotion to UAT / Prod   |
| Pre-Release (UAT)  | Ticket-to-test check + Regression | UAT                | UAT deployment            |
| Pre-Release (Prod) | Regression                        | UAT                | Production deploy         |
| Post-Deploy        | Smoke                              | Production         | Rollback triggered        |

Builds always deploy to dev. If the acceptance tests fail on dev, the build is marked as failed and cannot be promoted. No code reaches UAT or production without passing acceptance tests on dev first.

## Ticket-to-Test Verification

Every release includes a manifest of tickets being shipped. Before a deployment to UAT can proceed, the pipeline performs a ticket-to-test check:

- Each ticket listed in the release is matched against the acceptance test directory (`e2e/tests/acceptance/`).
- The match is based on the ticket key in the spec filename (e.g. ticket `MAN-452` must have a corresponding `MAN-452-*.spec.ts` file).
- **If any ticket in the release does not have a matching acceptance test, the UAT deployment is blocked.**

This ensures that no untested work reaches UAT or any environment beyond it.

## Gate Summary

- **No test → no promotion.** If acceptance tests fail on dev, the build cannot be promoted to UAT or production.
- **No match → no UAT.** Every ticket in a release must have a corresponding acceptance test.
- **No pass → no release.** Regression and smoke suites must pass before and after deployment.

