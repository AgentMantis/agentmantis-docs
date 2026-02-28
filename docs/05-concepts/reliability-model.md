---
sidebar_position: 6
---

# Reliability Model

How Agent Mantis achieves reliable test execution at scale.

## Flakiness reduction

Agent Mantis reduces test flakiness through:

- **Auto-waiting** — Never interacts with elements before they're ready
- **Self-healing selectors** — Adapts when UI changes
- **Smart retries** — Distinguishes transient failures from real bugs
- **AI interpretation** — Understands intent, not just DOM structure

## Failure analysis

When a test fails, Agent Mantis provides:

- Screenshot of the page state at failure
- Step-by-step execution log
- Suggested fixes (when possible)

## Monitoring

Track test reliability over time in the Portal dashboard:

- Pass rate trends
- Flaky test detection
- Average run duration

<!-- TODO: Add dashboard screenshots -->

