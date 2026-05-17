# Threat Model Template

Use this template when a project, feature, integration, or architecture change handles sensitive data, exposes access paths, changes trust boundaries, or requires security-by-design review.

## 1. Scope

What system, feature, workflow, or change is being reviewed?

## 2. Security Goals

What must be protected?

Examples:

- user accounts
- personal data
- business data
- secrets and credentials
- financial or operational actions
- system availability
- audit integrity

## 3. Assets

| Asset | Sensitivity | Owner | Protection Need |
| --- | --- | --- | --- |
|  |  |  |  |

## 4. Actors

| Actor | Role | Trust Level | Notes |
| --- | --- | --- | --- |
|  |  |  |  |

Include legitimate users, administrators, operators, services, external integrations, and likely attackers.

## 5. Entry Points

| Entry Point | Method / Channel | Authentication | Notes |
| --- | --- | --- | --- |
|  |  |  |  |

## 6. Trust Boundaries

Describe where data or control crosses between different trust levels.

Examples:

- browser to backend
- backend to third-party API
- internal service to database
- user-uploaded content to processing pipeline
- admin workflow to production system

## 7. Data Flows

Describe the important flows from input to storage, processing, output, and deletion.

Mark sensitive data, privileged actions, and external dependencies.

## 8. Threats

| ID | Threat | Boundary / Asset | Impact | Existing Control | Needed Control |
| --- | --- | --- | --- | --- | --- |
| TM-001 |  |  |  |  |  |

Consider:

- spoofing
- tampering
- repudiation
- information disclosure
- denial of service
- elevation of privilege
- abuse of intended functionality
- privacy leakage
- supply chain compromise

## 9. Abuse Cases

Describe realistic ways the feature could be misused even when it works as designed.

## 10. Security Requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| SEC-001 |  |  |

## 11. Privacy Requirements

Capture privacy expectations for collection, use, retention, sharing, user control, and deletion.

## 12. Logging and Audit

What should be logged, monitored, alerted, or audited?

Also list data that must not be logged.

## 13. Residual Risk

List risks accepted after controls are applied.

| Risk | Reason Accepted | Owner | Review Date |
| --- | --- | --- | --- |
|  |  |  |  |

## 14. Review Outcome

Summarize:

- required controls before release
- follow-up work
- accepted risks
- unresolved questions

