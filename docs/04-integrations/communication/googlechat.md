---
sidebar_position: 3
---

# Google Chat

Send messages to Google Chat spaces from a workflow.

## Configuration

Navigate to **Settings → Integrations → Add Integration → Google Chat**.

| Field | Description |
|---|---|
| **Name** | A friendly label for this connection |
| **Webhook URL** | A Google Chat webhook URL for the target space. Create one in Google Chat under **Space settings → Integrations → Webhooks**. |

Click **Test Connection** to verify the webhook.

## Editor usage

Add a **Google Chat** node to the canvas.

### Data tab

| Field | Description |
|---|---|
| **Message** | The message text to send (supports variable interpolation from upstream nodes) |
| **Thread Key** | Optional thread key to reply within an existing thread |

### Config tab

Select which Google Chat connection to use.

### Workflow example

Connect a **Playwright** node → **Google Chat** node to notify a Google Chat space when tests complete.
