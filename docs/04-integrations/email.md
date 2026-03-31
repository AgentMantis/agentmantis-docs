---
sidebar_position: 8
---

# Email

Send and receive emails from a workflow. Email is a **built-in** node — its fields are defined locally rather than loaded from Firestore.

## Configuration

Email connections are configured in **Settings → Integrations → Add Integration → Email**. Provide your SMTP / IMAP credentials or connect via an OAuth-enabled email provider.

## Editor usage

Add an **Email** node to the canvas. The settings panel has locally defined fields (not from `integration_panels`).

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

