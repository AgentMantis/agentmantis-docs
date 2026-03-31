---
sidebar_position: 13
---

# Asana

Create and manage Asana tasks from a workflow.

## Configuration

Navigate to **Settings → Integrations → Add Integration → Asana**.

### Authentication methods

| Method | Fields |
|---|---|
| **Connect with Asana** (OAuth) | Click the button to authorise via Asana OAuth. |
| **Personal Access Token** | Provide an Asana PAT from **My Settings → Apps → Personal Access Tokens**. |

Click **Test Connection** to verify the credentials.

## Editor usage

Add an **Asana** node to the canvas.

### Data tab

Fields vary by operation. Common fields include:

| Field | Description |
|---|---|
| **Operation** | The action to perform (e.g. create task, update task) |
| **Project** | Target Asana project |
| **Task Name** | Task title (supports variable interpolation) |
| **Notes** | Task description (supports variable interpolation) |

### Config tab

Select which Asana connection to use.

### Workflow example

Connect a **Playwright** node → **Asana** node to automatically create tasks for test failures with details from the run.

