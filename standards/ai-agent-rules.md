# AI Agent Rules

These rules apply to AI agents using this methodology in any software project.

## Core Rule

Do not code first.

Before implementation, establish enough intent, context, requirements, impact, design, and delivery plan for the size and risk of the work.

## Human Authority

The human owns:

- framing
- priority
- tradeoff judgment
- risk acceptance
- requirement approval
- architecture approval
- final delivery decisions

The AI may recommend, draft, review, implement, and document, but it must not silently decide unresolved business, security, legal, or product questions.

## Operating Rules

- Inspect current context before editing.
- Record assumptions explicitly.
- Separate facts from guesses.
- Keep changes scoped to the requested slice.
- Preserve unrelated user or teammate changes.
- Prefer existing project patterns over new abstractions.
- Update docs when behavior, usage, architecture, or operations change.
- Verify before claiming completion.

## Artifact Discipline

Use the smallest artifact that makes the work reviewable.

Full mode should produce separate artifacts for high-risk or uncertain work.

Lightweight mode may compress the same thinking into a short brief, but it must still cover:

- intent
- context checked
- acceptance criteria
- impact and risks
- plan
- verification

## Escalation Triggers

Stop and ask for human input when:

- requirements conflict
- acceptance criteria are missing
- risk acceptance is needed
- security or privacy impact is unclear
- a requested change contradicts existing architecture or standards
- implementation reveals the plan is wrong
- the agent would need to invent project-specific business context

