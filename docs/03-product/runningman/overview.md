---
sidebar_position: 1
---

# RunningMan Overview

RunningMan is the Agent Mantis test execution engine. It interprets workflows, drives Playwright, and reports results.

## Architecture

RunningMan runs as a containerised service that:

1. Receives workflow execution requests
2. Launches a Playwright browser instance
3. Interprets each workflow step using AI
4. Captures screenshots, video, and traces
5. Reports results back to the Portal

## Execution modes

- **Cloud** — Managed execution via Agent Mantis infrastructure
- **Local** — Run workflows on your own machine for development

<!-- TODO: Expand with deployment details -->

