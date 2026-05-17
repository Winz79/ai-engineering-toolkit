---
name: brd-generator
description: Use when business intent, stakeholder needs, operational problems, or opportunity framing need to become a full or lightweight business requirements document.
---

# BRD Generator

## Purpose

Create a reviewable business requirements document from intake, context notes, stakeholder input, and known constraints.

Use:

- `templates/brd-template.md` when business scope, stakeholders, risks, or approvals are meaningful.
- `templates/brd-light-template.md` when the work is bounded and a full BRD would add unnecessary process.

## Core Rule

Keep the BRD about business clarity. Do not turn it into a PRD, technical design, delivery plan, or implementation task list.

## Workflow

1. Confirm the request, business reason, affected stakeholders, and desired outcome.
2. Choose full BRD or BRD-light based on risk, ambiguity, approval needs, and expected impact.
3. Separate goals, non-goals, requirements, constraints, assumptions, risks, and open questions.
4. Make success signals observable enough for later validation.
5. Identify follow-up artifacts only when they are justified by the scope.

## Output

Produce:

- selected BRD mode and reason
- business problem or opportunity
- desired outcomes and success signals
- stakeholders and affected users
- in-scope and out-of-scope items
- business, operational, policy, or compliance requirements
- assumptions, dependencies, risks, and open questions
- recommended next artifact or action

## Common Mistakes

- Writing product UI behavior before the business outcome is clear.
- Treating stakeholder wishes as validated requirements.
- Skipping non-goals and creating hidden scope expansion.
- Adding implementation details that belong in a feature spec or technical design.
- Producing a full BRD for a small low-risk change that only needs BRD-light.
