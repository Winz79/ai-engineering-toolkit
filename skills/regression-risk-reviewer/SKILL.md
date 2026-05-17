---
name: regression-risk-reviewer
description: Use when a change to an existing system, legacy code, refactor, dependency, data contract, migration, or generated implementation needs regression risk review.
---

# Regression Risk Reviewer

## Purpose

Identify behavior that could break when changing an existing system and define evidence needed before accepting the change.

Use `templates/review-checklist-template.md` when the review should become a reusable acceptance checklist.

## Core Rule

Review for preserved behavior as deliberately as new behavior. Passing tests are not enough if the tests do not cover the risky contracts, workflows, and data paths.

## Workflow

1. Identify the intended change, affected users, existing behavior, and compatibility expectations.
2. Inspect contracts, data flows, configuration, jobs, integrations, permissions, logs, and operational workflows.
3. Separate confirmed risk from inferred risk and missing information.
4. Recommend characterization tests, regression tests, manual checks, or monitoring signals.
5. Decide whether the change can proceed, needs mitigation, or should be split into safer slices.

## Output

Produce findings first:

- risk
- affected behavior or contract
- likelihood and impact
- evidence available
- required mitigation or verification

Then include:

- missing coverage
- recommended characterization tests
- rollout, rollback, or monitoring notes
- accept / accept with follow-up / request changes / block

## Common Mistakes

- Reviewing only the changed files instead of affected contracts.
- Assuming undocumented behavior is unused.
- Treating refactors as low risk because intended behavior is unchanged.
- Ignoring historical data, downstream consumers, scheduled jobs, and support workflows.
- Accepting generated changes without targeted regression evidence.
