---
sidebar_position: 5
---

# GitHub

Browse repositories, clone code, and download files from GitHub — typically used to feed test suites into a Playwright node.

## Configuration

Navigate to **Settings → Integrations → Add Integration → GitHub**.

### Authentication methods

| Method | Fields |
|---|---|
| **Connect with GitHub** (OAuth) | Click the button to authorise via GitHub OAuth. No manual credentials needed. |
| **Personal Access Token** | Provide a GitHub PAT with `repo` scope. |

Click **Test Connection** to verify access.

## Editor usage

Add a **GitHub** node to the canvas.

### Data tab

| Field | Description |
|---|---|
| **Operation** | `clone` — shallow-clone the repo at runtime; or `download` — fetch individual files via the API |
| **Repository** | Owner/repo (e.g. `my-org/my-repo`) |
| **Branch** | Branch name to check out (default: main) |
| **Tag** | Optional tag — if set, overrides the branch |
| **Folder** | Optional subdirectory to limit the clone/download |

### Config tab

Select which GitHub connection to use.

### How it connects to Playwright

Wire the GitHub node's output into a Playwright node. The Playwright node detects the connected repository integration and clones the test suite at execution time instead of using inline or zip-uploaded tests.

