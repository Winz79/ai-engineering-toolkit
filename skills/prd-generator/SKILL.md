---
name: prd-generator
description: Use when product behavior, user workflows, product requirements, acceptance criteria, or measurable product outcomes need to become a reviewable PRD.
---

# PRD Generator

## Purpose

Create a product requirements document from business context, user needs, constraints, and known product decisions.

Use `templates/prd-template.md` as the target structure.

## Core Rule

Describe product behavior and validation criteria. Keep business justification in the BRD and implementation design in feature specs, architecture briefs, or technical designs.

## Workflow

1. Confirm the target users, problem, desired outcome, and product scope.
2. Separate user goals, workflows, functional requirements, non-functional requirements, constraints, and non-goals.
3. Define acceptance criteria that can be validated through tests, review, analytics, support signals, or operational checks.
4. Capture edge cases, error states, permissions, accessibility, data, and privacy considerations.
5. List dependencies, rollout considerations, open questions, and the recommended next artifact.

## Output

Produce:

- product summary
- users, personas, or affected roles
- goals and non-goals
- user journeys or workflows
- functional requirements
- non-functional requirements
- acceptance criteria
- edge cases and failure states
- dependencies, constraints, and risks
- open questions and next artifact recommendation

## Common Mistakes

- Repeating the BRD instead of defining product behavior.
- Writing implementation tasks instead of requirements.
- Omitting permissions, empty states, errors, accessibility, or operational behavior.
- Treating analytics or success metrics as optional when product outcome depends on them.
- Advancing to design while core workflows are still ambiguous.
