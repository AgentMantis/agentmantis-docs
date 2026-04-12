---
sidebar_position: 2
---

# Email

Send and receive emails from a workflow.

## Configuration

Email connections are configured in **Settings → Integrations → Add Integration → Email**. Provide your SMTP / IMAP credentials or connect via an OAuth-enabled email provider.

## Editor usage

Add an **Email** node to the canvas.

### Data tab

| Field | Description |
|---|---|
| **Mode** | `send` — compose and send an email; `receive` — poll an inbox for new messages |

#### Send mode fields

| Field | Description |
|---|---|
| **To** | Recipient email address(es) |
| **Subject** | Email subject (supports variable interpolation) |
| **Body** | Email body (supports variable interpolation) |
| **From Email** | Select the sender address from configured connections |

#### Receive mode fields

| Field | Description |
|---|---|
| **Email Address** | Select the inbox to poll |
| **Poll Interval** | How often to check for new messages (in seconds) |
| **Max Attempts** | Maximum polling attempts before timing out |

### Config tab

Select which Email connection to use.
