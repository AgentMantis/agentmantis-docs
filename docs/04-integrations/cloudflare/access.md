---
sidebar_position: 1
---

# Cloudflare Access

Configure Agent Mantis to work with applications protected by Cloudflare Access.

## The problem

If your application is behind Cloudflare Access, Agent Mantis runners need to authenticate before reaching your app.

## Solution: Service tokens

1. Create a Cloudflare Access service token
2. Add the token headers to your Agent Mantis environment configuration
3. Agent Mantis will include these headers in all requests

<!-- TODO: Step-by-step with Cloudflare dashboard screenshots -->

