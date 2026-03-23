---
sidebar_position: 1
---

# Testing Lifecycle Overview

Agent Mantis organises end-to-end tests into three tiers. Each tier has a clear purpose, a defined owner, and rules about when and where it runs. Tests flow through these tiers as features move from development to production.

## The Three Tiers

```
Functional  ──▶  Regression  ──▶  Smoke
(per-ticket)    (feature-wide)   (critical-path)
```

| Tier | Purpose | Mutates data? | Runs in prod? |
|------|---------|---------------|---------------|
| **Functional** | Prove a single ticket's acceptance criteria | Yes | No |
| **Regression** | Guard existing features against side effects | Yes | No |
| **Smoke** | Verify critical paths are alive after deploy | No | Yes |

## Test Promotion Flow

1. A developer writes a **functional test** while working a ticket.
2. Once the ticket is closed and the feature is stable, the spec is promoted to **regression**.
3. If the scenario covers a critical production path, it may be further promoted to **smoke**.

This promotion model keeps each tier focused and prevents test suites from growing without purpose.

## Further Reading

- [Functional Tests →](./functional-tests)
- [Regression Tests →](./regression-tests)
- [Smoke Tests →](./smoke-tests)

