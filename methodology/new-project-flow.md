# New Project Flow

## When To Use

Use this flow for a new product, new service, new internal tool, new platform capability, or greenfield replacement where the team is defining the system from the beginning.

New project work usually needs full mode because the team must make early decisions about product shape, architecture, data, security, operations, and delivery strategy.

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

Capture the product intent before designing the system.

Include:

- target users or stakeholders
- primary problem
- desired outcomes
- constraints
- non-goals
- known risks
- open questions

Do not ask AI to generate the application yet. Ask AI to clarify the brief, identify ambiguity, and propose missing questions.

## 2. Context Discovery

For a new project, context is mostly external and strategic.

Discover:

- user workflows
- domain concepts
- regulatory or security constraints
- expected integrations
- data categories and retention needs
- operational expectations
- team constraints
- comparable internal systems, if any

The output should be enough context for requirements and architecture, not an exhaustive research archive.

## 3. Requirements Definition

Create a BRD for business and operating goals. Create a PRD or feature spec when product behavior needs sharper definition.

Requirements should separate:

- goals
- user journeys
- functional requirements
- non-functional requirements
- constraints
- assumptions
- non-goals
- acceptance criteria
- validation approach

## 4. Domain and Impact Analysis

Before architecture, analyze the shape of the domain and the risks created by the product.

Cover:

- domain entities and workflows
- data ownership
- integration boundaries
- security and privacy risks
- failure modes
- observability needs
- migration or bootstrap needs
- testing strategy

For security-sensitive systems, run threat modeling in this step.

## 5. Architecture and Decision Design

Create an architecture brief that explains the proposed system shape and the reasoning behind it.

Record ADRs for choices that will be expensive to reverse, such as:

- application architecture
- persistence model
- authentication and authorization approach
- deployment model
- integration protocol
- eventing or messaging strategy
- build and test strategy

## 6. Delivery Slicing

Plan vertical slices that prove the system incrementally.

A useful first slice often includes:

- one core user path
- minimal domain model
- storage or state handling
- tests
- observability hooks
- documentation update
- deployment or local run path

Avoid large horizontal phases like "build the backend" or "build the UI" without integrated behavior.

## 7. Build / Review / Learn

For each slice:

- implement only the planned behavior
- test the behavior and important failure paths
- review against requirements, architecture, and security expectations
- document deviations and new decisions
- update the next slice based on what was learned

The project source becomes the versioned source of truth once files are created. Planning artifacts should evolve with implementation decisions.
