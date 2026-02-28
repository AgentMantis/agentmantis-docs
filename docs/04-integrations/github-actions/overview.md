---
sidebar_position: 1
---

# GitHub Actions Overview

Run Agent Mantis tests automatically on every pull request or push.

## Setup

1. Add your Agent Mantis API key as a GitHub Actions secret
2. Create a workflow file (see [Examples](./examples))
3. Configure which tests to run and when

## Triggers

- **Pull request** — Run smoke tests on every PR
- **Push to main** — Run full regression suite
- **Schedule** — Run tests on a cron schedule
- **Manual** — Trigger tests on demand via `workflow_dispatch`

## Results

Test results are reported back to your PR as status checks. Failed tests block merge (if configured).

