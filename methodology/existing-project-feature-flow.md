# Existing Project Feature Flow

## When To Use

Use this flow for feature additions, behavior changes, modernization increments, or architecture changes inside an existing project.

Existing projects require more context discipline than new projects because the main risk is often hidden coupling, undocumented behavior, migration impact, or breaking a workflow that already matters.

## Flow

```text
Intake Brief
-> Context Discovery
-> Requirements Definition
-> Domain and Impact Analysis
-> Architecture and Decision Design
-> Delivery Slicing
-> Build / Review / Learn
```

## 1. Intake Brief

Start with the requested change, not the implementation idea.

Capture:

- the requested outcome
- affected users or systems
- current behavior
- desired behavior
- constraints
- known files, modules, or services
- non-goals
- urgency or rollout needs
- open questions

If the user provides a proposed solution, record it as an option, not as the requirement.

## 2. Context Discovery

Inspect the actual system before defining the design.

Discover:

- repository structure
- existing architecture and module boundaries
- relevant code paths
- tests and test conventions
- data model and migrations
- integration points
- configuration and deployment paths
- existing documentation and ADRs
- recent related changes

AI should summarize what is observed and distinguish it from assumptions.

## 3. Requirements Definition

Convert the change request into a feature spec or BRD/PRD when the change has product or business scope.

The requirements should include:

- user-visible behavior
- acceptance criteria
- compatibility expectations
- migration requirements
- operational constraints
- performance or reliability expectations
- documentation needs
- explicit non-goals

## 4. Domain and Impact Analysis

Analyze how the change interacts with the current system.

Cover:

- affected domain concepts
- upstream and downstream dependencies
- API or contract changes
- data migration or backfill needs
- security and authorization changes
- privacy implications
- observability changes
- test coverage gaps
- rollback strategy

For legacy modernization, treat behavior preservation as a first-class requirement.

## 5. Architecture and Decision Design

Design the change using existing project patterns unless there is a clear reason to deviate.

Use ADRs when the change affects:

- public contracts
- persistence
- security boundaries
- module ownership
- deployment topology
- long-term maintainability

The design should explain how it fits the current system and what tradeoffs were accepted.

## 6. Delivery Slicing

Slice the work to reduce integration risk.

Good slices often include:

- characterization tests for current behavior
- internal refactor with no behavior change
- new behavior behind a narrow boundary
- migration with verification
- rollout and observability changes
- documentation update

Avoid plans that defer integration until the final step.

## 7. Build / Review / Learn

Build with constant comparison against the existing system.

Each slice should:

- preserve unrelated behavior
- update or add tests
- keep documentation current
- record new decisions
- surface unexpected coupling
- revise the plan when implementation reveals new facts

AI implementation assistance is useful here, but only after context discovery and impact analysis have constrained the work.
