---
sidebar_position: 1
---

# Google Drive

Upload and manage files in Google Drive from a workflow.

## Configuration

Navigate to **Settings → Integrations → Add Integration → Google Drive**.

### Authentication methods

| Method | Fields |
|---|---|
| **Connect with Google** (OAuth) | Click the button to authorise via Google OAuth. Grants Drive file access. |
| **Service Account** | Select a configured cloud service account with Drive API enabled. |

Click **Test Connection** to verify access.

## Editor usage

Add a **Google Drive** node to the canvas.

### Data tab

Fields vary by operation. Common fields include:

| Field | Description |
|---|---|
| **Operation** | The action to perform (e.g. upload, list, download) |
| **Folder ID** | Target Google Drive folder |
| **File Name** | Name for the uploaded file |

### Config tab

Select which Google Drive connection to use.

### Workflow example

Connect a **Playwright** node → **Google Drive** node to upload test reports or screenshots to a shared team folder after each run.
