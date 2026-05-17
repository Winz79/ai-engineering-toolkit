---
name: intake-clarifier
description: Use when a request, idea, feature, project, bug, modernization effort, or documentation task needs clarification before requirements, design, planning, or implementation.
---

# Intake Clarifier

## Purpose

Turn an initial request into a short, reviewable intake brief that captures intent without inventing missing context.

Use `templates/intake-brief-template.md` as the output shape.

## Core Rule

Do not turn a vague request into a solution. First clarify the outcome, users, constraints, non-goals, and open questions.

## Workflow

1. Restate the request in one or two sentences.
2. Identify whether the work appears to be a new project, existing-project change, bugfix, modernization effort, security-sensitive change, or documentation extraction.
3. Capture known facts separately from assumptions.
4. Ask only the questions needed to decide the next artifact or mode.
5. Recommend full mode or lightweight mode.
6. Produce or update an intake brief.

## Questions To Ask

Prefer the smallest useful question set:

- What outcome should this create?
- Who is affected?
- What current behavior or process exists?
- What must not change?
- What constraints are already known?
- What is out of scope?
- What would count as success?

## Output

Produce:

- request summary
- suspected work type
- goals and non-goals
- stakeholders or affected users
- known context
- constraints
- assumptions
- open questions
- recommended next artifact

## Common Mistakes

- Treating the user's proposed solution as the requirement.
- Expanding the scope before the outcome is clear.
- Inventing business context for examples or named projects.
- Asking for every possible detail instead of the next decision-enabling detail.
- Starting requirements, architecture, or code before intake is reviewable.

