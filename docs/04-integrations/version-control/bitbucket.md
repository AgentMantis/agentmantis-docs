---
sidebar_position: 2
---

# Bitbucket

Browse repositories, clone code, and download files from Bitbucket — works the same way as the GitHub integration.

## Configuration

Navigate to **Settings → Integrations → Add Integration → Bitbucket**.

### Authentication methods

| Method | Fields |
|---|---|
| **Connect with Bitbucket** (OAuth) | Click the button to authorise via Bitbucket OAuth. No manual credentials needed. |
| **App Password** | Provide your Bitbucket **username**, **app password**, and **workspace**. |

Click **Test Connection** to verify access.

## Editor usage

Add a **Bitbucket** node to the canvas.

### Data tab

| Field | Description |
|---|---|
| **Operation** | `clone` — shallow-clone the repo at runtime; or `download` — fetch individual files via the API |
| **Workspace** | Your Bitbucket workspace slug |
| **Repository** | Repository slug |
| **Branch** | Branch name to check out |
| **Tag** | Optional tag — if set, overrides the branch |
| **Folder** | Optional subdirectory to limit the clone/download |

### Config tab

Select which Bitbucket connection to use.

### How it connects to Playwright

Wire the Bitbucket node's output into a Playwright node. The runner clones the repository and uses the test suite from it, just like with GitHub.
