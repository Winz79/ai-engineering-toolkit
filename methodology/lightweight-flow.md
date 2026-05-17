# Lightweight Flow

## When To Use

Use lightweight mode for small, localized work where full-mode artifacts would be heavier than the change.

Examples:

- small feature
- bugfix
- refactoring
- local tooling
- technical cleanup
- documentation correction

Lightweight mode does not skip engineering judgment. It compresses the workflow into a smaller artifact.

## Compressed Flow

```text
Intent -> Context -> Requirements -> Impact -> Plan -> Build / Review / Learn
```

## Lightweight Checklist

Before coding, answer:

1. What is the requested outcome?
2. What files, behavior, or docs are likely affected?
3. What acceptance criteria prove the change?
4. What risks or regressions should be checked?
5. What is the smallest useful implementation slice?
6. What verification command or review confirms the result?

If any answer is unclear, clarify before implementation.

## Suggested Artifact

For very small changes, the artifact can be a short working note in the task thread or issue:

```markdown
## Lightweight Brief

### Intent

### Context Checked

### Acceptance Criteria

### Impact / Risks

### Plan

### Verification
```

For changes that start small but reveal architectural, security, migration, or cross-team impact, switch to full mode.

## AI Usage

In lightweight mode, AI should:

- restate the request as testable intent
- inspect relevant local context
- identify likely impact
- propose a small plan
- implement only the scoped change
- review the diff against the acceptance criteria
- update documentation if the behavior or workflow changed

AI should not:

- broaden the task without approval
- rewrite unrelated code
- invent product context
- skip verification because the change looks simple

## Review Standard

A lightweight change is ready when:

- the intent is satisfied
- relevant context was checked
- acceptance criteria are met
- tests or equivalent verification were run
- no unrelated changes were introduced
- any changed behavior is documented
