---
sidebar_position: 11
---

# Google Sheets

Read and write spreadsheet data from a workflow.

## Configuration

Navigate to **Settings → Integrations → Add Integration → Google Sheets**.

### Authentication methods

| Method | Fields |
|---|---|
| **Connect with Google** (OAuth) | Click the button to authorise via Google OAuth. Grants Sheets read/write access. |
| **Service Account** | Select a configured cloud service account with Sheets API enabled. |

Click **Test Connection** to verify access.

## Editor usage

Add a **Google Sheets** node to the canvas.

### Data tab

Fields vary by operation. Common fields include:

| Field | Description |
|---|---|
| **Operation** | The action to perform (e.g. read, write, append) |
| **Spreadsheet ID** | The ID of the target spreadsheet |
| **Sheet Name** | The name of the sheet/tab within the spreadsheet |
| **Range** | Cell range to read or write (e.g. `A1:D10`) |
| **Values** | Data to write (supports variable interpolation) |

### Config tab

Select which Google Sheets connection to use.

### Workflow example

Connect a **Playwright** node → **Google Sheets** node to log test results into a spreadsheet for tracking and reporting.

