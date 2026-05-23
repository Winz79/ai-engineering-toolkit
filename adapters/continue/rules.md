# Continue Rules

These rules adapt the AI-first engineering methodology for Continue-assisted work in this repository.

## Core Rule

Do not code first.

Use Continue to inspect, explain, draft, and revise only after the work has enough intent, context, requirements, impact, and design clarity for the current risk level.

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

Default to lightweight mode for small, bounded, low-risk changes, while still capturing context, acceptance criteria, impact, implementation plan, and review evidence.

Use full mode when the change has high uncertainty, broad impact, security sensitivity, architecture consequences, or legacy modernization risk.

The full methodology remains:

1. Intake Brief
2. Context Discovery
3. Requirements Definition
4. Domain and Impact Analysis
5. Architecture and Decision Design
6. Delivery Slicing
7. Build / Review / Learn

## Context Rules

- Inspect relevant files before proposing edits.
- Summarize observed context separately from assumptions.
- Link suggestions back to methodology artifacts where possible.
- Prefer repository patterns over invented structures.
- Do not add project-specific facts to generic methodology files.

## Editing Rules

- Keep changes small and reviewable.
- Update README or indexes when adding important files.
- Keep templates generic and examples project-specific.
- Keep standards and adapters separate from prompts and skills.
- Avoid broad rewrites unless the requested slice requires them.

## Review Rules

When reviewing Continue-assisted changes, check:

- requirements and acceptance criteria
- affected files, contracts, and examples
- security, privacy, testing, documentation, and rollback implications
- consistency with methodology, standards, and adapters
- on-demand context loading guidance
- unresolved assumptions or invented context

Report findings before summaries.

## Verification Rules

Before reporting completion:

- inspect the final diff
- run the relevant file tree or link checks
- scan for unresolved markers
- check git status
- state skipped checks or residual risks explicitly
