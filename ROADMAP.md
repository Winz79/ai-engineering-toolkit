# Roadmap

This roadmap captures likely next slices for the AI Engineering Toolkit. It is intentionally lightweight; Notion may remain the planning cockpit, while this file records repository-facing direction.

## Current Foundation

The repository now includes:

- core methodology flows
- artifact templates
- reusable workflow skills
- role prompts
- baseline standards
- Codex, Claude, and Continue adapters
- first example guidance
- contribution guidance

## Near-Term Slices

### 1. Example Expansion

Add worked examples only when source context is available.

Useful next example artifacts:

- ReplayLab context discovery notes
- ReplayLab data classification notes
- ReplayLab open-question backlog
- a generic lightweight-flow example for a small technical cleanup

Avoid writing BRDs, PRDs, architecture briefs, or slice plans for ReplayLab until the missing product context is resolved.

### 2. Methodology Refinement

Improve the methodology after examples expose friction.

Candidate refinements:

- clarify when BRD-light is enough
- add guidance for switching from lightweight mode to full mode
- define how lessons from reviews become methodology updates
- add a concise artifact dependency map

### 3. Validation Tooling

Add small checks only when they reduce repeated review work.

Potential tools:

- skill frontmatter validator
- Markdown link checker
- repository artifact index checker
- unresolved marker scanner

Keep tooling optional and local. The methodology should remain usable without the tools.

### 4. Adapter Hardening

Refine adapters based on real use.

Potential updates:

- add tool-specific verification commands
- add adapter-specific review checklists
- document how each tool should consume skills and prompts
- keep adapters aligned with shared standards

### 5. Release and Versioning

Prepare a first tagged release when the repository has been exercised by at least one fuller example flow.

Release readiness should include:

- README links reviewed
- templates reviewed for consistency
- skills validated
- examples checked for unsupported assumptions
- standards aligned with review guidance
- release notes drafted

## Promotion Criteria

A new pattern should move into the reusable toolkit only when:

- it solves a repeated problem
- it is not tied to one product or repository
- it can be explained with a small artifact
- it has been validated against at least one example or real task
- it does not duplicate an existing template, skill, prompt, or standard

## Backlog Hygiene

Keep future work as small slices. If a planned change touches multiple directories, split it unless the files are tightly coupled by the same review concern.
