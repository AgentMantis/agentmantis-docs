---
sidebar_position: 1
---

# Slack

Send messages to Slack channels and manage channels from a workflow.

## Configuration

Navigate to **Settings → Integrations → Add Integration → Slack**.

### Authentication methods

| Method | Fields |
|---|---|
| **Connect with Slack** (OAuth) | Click the button to authorise via Slack OAuth. Grants bot permissions automatically. |
| **Bot Token** | Provide a Slack Bot User OAuth Token (starts with `xoxb-`). |
| **Webhook URL** | Provide an Incoming Webhook URL for a specific channel. Simpler but limited to one channel. |

Click **Test Connection** to verify the credentials.

## Editor usage

Add a **Slack** node to the canvas.

### Data tab

| Field | Description |
|---|---|
| **Channel** | The Slack channel to post to (e.g. `#qa-results`) |
| **Message** | The message text (supports variable interpolation from upstream nodes) |
| **Username** | Optional display name for the bot message |

### Config tab

Select which Slack connection to use.

### Workflow example

Connect a **Playwright** node → **LLM** node → **Slack** node to run tests, summarise the results with AI, and post the summary to a Slack channel.
