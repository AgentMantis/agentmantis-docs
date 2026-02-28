---
sidebar_position: 2
---

# Configuration Reference

<!-- TODO: Document configuration file format -->

Agent Mantis configuration options.

## Configuration file

```json
{
  "project": "my-app-tests",
  "environment": "staging",
  "timeout": 30000,
  "retries": 1
}
```

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| `project` | `string` | — | Project identifier |
| `environment` | `string` | `"default"` | Target environment name |
| `timeout` | `number` | `30000` | Step timeout in milliseconds |
| `retries` | `number` | `0` | Number of retries on failure |

<!-- TODO: Expand with all configuration options -->

