# Agent Task Routing

## Purpose

Agent task routing helps an AI-assisted workflow choose the smallest useful route for a request before creating artifacts or editing code.

The goal is to reduce manual orchestration and avoid defaulting to the full methodology when a smaller workflow is enough.

This document is not a multi-agent runtime design. It is a routing guide for humans, conductors, and agent harnesses.

## Core Rule

Use the smallest route that can safely produce a reviewable outcome.

Escalate only when the work has uncertainty, architectural impact, security or privacy risk, cross-team coordination, migration risk, or a durable decision to capture.

## Routing Table

| Situation | Primary route | Expected output |
| --- | --- | --- |
| Fuzzy product direction | Product / Strategy | Options, constraints, decision needed |
| Unclear work split | Conductor / Planner | Sequenced slices, issue/task split, routing decision |
| Small scoped implementation | Implementer | Patch, focused tests, changed files, risks |
| Pull request review | Reviewer | Approve, request changes, or comment with findings and verification gaps |
| Review requested changes | Conductor / Maintainer -> Implementer | Same PR updated by same implementer/session when possible |
| CI failure or reproducibility issue | QA / Verification | Failure summary, reproduction steps, likely owner |
| Durable work item needed | Issue contract | Goal, context, scope, acceptance criteria, verification, next state |
| Tiny temporary execution task | Task contract | Small local task description and expected result |
| Method friction observed | Methodology / Documentation | Lesson, reusable pattern candidate, proposed toolkit update |

## Default Flow

```text
Request
→ classify situation
→ choose route
→ produce smallest useful artifact
→ execute or review
→ persist only what should survive
```

If the request is already clear and low-risk, do not create extra planning artifacts.

If the request is unclear or risky, route to clarification, planning, impact analysis, or design before implementation.

## Route Selection Guidance

### Use Product / Strategy when

- the goal, user, or value is unclear;
- product direction or prioritization is being debated;
- a feature boundary or MVP needs definition;
- the request may change roadmap direction.

Do not use this route for small obvious fixes or implementation details.

### Use Conductor / Planner when

- the work needs sequencing;
- the request must be split into issues or task contracts;
- review feedback needs operational routing;
- multiple agents or workstreams may be involved;
- a decision is needed about whether to continue, split, defer, or escalate.

The conductor routes work. It should not invent product strategy when the issue is already scoped.

### Use Implementer when

- the issue or task contract has a clear goal;
- acceptance criteria are known;
- the expected change is bounded;
- the agent can verify the change with focused tests or checks.

Implementation should stay within scope and update the same PR when review-requested fixes remain in scope.

### Use Reviewer when

- a PR, diff, or completed slice must be evaluated;
- the work must be checked against scope, requirements, architecture, tests, and standards.

The reviewer reviews. It may approve, request changes, or comment. It should not choose the next product direction or own post-review routing.

### Use QA / Verification when

- tests fail;
- CI needs interpretation;
- a scenario must be reproduced;
- the workflow needs evidence before merge or release.

QA should report what was verified, what failed, and what remains uncertain.

### Use Methodology / Documentation when

- real work exposes repeated friction;
- a new reusable pattern is emerging;
- a project-specific lesson may improve the generic toolkit.

Do not promote a project note into the toolkit unless it solves a repeated or transferable problem.

## Issue vs Task Contract

Use a durable issue when the work should survive across sessions, be reviewed later, or coordinate multiple agents or humans.

Use a task contract when the work is tiny, local, low-risk, and does not need durable project tracking.

A task contract should not become a hiding place for important decisions. If the result matters later, create or update an issue.

## Escalation Triggers

Escalate from lightweight execution to heavier planning when any of these are true:

- unclear product intent;
- missing acceptance criteria;
- architecture or dependency impact;
- security, privacy, reliability, or operational risk;
- migration or compatibility concerns;
- broad refactoring pressure;
- conflicting requirements;
- review reveals a scope or design mismatch.

## Role Boundaries

- Product / Strategy clarifies direction.
- Conductor / Planner routes and sequences work.
- Implementer changes code or docs within scope.
- Reviewer evaluates completed work independently.
- QA / Verification checks evidence and reproducibility.
- Methodology / Documentation extracts reusable lessons.

Do not collapse these responsibilities into one agent unless the task is intentionally small and low-risk.

## Case Study Checks

When validating this routing guide against a real project, ask:

- Would this reduce prompt rework on ReplayLab?
- Would this prevent over-planning small PRs?
- Would this keep DosiServ work bounded and safe?
- Would this help decide when an issue, task contract, or planning artifact is needed?

The routing is successful when the next step is obvious without creating unnecessary methodology overhead.
