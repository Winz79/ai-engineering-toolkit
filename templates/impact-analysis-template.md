# Impact Analysis Template

Use this template before architecture or delivery planning when a change may affect existing behavior, data, integrations, operations, or users.

## 1. Change Summary

What change is being considered?

## 2. Analysis Goal

What decision should this analysis support?

Examples:

- confirm whether the change is safe as a lightweight slice
- identify modules and workflows that need regression coverage
- compare minimal change, refactor, and transitional options
- prepare an architecture brief or ADR

## 3. Current Behavior

Describe the behavior, workflow, or system capability that exists today.

Include known limitations, constraints, and current users or operators.

## 4. Proposed Behavior

Describe what should change.

Separate required behavior from possible implementation ideas.

## 5. Affected Users and Workflows

| User / Actor | Workflow | Expected Impact |
| --- | --- | --- |
|  |  |  |

## 6. Affected System Areas

| Area | Current Responsibility | Expected Change | Owner |
| --- | --- | --- | --- |
|  |  |  |  |

Consider:

- modules and services
- APIs and contracts
- databases and storage
- events and queues
- jobs and schedulers
- configuration
- deployment and infrastructure
- observability
- documentation

## 7. Data Impact

Capture effects on:

- data model
- data quality
- migrations
- retention
- import or export behavior
- reporting and analytics
- backup and recovery

## 8. Integration Impact

List internal and external systems that may be affected.

| Integration | Direction | Contract / Dependency | Impact |
| --- | --- | --- | --- |
|  |  |  |  |

## 9. Security and Privacy Impact

Capture changes to:

- authentication
- authorization
- roles and permissions
- secrets
- personally identifiable information
- sensitive business data
- audit trails
- compliance obligations

## 10. Reliability and Operations Impact

Capture effects on:

- availability
- performance
- scalability
- failure modes
- support workflows
- monitoring and alerting
- rollback and recovery

## 11. Compatibility and Migration

Describe compatibility requirements and migration needs.

Include whether old and new behavior must coexist, and for how long.

## 12. Regression Risks

| Risk | Affected Area | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## 13. Test and Verification Needs

List tests, checks, reviews, or manual verification needed before release.

Include characterization tests when current behavior is poorly documented.

## 14. Decision Summary

Summarize:

- safest implementation path
- required follow-up artifacts
- major risks
- open decisions

