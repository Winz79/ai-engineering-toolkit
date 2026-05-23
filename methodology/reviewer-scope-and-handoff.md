# Reviewer Scope and Post-Review Handoff

## Purpose

This guide clarifies what the reviewer owns, what the reviewer must not own, and how review outcomes should be handed off without turning review into planning or strategy.

The reviewer reviews completed work. The conductor, maintainer, planner, or human owner decides what happens after the review.

## Core Rule

Reviewer judgment must stay independent and bounded.

A reviewer may approve, request changes, or comment. A reviewer should not choose the next product direction, reroute the roadmap, or create unrelated follow-up work by default.

## Reviewer Responsibility

The reviewer should inspect the submitted work against:

- the issue or task contract;
- the PR description;
- acceptance criteria;
- architecture and design constraints;
- relevant standards;
- tests and verification evidence;
- documentation expectations;
- scope boundaries.

The reviewer should produce review-focused output:

- approval when the work is acceptable;
- requested changes when blockers exist;
- comments when feedback is non-blocking;
- blocking findings;
- non-blocking findings when useful;
- verification gaps;
- residual risks.

## Reviewer Non-Responsibilities

The reviewer should not:

- decide product strategy;
- choose the next roadmap item;
- reroute the project backlog;
- expand the scope of the current PR;
- create unrelated follow-up issues by default;
- turn every observation into a methodology update;
- approve their own implementation work.

If the review reveals larger uncertainty, the reviewer should state the concern and let the conductor, maintainer, planner, or human owner decide the route.

## Review Outcomes

### Approved

Use when the work satisfies the expected scope and verification is sufficient.

The conductor or maintainer may then:

- merge if checks are green;
- wait for required CI/reviews;
- request final verification if needed.

### Request Changes

Use when the PR has blocking issues.

The reviewer should state what blocks approval and why. The feedback should be specific enough for the implementer to act.

The conductor or maintainer should then route the work back to the implementer. If the requested changes are still within the original scope, prefer the same implementer, same branch, same PR, and same session when technically possible.

### Comment

Use when feedback is useful but not blocking.

The conductor or maintainer decides whether to:

- merge with the comment acknowledged;
- ask for a small update;
- create a follow-up issue;
- ignore the comment as non-actionable.

### Scope Or Design Mismatch

Use when the review reveals that the work does not match the intended scope, or that the design assumptions are wrong.

The reviewer should describe the mismatch. The conductor or maintainer decides whether to:

- return the PR to the implementer;
- split the work;
- create a follow-up issue;
- escalate to planning;
- close or replace the PR.

## Post-Review Handoff

Post-review handoff belongs to the conductor, maintainer, planner, or human owner.

A handoff decision should answer:

1. Is the review approved, blocked, or comment-only?
2. Are requested changes still inside the original scope?
3. Should the same implementer/session continue?
4. Is a follow-up issue needed because the finding is valid but out of scope?
5. Is escalation needed because the review revealed a design or strategy mismatch?

## Preferred Flow

```text
Implementer opens or updates PR
→ Reviewer reviews independently
→ Reviewer approves, requests changes, or comments
→ Conductor / maintainer routes outcome
→ Same implementer/session fixes in-scope review changes when possible
→ Reviewer re-reviews
```

## Follow-Up Issues

Create a follow-up issue only when the finding should survive beyond the current PR.

Good candidates:

- valid out-of-scope defect;
- deferred test or verification work;
- documentation gap not blocking the current PR;
- larger refactoring discovered during review;
- design concern that needs separate planning.

Poor candidates:

- every minor suggestion;
- personal style preferences;
- work already required inside the current PR;
- vague concerns without actionable context.

## Anti-Patterns

Avoid these patterns:

- reviewer becomes planner;
- reviewer expands scope during review;
- implementer self-approves;
- every comment becomes an issue;
- review feedback is handed to a fresh agent when the original implementer/session can safely continue;
- non-blocking feedback blocks the PR without an explicit reason.

## Relationship To Other Guidance

Use [Agent Task Routing](agent-task-routing.md) to decide which role should act after a review.

Use [Lightweight Flow](lightweight-flow.md) for routine PR reviews and small requested changes.

This document only defines reviewer boundaries and post-review handoff. It does not define a full merge policy or release process.
