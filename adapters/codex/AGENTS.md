# Codex Agent Instructions

These instructions adapt the AI-first engineering methodology for Codex agents working in this repository.

## Core Rule

Do not code first.

Before implementation, establish intent, inspect context, define requirements, analyze impact, design the change, and create a delivery plan appropriate to the work size.

## Human and AI Responsibilities

The human owns framing, judgment, tradeoffs, validation, risk acceptance, and final decisions.

Codex may assist as analyst, architect, reviewer, planner, implementation assistant, and documentation assistant.

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

Default to lightweight mode for bounded work.

Use full mode only when the work has meaningful uncertainty, risk, architectural impact, security or privacy concerns, modernization scope, or documentation extraction needs.

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
- Make small, reviewable changes.
- Preserve the distinction between generic methodology and worked examples.
- Do not invent project-specific business context.
- Use clear Markdown with practical headings.
- Update documentation when changing methodology.
- Record assumptions explicitly.
- Prefer adding focused files over expanding one large document.

## Implementation Rules

- Start from existing methodology and templates.
- Keep changes scoped to the requested slice.
- Do not create all planned templates, skills, prompts, or standards in one pass.
- Use unresolved markers only when a file is structurally necessary and the substantive content needs a later decision.
- Verify the resulting file tree and basic Markdown readability before reporting completion.

## Review Rules

When reviewing work in this repository, compare the change against:

- the requested methodology scope
- the core operating model
- full mode vs lightweight mode distinctions
- separation between methodology, templates, adapters, standards, skills, prompts, and examples
- on-demand context loading guidance
- clarity and practical usefulness
- unsupported assumptions or invented business context
