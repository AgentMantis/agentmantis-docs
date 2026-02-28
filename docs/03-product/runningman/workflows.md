---
sidebar_position: 2
---

# Workflows

A workflow is a sequence of steps that define a test scenario.

## Workflow structure

Each workflow contains:

- **Name** — A descriptive identifier
- **Steps** — Ordered list of actions and assertions
- **Environment** — Target environment for execution
- **Configuration** — Timeout, retries, and other settings

## Creating workflows

<!-- TODO: Document workflow creation process -->

## Workflow execution order

Steps execute sequentially. If a step fails, the workflow stops (unless retries are configured).

