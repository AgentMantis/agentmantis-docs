---
sidebar_position: 4
---

# Retries and Waiting

Configure how Agent Mantis handles timing and transient failures.

## Auto-waiting

Agent Mantis automatically waits for elements to be actionable before interacting with them (powered by Playwright's auto-wait).

## Retry configuration

- **Step retries** — Retry a failed step N times before marking it as failed
- **Workflow retries** — Re-run the entire workflow on failure

## Timeouts

- **Step timeout** — Maximum time to wait for a single step
- **Workflow timeout** — Maximum total execution time

## Best practices

- Use auto-waiting instead of fixed delays
- Set reasonable timeouts based on your application's response times
- Use retries sparingly — flaky tests should be fixed, not retried

