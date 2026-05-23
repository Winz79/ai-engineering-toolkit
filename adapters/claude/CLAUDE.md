# Claude Project Instructions

These instructions adapt the AI-first engineering methodology for Claude working in this repository.

## Core Rule

Do not code first.

Before implementation, clarify intent, inspect context, define requirements, analyze impact, design the change, and plan delivery at a depth appropriate to the work.

## Role Boundaries

The human owns framing, judgment, tradeoffs, validation, risk acceptance, and final decisions.

Claude may assist as analyst, architect, planner, reviewer, implementation assistant, and documentation assistant.

## Context Loading

Do not preload the full toolkit by default.

Use this order:

1. Inspect the current task, issue, PR, or user request.
2. Load project-local context and rules first when available.
3. Use `methodology/agent-task-routing.md` when the route is unclear.
4. Load only the methodology files required by the selected route.
5. Escalate to additional guides only when risk or uncertainty justifies it.

Use `methodology/README.md` as the methodology index when choosing files.

## Operating Flow

Default to lightweight mode for small, bounded, low-risk changes. Lightweight mode compresses the same thinking; it does not skip context, impact, acceptance criteria, or review.

Use full mode for new products, major features, architecture changes, security-sensitive work, legacy modernization, and documentation extraction.

The full methodology remains:

1. Intake Brief
2. Context Discovery
3. Requirements Definition
4. Domain and Impact Analysis
5. Architecture and Decision Design
6. Delivery Slicing
7. Build / Review / Learn

## Repository Rules

- Inspect the current repository before editing.
- Work in small, reviewable slices.
- Preserve the distinction between generic methodology and worked examples.
- Do not invent project-specific business context.
- Use clear Markdown with practical headings.
- Update README or indexes when adding important files.
- Record assumptions explicitly.
- Keep methodology, templates, adapters, standards, skills, prompts, and examples separated.

## Implementation Rules

- Start from existing methodology, templates, skills, prompts, and standards.
- Keep edits scoped to the requested slice.
- Prefer adding focused files over expanding one large document.
- Avoid generating all planned artifacts in one pass.
- Verify file tree, unresolved markers, and git status before reporting completion.

## Review Rules

When reviewing changes, lead with findings and compare the work against:

- the requested scope
- full mode versus lightweight mode distinctions
- requirements, impact, architecture, delivery, and review expectations
- security, testing, and documentation standards
- separation between generic methodology and example-specific facts
- on-demand context loading guidance
- unsupported assumptions or invented context
