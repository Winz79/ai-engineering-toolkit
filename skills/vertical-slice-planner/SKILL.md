---
name: vertical-slice-planner
description: Use when requirements, feature specs, architecture notes, or technical designs need to be split into small vertical delivery slices with validation and review checkpoints.
---

# Vertical Slice Planner

## Purpose

Convert a reviewed requirement or design into small delivery slices that each produce usable learning, not just horizontal technical activity.

Use `templates/vertical-slice-plan-template.md` as the target structure.

## Core Rule

Each slice should connect user, system, data, and validation behavior where possible. Avoid plans that only create backend, frontend, database, or documentation work in isolation unless a preparatory slice is explicitly justified.

## Workflow

1. Confirm the source requirement, feature spec, impact analysis, and design direction.
2. Identify the smallest useful end-to-end behavior that can be built and verified.
3. Split the work into ordered slices with clear outcomes, acceptance checks, risks, and dependencies.
4. Call out setup, migration, security, observability, and documentation work where they affect delivery.
5. Define review checkpoints and the evidence needed before moving to the next slice.

## Output

Produce:

- linked source artifacts
- slicing principles used
- ordered slice list
- outcome for each slice
- included and excluded work per slice
- verification evidence per slice
- dependencies, risks, and rollback considerations
- review checkpoints
- follow-up backlog items

## Common Mistakes

- Creating layers of technical tasks instead of vertical increments.
- Making the first slice too large to review quickly.
- Ignoring migration, telemetry, support, or rollback work until the end.
- Treating documentation and release notes as cleanup instead of part of delivery.
- Moving to the next slice without concrete verification from the current one.
