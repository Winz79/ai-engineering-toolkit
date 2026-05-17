---
name: adr-generator
description: Use when architecture, data, security, integration, operational, or maintainability decisions need to be captured as an Architecture Decision Record.
---

# ADR Generator

## Purpose

Capture a significant decision in a concise Architecture Decision Record that future agents and humans can review.

Use `templates/adr-template.md` as the target structure.

## Core Rule

Record the decision and its consequences, not a generic design essay. If the decision is not yet ready, document the options and open questions instead of pretending it is accepted.

## Workflow

1. Confirm the decision scope, status, date, and source artifacts.
2. Summarize the context and constraints that make the decision necessary.
3. Compare realistic options, including the smallest safe option for existing systems.
4. State the chosen option clearly and explain the tradeoffs.
5. Capture consequences, validation signals, and review triggers.

## Output

Produce:

- ADR title and status
- context and decision forces
- options considered
- decision
- consequences and risks
- validation approach
- review triggers
- follow-up actions

## Common Mistakes

- Writing an ADR for a task that does not carry durable architectural impact.
- Hiding unmade decisions behind vague language.
- Listing only the chosen option and skipping meaningful alternatives.
- Omitting negative consequences or future review triggers.
- Mixing implementation steps into the decision record.
