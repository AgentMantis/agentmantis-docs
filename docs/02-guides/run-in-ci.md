---
sidebar_position: 3
---

# Run in CI

Integrate Agent Mantis into your CI/CD pipeline with GitHub Actions.

## Quick setup

```yaml
# .github/workflows/agent-mantis.yml
name: Agent Mantis Tests
on:
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # TODO: Replace with actual Agent Mantis action
      - name: Run Agent Mantis
        run: echo "Agent Mantis CI integration coming soon"
```

## PR gating strategy

- **Smoke tests** — Run on every PR (fast, critical paths only)
- **Regression suite** — Run on merge to main (comprehensive)

## Environment variables

Set your Agent Mantis API key and target URL as GitHub Actions secrets:

```yaml
env:
  AGENT_MANTIS_API_KEY: ${{ secrets.AGENT_MANTIS_API_KEY }}
  TARGET_URL: ${{ secrets.TARGET_URL }}
```

## Next steps

- [GitHub Actions integration →](../integrations/github-actions/overview)
- [Secrets and environments →](./secrets-and-envs)

