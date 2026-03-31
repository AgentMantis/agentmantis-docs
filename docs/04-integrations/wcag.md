---
sidebar_position: 3
---

# WCAG

Check colour contrast ratios against WCAG accessibility guidelines. WCAG is a **built-in** utility node — no external credentials are required.

## Configuration

No setup needed. The WCAG node is always available in the editor command palette.

## Editor usage

Add a **WCAG** node to the canvas. The node provides a simple colour contrast checker.

### Fields

| Field | Description |
|---|---|
| **Background Color** | The background colour (hex, e.g. `#ffffff`) |
| **Text Color** | The text colour (hex, e.g. `#000000`) |

### Output

The node calculates the contrast ratio and reports pass/fail against:

- **WCAG AA** — normal text (≥ 4.5:1) and large text (≥ 3:1)
- **WCAG AAA** — normal text (≥ 7:1) and large text (≥ 4.5:1)

