# Testing Standard

Testing should prove that the intended behavior works and important regressions are covered.

## Principles

- Match test depth to risk and blast radius.
- Prefer behavior-focused tests over implementation-detail tests.
- Add characterization tests before changing poorly documented legacy behavior.
- Verify important failure modes, edge cases, and recovery paths.
- Keep tests readable enough to document the expected behavior.

## Test Selection

Use the smallest test set that gives confidence:

- unit tests for focused business logic
- integration tests for contracts, persistence, services, and boundaries
- end-to-end checks for critical user or operational workflows
- contract tests for APIs, events, files, or external integrations
- security checks for authorization, sensitive data, secrets, logging, and abuse cases
- manual verification when automation is impractical, with steps recorded

## Required Verification

Before a change is complete:

- acceptance criteria must be checked
- relevant automated tests should run when available
- manual checks must be explicit when used
- failures, skipped checks, and residual risks must be reported

## Legacy Changes

For legacy or poorly documented systems:

- capture current behavior before changing it
- identify behavior that must be preserved
- add characterization tests around risky paths
- document intentional behavior changes

## Avoid

- relying only on generated code review
- testing mocks instead of meaningful behavior
- adding broad brittle tests for small changes
- claiming completion without fresh verification evidence
- treating manual testing as a substitute for repeatable checks when automation is reasonable

