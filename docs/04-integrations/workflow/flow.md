---
sidebar_position: 1
---

# Flow

Execute another workflow as a sub-workflow. Flow is a **built-in** node type that lets you compose larger automations out of smaller, reusable workflows.

## Configuration

No external credentials are required. Flow nodes reference other workflows within the same team.

## Editor usage

Add a **Flow** node to the canvas.

### Data tab

| Field | Description |
|---|---|
| **Workflow** | Select the target workflow to execute as a sub-flow |

When the workflow runs, the Flow node triggers the selected workflow and waits for it to complete before allowing downstream nodes to execute.

### Workflow example

Break a complex test pipeline into smaller workflows — e.g. a "Setup" flow, a "Test" flow, and a "Teardown" flow — then compose them with Flow nodes in a parent workflow.
