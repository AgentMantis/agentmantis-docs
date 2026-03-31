---
sidebar_position: 4
---

# OWASP

Reference the OWASP Top 10 security risks within a workflow. OWASP is a **built-in** utility node — no external credentials are required.

## Configuration

No setup needed. The OWASP node is always available in the editor command palette.

## Editor usage

Add an **OWASP** node to the canvas. The node provides a dropdown of the OWASP Top 10 security risks.

### Fields

| Field | Description |
|---|---|
| **Select Risk** | Choose from A01 (Broken Access Control) through A10 (Server-Side Request Forgery) |

### Output

The node outputs the selected risk's key, name, and description. This can be wired into downstream nodes — for example, feeding the risk description into an **LLM** node for security analysis.

