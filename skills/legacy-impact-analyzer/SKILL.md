---
name: legacy-impact-analyzer
description: Use when changing, modernizing, replacing, documenting, or refactoring an existing or legacy system with hidden coupling, undocumented behavior, migration risk, or regression risk.
---

# Legacy Impact Analyzer

## Purpose

Map the consequences of changing an existing system before design or implementation begins.

Use `templates/impact-analysis-template.md` as the output shape.

## Core Rule

Preserve understood behavior intentionally. Do not treat missing documentation as permission to replace behavior blindly.

## Workflow

1. Summarize the requested change and the current known behavior.
2. Identify affected workflows, modules, data, integrations, configuration, operations, and documentation.
3. Separate confirmed behavior from inferred behavior.
4. Locate compatibility, migration, rollback, and regression risks.
5. Recommend characterization tests or other verification for poorly documented behavior.
6. Identify whether the next artifact should be an architecture brief, ADR, threat model, or vertical slice plan.

## Analysis Checklist

Check for:

- current users, operators, and downstream consumers
- public APIs, internal contracts, events, files, schemas, and jobs
- data migration and historical data compatibility
- authorization, audit, privacy, and logging behavior
- deployment, configuration, monitoring, and support workflows
- tests that describe current behavior and gaps where tests are missing

## Output

Produce:

- change summary
- current behavior
- affected users and workflows
- affected system areas
- data and integration impact
- security and privacy impact
- reliability and operations impact
- compatibility and migration notes
- regression risks
- verification needs
- decision summary

## Common Mistakes

- Assuming legacy behavior is accidental without evidence.
- Changing multiple boundaries in one slice.
- Ignoring downstream consumers or operational workflows.
- Skipping characterization tests when behavior is poorly documented.
- Modernizing for style without a business, risk, or maintainability reason.

