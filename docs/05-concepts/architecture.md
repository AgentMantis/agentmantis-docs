---
sidebar_position: 1
---

# Architecture

High-level overview of how Agent Mantis is built.

## System components

| Component | Role |
|---|---|
| **Portal** | Web dashboard (Angular) — project management, results viewing |
| **Editor** | Workflow authoring UI |
| **RunningMan** | Test execution engine (Node.js + Playwright) |
| **Workflow Runner API** | REST API for triggering and managing runs |
| **Integration API** | Connects to external services (Jira, GitHub, etc.) |
| **Mantis Chat** | AI conversation layer for test generation |

## Infrastructure

- **GCP Cloud Run** — Containerised services
- **Firebase/Firestore** — Data storage and authentication
- **Pub/Sub** — Async message passing between services
- **Cloud Storage** — Artefact storage (screenshots, videos)

<!-- TODO: Add architecture diagram -->

