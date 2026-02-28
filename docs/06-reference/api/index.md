---
sidebar_position: 3
---

# API Reference

<!-- TODO: Generate from OpenAPI spec or document manually -->

Agent Mantis REST API reference.

## Authentication

All API requests require an API key passed in the `Authorization` header:

```
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### Workflows

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/workflows` | List workflows |
| `GET` | `/api/workflows/:id` | Get workflow details |
| `POST` | `/api/workflows/:id/run` | Trigger a workflow run |

### Runs

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/runs` | List runs |
| `GET` | `/api/runs/:id` | Get run details |
| `GET` | `/api/runs/:id/artefacts` | Get run artefacts |

<!-- TODO: Add request/response schemas for each endpoint -->

