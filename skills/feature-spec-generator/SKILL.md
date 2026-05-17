---
name: feature-spec-generator
description: Use when a bounded feature, bugfix, refactor, integration, or engineering change needs a reviewable feature specification before design or implementation.
---

# Feature Spec Generator

## Purpose

Create a focused feature specification that turns validated requirements into a bounded, reviewable change definition.

Use `templates/feature-spec-template.md` as the target structure.

## Core Rule

Define the change clearly enough to plan and review. Do not hide unresolved product, business, architecture, or risk questions inside implementation tasks.

## Workflow

1. Confirm the source requirement, user or system outcome, and current behavior.
2. Define scope, non-goals, acceptance criteria, constraints, and dependencies.
3. Capture affected interfaces, data, permissions, observability, and operational behavior.
4. Identify edge cases, failure modes, migration concerns, and compatibility risks.
5. Recommend whether the next artifact should be impact analysis, technical design, threat model, ADR, or vertical slice plan.

## Output

Produce:

- feature summary
- source context and linked artifacts
- current behavior and target behavior
- in-scope and out-of-scope items
- functional and non-functional requirements
- acceptance criteria
- edge cases and failure states
- affected interfaces, data, and operations
- dependencies, risks, and open questions
- recommended next artifact

## Common Mistakes

- Turning the spec into a task checklist before acceptance criteria are clear.
- Omitting current behavior in existing-system changes.
- Ignoring compatibility with existing users, data, integrations, or operations.
- Treating security, privacy, observability, and support behavior as later concerns.
- Proceeding to implementation when architecture or impact questions are still material.
