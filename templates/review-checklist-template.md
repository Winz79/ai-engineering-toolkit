# Review Checklist Template

Use this checklist before accepting a delivery slice, pull request, generated implementation, or documentation update.

## 1. Scope

What change is being reviewed?

Linked artifacts:

- intake / brief:
- requirements:
- impact analysis:
- architecture / ADR:
- threat model:
- vertical slice plan:

## 2. Requirements Review

- acceptance criteria are addressed
- non-goals are respected
- edge cases and failure states are considered
- user, business, or operational outcomes remain aligned

## 3. Implementation Review

- change is scoped to the requested slice
- existing project patterns are followed
- unrelated refactoring is avoided
- compatibility is preserved or intentionally changed
- errors and failure modes are handled

## 4. Data and Contract Review

- API, event, file, schema, and configuration changes are explicit
- migrations and historical data behavior are covered
- downstream consumers are considered
- rollback or recovery is defined where needed

## 5. Security and Privacy Review

- authorization and access control are checked
- sensitive data is protected
- secrets are not logged or committed
- audit and logging behavior is appropriate
- abuse cases are considered

## 6. Testing and Verification Review

- relevant automated tests were run
- manual checks are documented when used
- characterization tests exist for risky legacy behavior
- verification output supports the completion claim
- skipped checks and residual risks are explicit

## 7. Documentation Review

- README, usage, architecture, ADR, operations, or release notes are updated when needed
- docs describe verified behavior
- generic methodology and project-specific examples remain separate

## 8. Review Outcome

Decision:

- accept
- accept with follow-up
- request changes
- block

Notes:

- 

