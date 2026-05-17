---
name: architecture-planner
description: Use when requirements, impact findings, or system constraints need architecture options, tradeoffs, ADR candidates, component boundaries, or a reviewable design direction before implementation.
---

# Architecture Planner

## Purpose

Turn requirements and impact findings into a reviewable architecture direction.

Use `templates/architecture-brief-template.md` for broader design work and `templates/adr-template.md` for specific decisions.

## Core Rule

Compare options before recommending one. Keep the reasoning inspectable enough for humans to accept, reject, or revise the tradeoffs.

## Workflow

1. Confirm requirements, constraints, and impact notes are available.
2. Identify the design forces: compatibility, security, data, operations, delivery risk, and maintainability.
3. Propose two or three viable options, including the smallest safe option when working in an existing system.
4. Compare tradeoffs, risks, and migration implications.
5. Recommend one option and explain why it fits the current goals.
6. List ADR candidates and unresolved architecture questions.

## Output

Produce:

- design context
- goals and non-goals
- constraints and design principles
- options considered
- recommended architecture
- component boundaries
- data and trust boundaries
- operational implications
- tradeoffs and risks
- ADR candidates
- open questions

## Common Mistakes

- Treating the first plausible solution as the architecture.
- Optimizing for elegance while ignoring compatibility or migration risk.
- Hiding tradeoffs in implementation details.
- Skipping operational ownership, observability, rollback, or support concerns.
- Producing an architecture brief when a small ADR would be enough.

