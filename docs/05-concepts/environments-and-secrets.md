---
sidebar_position: 5
---

# Environments and Secrets

How Agent Mantis manages configuration across different deployment stages.

## Environments

An environment is a named configuration that includes:

- Target URL
- Variables (non-sensitive key-value pairs)
- Secrets (encrypted sensitive values)

## Secret management

Secrets are:

- Encrypted at rest using envelope encryption
- Never logged or displayed in the UI
- Scoped to a team — each team has isolated secret storage
- Available to workflows via variable substitution

## Security model

<!-- TODO: Link to security page when available -->

- Secrets are encrypted with per-team keys
- Agent Mantis never stores secrets in plain text
- Secrets are decrypted only at runtime, in memory

