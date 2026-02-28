---
sidebar_position: 4
---

# Secrets and Environments

Manage environment-specific configuration and sensitive values securely.

## Environments

Environments let you run the same workflow against different targets:

| Environment | URL | Purpose |
|---|---|---|
| `dev` | `https://dev.myapp.com` | Development testing |
| `staging` | `https://staging.myapp.com` | Pre-production validation |
| `production` | `https://myapp.com` | Production smoke tests |

## Variables

Variables are non-sensitive values that change per environment (URLs, feature flags, test data).

## Secrets

Secrets are encrypted values (passwords, API keys, tokens) that are:

- Encrypted at rest
- Never displayed in logs or UI
- Available to workflows at runtime

<!-- TODO: Add Portal UI instructions for managing secrets -->

## Best practices

- Never hardcode credentials in workflows
- Use separate environments for each deployment stage
- Rotate secrets regularly

