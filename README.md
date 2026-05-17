# AI Engineering Toolkit

A reusable, AI-first software engineering methodology for turning intent into software without asking AI to code first.

This toolkit helps teams use AI as an analyst, architect, reviewer, planner, implementation assistant, and documentation assistant while keeping humans responsible for framing, judgment, tradeoffs, validation, and final decisions.

## Operating Model

The core flow is:

```text
Intent -> Context -> Requirements -> Impact -> Design -> Delivery Plan -> Build / Review / Learn
```

The important rule is simple: do not start with code. Start by understanding the work, the system, the risks, and the decision space. Code generation becomes useful only after the target is clear enough to review.

## Workflow

The methodology is organized into seven steps:

1. Intake Brief
2. Context Discovery
3. Requirements Definition
4. Domain and Impact Analysis
5. Architecture and Decision Design
6. Delivery Slicing
7. Build / Review / Learn

Each step produces reviewable artifacts that can be used by humans and AI agents. The artifacts are deliberately practical: briefs, requirements, impact notes, architecture decisions, threat models, and slice plans.

## Usage Modes

Use **full mode** when the work has meaningful uncertainty, risk, or architectural impact:

- new product or new project
- major feature
- architecture change
- security-sensitive change
- legacy modernization initiative
- documentation or architecture extraction effort

Use **lightweight mode** when the work is bounded and low-risk:

- small feature
- bugfix
- refactoring
- local tooling
- technical cleanup

Lightweight mode still follows the same thinking path, but it compresses the artifacts so the process does not become heavier than the work.

## Repository Structure

```text
methodology/   Core workflow guidance and mode-specific flows.
templates/     Reusable briefs, specs, ADRs, threat models, and plans.
skills/        Agent skill definitions for repeatable AI-assisted tasks.
prompts/       Role prompts for planner, implementation, review, and documentation agents.
standards/     Engineering standards used by agents and humans.
adapters/      Tool-specific instructions for Codex, Claude, Continue, and similar tools.
examples/      Worked examples that demonstrate the methodology in practice.
```

This first version intentionally starts small. The repository should grow through reviewed slices, not by generating a complete process manual in one pass.

## Start Here

For the full methodology, read:

- [AI-First Engineering Methodology](methodology/ai-first-engineering-methodology.md)
- [New Project Flow](methodology/new-project-flow.md)
- [Existing Project Feature Flow](methodology/existing-project-feature-flow.md)
- [Lightweight Flow](methodology/lightweight-flow.md)

For the first templates, use:

- [Intake Brief Template](templates/intake-brief-template.md)
- [ADR Template](templates/adr-template.md)

For agent behavior in Codex, use:

- [Codex Agent Rules](adapters/codex/AGENTS.md)

For a worked example, see:

- [ReplayLab Intake Brief](examples/replaylab/intake-brief.md)

## Principles

- Human judgment stays in the loop.
- AI should clarify before it implements.
- Context is an input, not an afterthought.
- Requirements must include constraints, non-goals, and validation signals.
- Architecture decisions should be explicit enough to review later.
- Security, privacy, reliability, and maintainability are design concerns, not final checks.
- Delivery should be sliced vertically so learning starts early.
- Documentation should be created as a byproduct of the work, not a cleanup task.

## Current Status

Initial repository scaffold and first methodology slice.

Several planned templates, skills, prompts, standards, and examples are intentionally not yet written. They should be added as separate reviewable changes.
