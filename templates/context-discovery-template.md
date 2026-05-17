# Context Discovery Template

Use this template after the intake brief and before requirements or design. The goal is to gather enough context to make good decisions, not to document everything.

## 1. Discovery Goal

What decision or next artifact should this discovery support?

Examples:

- decide whether the request needs full mode or lightweight mode
- prepare a BRD, PRD, or feature spec
- understand an existing code path before impact analysis
- extract architecture documentation from a legacy system

## 2. Source Context

List the sources reviewed.

### Human Sources

- stakeholders:
- subject matter experts:
- users or operators:

### Written Sources

- documents:
- tickets:
- Notion pages:
- diagrams:
- decisions:

### Technical Sources

- repositories:
- services:
- modules:
- APIs:
- databases:
- logs or telemetry:
- tests:

## 3. Current State

Describe what exists today.

For a new project, describe the current process, workaround, or unmet need.

For an existing project, describe current behavior, architecture, ownership, and known constraints.

## 4. Domain Notes

Capture the important concepts, terms, actors, workflows, rules, and edge cases.

Do not turn these into requirements yet. Mark uncertain items as assumptions or questions.

## 5. System Notes

For technical work, capture:

- relevant files or modules
- runtime boundaries
- dependencies
- configuration
- data stores
- external integrations
- deployment or operational constraints
- existing tests or missing tests

## 6. Constraints

List constraints discovered during research.

Examples:

- compatibility:
- security:
- privacy:
- compliance:
- performance:
- reliability:
- migration:
- timeline:
- team or ownership:

## 7. Known Decisions

List existing decisions that affect the work.

For each decision, include the source if known.

## 8. Assumptions

List assumptions that are currently being used.

Each assumption should be either validated, rejected, or carried forward explicitly.

## 9. Open Questions

List questions that must be answered before requirements, impact analysis, or design.

## 10. Discovery Summary

Summarize:

- what was learned
- what remains unknown
- whether full mode or lightweight mode is recommended
- which artifact should be created next
