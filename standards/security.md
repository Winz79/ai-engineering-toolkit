# Security Standard

Security, privacy, and abuse resistance are design concerns, not final checks.

## Principles

- Identify sensitive data and trust boundaries early.
- Apply least privilege to users, services, jobs, and integrations.
- Treat external input, files, events, and third-party responses as untrusted.
- Avoid logging secrets, credentials, tokens, personal data, or sensitive business data.
- Prefer explicit authorization checks over implicit trust.
- Record residual risk and the owner who accepts it.

## When To Threat Model

Use a threat model when work affects:

- authentication or authorization
- roles, permissions, or administrative actions
- personal or sensitive business data
- external integrations or webhooks
- file upload, import, export, or parsing
- payment, financial, operational, or destructive actions
- public APIs or internet-facing surfaces
- logging, audit, retention, or deletion behavior

## Review Checklist

Check:

- assets and data sensitivity
- actors and trust levels
- entry points and data flows
- authentication and authorization
- input validation and output encoding
- secrets and configuration
- logging and audit trails
- retention and deletion
- abuse cases and rate limits
- dependency and supply chain risk

## Verification

Security requirements should include verification:

- tests for authorization and access control
- checks for sensitive logging
- dependency or configuration review
- manual abuse-case review when automation is not practical

## Avoid

- treating administrators or internal services as automatically safe
- adding sensitive data to logs for debugging
- storing secrets in examples, docs, fixtures, or commits
- deferring security review until after implementation
- accepting residual risk without naming it

