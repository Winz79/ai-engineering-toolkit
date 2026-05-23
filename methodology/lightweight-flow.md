# Lightweight Flow

## Core Principle

Default lightweight, escalate deliberately.

Use lightweight mode as the default starting point for bounded work. The goal is to keep the method useful without making the process heavier than the task.

Lightweight mode does not mean skipping engineering judgment. It means compressing the same thinking into the smallest useful artifact.

## When To Use

Use lightweight mode by default when the work is small, localized, or already reasonably scoped.

Examples:

- small feature
- bugfix
- refactoring
- local tooling
- technical cleanup
- documentation correction
- pull request review
- focused test or CI fix
- small adapter or prompt adjustment

Do not create BRDs, PRDs, ADRs, threat models, or architecture briefs unless the task exposes a risk or decision that actually needs them.

## When To Escalate

Escalate from lightweight mode to a heavier flow when any of these are true:

- product direction is unclear;
- acceptance criteria are missing or disputed;
- architecture, dependency, or module boundaries may change;
- security, privacy, reliability, or operational risk is meaningful;
- migration or compatibility impact exists;
- multiple teams, products, or repositories must coordinate;
- a durable decision must be captured;
- high regression risk exists;
- review reveals a scope or design mismatch;
- the lightweight note is becoming a substitute for real planning.

Escalation should be explicit. State why lightweight mode is no longer enough and which artifact or route is needed next.

## Compressed Flow

```text
Intent -> Context -> Acceptance Criteria -> Impact -> Plan -> Build / Review / Learn
```

## Lightweight Checklist

Before coding, reviewing, or routing work, answer:

1. What is the requested outcome?
2. What files, behavior, docs, or workflow are likely affected?
3. What acceptance criteria prove the change?
4. What risks or regressions should be checked?
5. What is the smallest useful implementation or review slice?
6. What verification command, evidence, or review confirms the result?

If any answer is unclear and matters to the outcome, clarify before implementation.

If the missing answer reveals larger uncertainty, escalate deliberately instead of stretching lightweight mode until it becomes vague full mode.

## Suggested Artifact

For very small changes, the artifact can be a short working note in the task thread, issue, PR, or agent session:

```markdown
## Lightweight Brief

### Intent

### Context Checked

### Acceptance Criteria

### Impact / Risks

### Plan

### Verification
```

Keep the brief short. If the brief needs multiple pages, use a more appropriate route.

## Examples

### Bugfix

Use lightweight mode when the bug is reproducible, localized, and has a clear expected behavior.

Expected output:

- failing scenario or reproduction note;
- focused fix;
- test or verification command;
- short risk note.

Escalate if the bug reveals unclear product behavior, broad data impact, or architecture/design ambiguity.

### Pull Request Review

Use lightweight mode for routine PR review.

Expected output:

- approve, request changes, or comment;
- blocking findings;
- non-blocking findings if useful;
- verification gaps or residual risks.

Escalate only if the review reveals a scope mismatch, design mismatch, security concern, or missing decision that cannot be resolved inside the PR.

### Small Refactor

Use lightweight mode when the refactor is local, behavior-preserving, and easy to verify.

Expected output:

- scope boundary;
- affected files;
- verification evidence;
- confirmation that behavior did not intentionally change.

Escalate if the refactor crosses module boundaries, changes public contracts, or becomes a modernization initiative.

### Feature Slice

Use lightweight mode when the slice is already scoped and acceptance criteria are known.

Expected output:

- small implementation plan;
- code/docs changes;
- tests or verification;
- notes about deferred work.

Escalate if the feature needs product prioritization, UX exploration, architecture options, or cross-team alignment.

### Architecture Change

Do not treat architecture changes as lightweight by default.

A small architecture note may be enough for minor internal choices, but durable decisions should move to an ADR or architecture brief.

## AI Usage

In lightweight mode, AI should:

- restate the request as testable intent;
- inspect only the relevant local context;
- identify likely impact;
- propose a small plan;
- implement or review only the scoped change;
- review the diff against acceptance criteria;
- update documentation only if behavior, workflow, or public usage changed;
- preserve useful implementation context when review fixes may return to the same session.

AI should not:

- broaden the task without approval;
- rewrite unrelated code;
- invent product context;
- create BRD/PRD/ADR artifacts without a clear trigger;
- skip verification because the change looks simple;
- convert every observation into a new issue or methodology artifact.

## Review Standard

A lightweight change is ready when:

- the intent is satisfied;
- relevant context was checked;
- acceptance criteria are met;
- tests or equivalent verification were run or explicitly justified as not applicable;
- no unrelated changes were introduced;
- any changed behavior is documented;
- remaining risks or follow-ups are stated only if they matter beyond the current task.

## Relationship To Agent Task Routing

Use [Agent Task Routing](agent-task-routing.md) when the route is unclear or when multiple roles could apply.

Lightweight mode is the default execution style for bounded work. Routing decides who should act; lightweight mode decides how much process is enough.
