---
name: requirement-analyst
description: Use when intent and context need to become BRDs, PRDs, feature specs, acceptance criteria, non-functional requirements, success metrics, or reviewable requirement artifacts.
---

# Requirement Analyst

## Purpose

Convert validated intent and context into requirements that can be reviewed before impact analysis, architecture, and delivery planning.

Use the smallest suitable artifact:

- `templates/brd-template.md` for business, stakeholder, or operational clarity.
- `templates/prd-template.md` for product behavior and user workflows.
- `templates/feature-spec-template.md` for bounded feature or engineering changes.
- a lightweight brief when the work is small and low risk.

## Core Rule

Requirements describe what must be true and how success will be validated. Keep implementation options separate unless the user explicitly asks for technical design.

## Workflow

1. Confirm intake and context are sufficient for requirements.
2. Choose BRD, PRD, feature spec, or lightweight mode based on risk and scope.
3. Separate business goals, user needs, functional requirements, non-functional requirements, constraints, and non-goals.
4. Write requirements with acceptance criteria or validation signals.
5. Identify edge cases, failure states, dependencies, and open questions.
6. Recommend the next artifact: impact analysis, architecture brief, ADR, threat model, or vertical slice plan.

## Requirement Quality Bar

Each requirement should be:

- clear enough to review
- testable or otherwise verifiable
- traceable to a goal, user need, constraint, or risk
- free of hidden implementation decisions
- explicit about priority when priorities matter

## Output

Produce:

- selected artifact type and reason
- goals and non-goals
- functional requirements
- non-functional requirements
- acceptance criteria
- edge cases and failure states
- dependencies and constraints
- open questions
- recommended next artifact

## Common Mistakes

- Writing implementation tasks instead of requirements.
- Omitting non-functional requirements such as security, privacy, reliability, accessibility, observability, and performance.
- Treating acceptance criteria as vague intent rather than verifiable outcomes.
- Skipping non-goals.
- Continuing to design when requirements still contain unresolved ambiguity.

