---
sidebar_position: 2
---

# GitHub Actions Examples

Copy-paste workflow configurations for common scenarios.

## Basic PR check

```yaml
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
      - name: Run Agent Mantis smoke tests
        run: echo "Coming soon"
        env:
          AGENT_MANTIS_API_KEY: ${{ secrets.AGENT_MANTIS_API_KEY }}
```

## Scheduled regression

```yaml
name: Nightly Regression
on:
  schedule:
    - cron: '0 2 * * *'  # 2 AM UTC daily

jobs:
  regression:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # TODO: Replace with actual Agent Mantis action
      - name: Run Agent Mantis regression suite
        run: echo "Coming soon"
        env:
          AGENT_MANTIS_API_KEY: ${{ secrets.AGENT_MANTIS_API_KEY }}
```
