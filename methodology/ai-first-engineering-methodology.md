# AI-First Engineering Methodology

## Purpose

This methodology helps teams use AI to improve software engineering judgment, planning, review, implementation, and documentation without letting code generation outrun understanding.

It applies to:

- new projects and new products
- feature additions or changes in existing projects
- legacy modernization
- security-by-design analysis
- documentation and architecture extraction

The methodology is not a prompt library by itself. It is a way to structure engineering work so humans and AI agents share context, artifacts, and review points.

## Guiding Principle

Do not ask AI to code first.

AI is most valuable before implementation when it helps expose ambiguity, map context, compare options, identify risks, and prepare reviewable plans. Implementation assistance should come after the team has a grounded understanding of what should be built and why.

## Roles

AI may act as:

- analyst
- architect
- reviewer
- planner
- implementation assistant
- documentation assistant

The human remains responsible for:

- framing the intent
- deciding priorities
- judging tradeoffs
- validating requirements
- accepting risk
- approving architecture
- making final delivery decisions

## Core Operating Model

```text
Intent -> Context -> Requirements -> Impact -> Design -> Delivery Plan -> Build / Review / Learn
```

Each stage answers a different question:

| Stage | Core Question | Typical Artifact |
| --- | --- | --- |
| Intent | What outcome are we trying to create? | Intake brief |
| Context | What system, users, constraints, and history matter? | Context discovery notes |
| Requirements | What must be true for this to succeed? | BRD, PRD, feature spec, or lightweight brief |
| Impact | What could this affect? | Impact analysis, domain map, threat model |
| Design | What should change, and why this way? | Architecture brief, ADRs |
| Delivery Plan | How do we slice and verify the work? | Vertical slice plan |
| Build / Review / Learn | What did we implement, prove, and discover? | Code, tests, review notes, docs updates |

## Seven-Step Workflow

### 1. Intake Brief

Capture the request in practical terms before expanding it.

The intake brief should identify the desired outcome, users or stakeholders, problem statement, constraints, known context, non-goals, and open questions. For existing systems, it should also name the affected area if known.

### 2. Context Discovery

Gather the minimum useful context before defining a solution.

For a new project, this means domain context, audience, workflows, integration expectations, data needs, and operational constraints. For an existing project, this means repository structure, architecture, current behavior, dependencies, tests, logs, documentation, and prior decisions.

### 3. Requirements Definition

Convert intent and context into reviewable requirements.

Use a BRD or PRD for larger work. Use a feature spec for bounded product changes. Use a lightweight brief for small tasks. Requirements should include success criteria, acceptance criteria, constraints, exclusions, and validation methods.

### 4. Domain and Impact Analysis

Map the consequences before choosing the design.

Impact analysis should cover domain behavior, user workflows, data, integrations, security, privacy, performance, reliability, observability, migration, operations, and test strategy. For security-sensitive changes, include threat modeling as part of this step.

### 5. Architecture and Decision Design

Design the change in a way that can be reviewed before implementation.

Use architecture briefs for system-level choices and ADRs for important decisions. Record alternatives considered, tradeoffs, risks, and consequences. The goal is not ceremony; the goal is to make the reasoning inspectable.

### 6. Delivery Slicing

Plan the work as vertical slices that produce testable learning.

A good slice changes only what is needed to validate a meaningful behavior or decision. Avoid plans that defer integration, testing, security, or documentation until the end.

### 7. Build / Review / Learn

Use AI to assist implementation, but keep review anchored in the earlier artifacts.

For each slice, implementation agents should follow the delivery plan, update tests and documentation, and surface deviations. Review agents should compare the result against requirements, architecture decisions, standards, and security expectations. Humans make the final call.

## Full Mode vs Lightweight Mode

Use full mode when the risk or uncertainty is high. Produce separate artifacts for intake, context, requirements, impact, architecture, and delivery slicing.

Use lightweight mode when the work is small and localized. Compress the same thinking into a shorter artifact, but do not skip context, impact, acceptance criteria, or review.

## Quality Bar

Before implementation begins, the team should be able to answer:

- What problem are we solving?
- What context did we use?
- What are the acceptance criteria?
- What areas could be affected?
- What security or reliability risks exist?
- What design decision are we making?
- What is the first vertical slice?
- How will we know it worked?

If those answers are unclear, the next task is clarification, not coding.
