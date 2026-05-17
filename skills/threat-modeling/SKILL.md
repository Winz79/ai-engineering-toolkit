---
name: threat-modeling
description: Use when a feature, system, integration, workflow, architecture, or data flow involves sensitive data, access control, trust boundaries, abuse risk, or security-by-design review.
---

# Threat Modeling

## Purpose

Identify realistic security and privacy risks early enough to change requirements, architecture, or delivery plans.

Use `templates/threat-model-template.md` as the output shape.

## Core Rule

Model what can go wrong across assets, actors, entry points, trust boundaries, and data flows. Security review is part of design, not a final checklist.

## Workflow

1. Define the scope and security goals.
2. Identify assets, actors, entry points, trust boundaries, and data flows.
3. List threats against assets and boundaries.
4. Include abuse cases where the system works as designed but can still be misused.
5. Convert important risks into security and privacy requirements.
6. Record residual risk and unresolved review questions.

## Threat Prompts

Consider:

- spoofing and account misuse
- tampering with data, configuration, or workflows
- repudiation and missing auditability
- information disclosure and privacy leakage
- denial of service and resource abuse
- elevation of privilege
- supply chain and dependency compromise
- unsafe logging, retention, or export behavior

## Output

Produce:

- scope
- security goals
- assets and sensitivity
- actors and trust levels
- entry points
- trust boundaries
- data flows
- threats and needed controls
- abuse cases
- security and privacy requirements
- logging and audit expectations
- residual risk
- review outcome

## Common Mistakes

- Only checking authentication and ignoring data flow.
- Treating administrators, integrations, and background jobs as fully trusted by default.
- Ignoring abuse of intended functionality.
- Forgetting privacy, retention, logging, and audit concerns.
- Recording controls without verification methods.

