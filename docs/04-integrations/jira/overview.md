---
sidebar_position: 1
---

# Jira

Create, update, and query Jira issues directly from a workflow.

## Configuration

Navigate to **Settings → Integrations → Add Integration → Jira**.

| Field | Description |
|---|---|
| **Name** | A friendly label for this connection (e.g. "Jira – Production") |
| **Domain** | Your Atlassian domain ending in `.atlassian.net` (e.g. `myteam.atlassian.net`) |
| **Email** | The email address associated with your Atlassian account |
| **API Token** | An Atlassian API token (starts with `ATATT`). Generate one at [id.atlassian.com](https://id.atlassian.com/manage-profile/security/api-tokens). |

Click **Test Connection** to verify the credentials. On success you'll see the connected Atlassian user.

## Editor usage

Add a **Jira** node to the canvas. The settings panel includes:

### Data tab

| Field | Description |
|---|---|
| **Operation** | The action to perform — `create-issue`, `get-issue`, `update-issue` |
| **Project Key** | The Jira project key (e.g. `PROJ`) |
| **Issue Type** | Issue type — `Task`, `Bug`, `Story`, etc. |
| **Summary** | Issue title (supports variable interpolation from upstream nodes) |
| **Description** | Issue body (supports variable interpolation) |
| **Priority** | Optional priority level |

### Config tab

Select which Jira connection to use. You can also configure or disconnect from this tab.

### Workflow example

Connect a **Playwright** node to a **Jira** node to automatically create tickets when tests fail. Use `{{playwright.failedTests}}` in the Summary or Description fields to include test failure details.

