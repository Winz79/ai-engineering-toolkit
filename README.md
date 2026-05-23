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

Default to **lightweight mode** for bounded work. Escalate deliberately when risk, uncertainty, architecture impact, security/privacy concerns, migration, or cross-team coordination justify heavier artifacts.

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

Use [Agent Task Routing](methodology/agent-task-routing.md) before starting work when the next route is unclear or when multiple agent roles could apply.

## Repository Structure

```text
methodology/   Core workflow guidance and mode-specific flows.
templates/     Reusable briefs, specs, ADRs, threat models, and plans.
skills/        Agent skill definitions for repeatable AI-assisted tasks.
prompts/       Role prompts for planner, implementation, review, and documentation agents.
standards/     Engineering standards used by agents and humans.
adapters/      Tool-specific instructions for Codex, Claude, Continue, and similar tools.
examples/      Worked examples that demonstrate the methodology in practice.
tools/         Local automation helpers for repository operations.
```

This first version intentionally starts small. The repository should grow through reviewed slices, not by generating a complete process manual in one pass.

## Start Here

For the full methodology, read:

- [AI-First Engineering Methodology](methodology/ai-first-engineering-methodology.md)
- [Agent Task Routing](methodology/agent-task-routing.md)
- [Issue as Memory](methodology/issue-as-memory.md)
- [Reviewer Scope and Post-Review Handoff](methodology/reviewer-scope-and-handoff.md)
- [New Project Flow](methodology/new-project-flow.md)
- [Existing Project Feature Flow](methodology/existing-project-feature-flow.md)
- [Lightweight Flow](methodology/lightweight-flow.md)

For the first templates, use:

- [Intake Brief Template](templates/intake-brief-template.md)
- [Context Discovery Template](templates/context-discovery-template.md)
- [BRD Template](templates/brd-template.md)
- [BRD-Light Template](templates/brd-light-template.md)
- [PRD Template](templates/prd-template.md)
- [Feature Spec Template](templates/feature-spec-template.md)
- [Impact Analysis Template](templates/impact-analysis-template.md)
- [Architecture Brief Template](templates/architecture-brief-template.md)
- [Technical Design Template](templates/technical-design-template.md)
- [Threat Model Template](templates/threat-model-template.md)
- [Data Classification Template](templates/data-classification-template.md)
- [Vertical Slice Plan Template](templates/vertical-slice-plan-template.md)
- [Review Checklist Template](templates/review-checklist-template.md)
- [Release Notes Template](templates/release-notes-template.md)
- [ADR Template](templates/adr-template.md)

For agent behavior in Codex, use:

- [Adapters Index](adapters/README.md)
- [Codex Agent Rules](adapters/codex/AGENTS.md)

For reusable workflow skills, use:

- [Intake Clarifier](skills/intake-clarifier/SKILL.md)
- [Context Discovery Agent](skills/context-discovery-agent/SKILL.md)
- [BRD Generator](skills/brd-generator/SKILL.md)
- [PRD Generator](skills/prd-generator/SKILL.md)
- [Feature Spec Generator](skills/feature-spec-generator/SKILL.md)
- [Requirement Analyst](skills/requirement-analyst/SKILL.md)
- [Domain Model Extractor](skills/domain-model-extractor/SKILL.md)
- [Architecture Planner](skills/architecture-planner/SKILL.md)
- [ADR Generator](skills/adr-generator/SKILL.md)
- [Legacy Impact Analyzer](skills/legacy-impact-analyzer/SKILL.md)
- [Threat Modeling](skills/threat-modeling/SKILL.md)
- [Data Classification Assistant](skills/data-classification-assistant/SKILL.md)
- [Vertical Slice Planner](skills/vertical-slice-planner/SKILL.md)
- [Code Reviewer](skills/code-reviewer/SKILL.md)
- [Regression Risk Reviewer](skills/regression-risk-reviewer/SKILL.md)
- [Release Notes Generator](skills/release-notes-generator/SKILL.md)

For reusable role prompts, use:

- [Master Planner Prompt](prompts/master-planner.md)
- [Implementation Agent Prompt](prompts/implementation-agent.md)
- [Review Agent Prompt](prompts/review-agent.md)
- [Documentation Agent Prompt](prompts/documentation-agent.md)

For baseline standards, use:

- [AI Agent Rules](standards/ai-agent-rules.md)
- [Documentation Standard](standards/documentation.md)
- [Testing Standard](standards/testing.md)
- [Security Standard](standards/security.md)

For a worked example, see:

- [Examples Index](examples/README.md)
- [ReplayLab Intake Brief](examples/replaylab/intake-brief.md)

For local automation helpers, see:

- [Notion Progress Helper](tools/notion/README.md)

For contribution guidance, see:

- [Contributing](CONTRIBUTING.md)
- [Roadmap](ROADMAP.md)

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

Initial repository scaffold, core methodology docs, artifact templates, reusable workflow skills, role prompts, baseline standards, and the first example guidance are in place.

The repository should continue growing through small example and adapter slices, with each new artifact reviewed against the methodology before it becomes a pattern.
