# Architecture Brief Template

Use this template when the solution shape, boundaries, tradeoffs, or technical direction need review before implementation.

## 1. Summary

What architecture decision or design direction is being proposed?

## 2. Context

Summarize the relevant intake, requirements, discovery, and impact analysis findings.

## 3. Goals

List the outcomes the architecture must support.

- 

## 4. Non-Goals

List what this design will not optimize for or solve.

- 

## 5. Constraints

Capture constraints that affect the design.

Examples:

- existing architecture
- technology choices
- compatibility
- security and privacy
- compliance
- performance
- operations
- team skills
- timeline

## 6. Design Principles

List the principles guiding the choice.

Examples:

- preserve existing public contracts
- minimize migration risk
- prefer vertical slices over big-bang rewrites
- make security boundaries explicit
- keep operational ownership clear

## 7. Options Considered

### Option 1

Describe the option.

Pros:

- 

Cons:

- 

### Option 2

Describe the option.

Pros:

- 

Cons:

- 

### Option 3

Describe the option.

Pros:

- 

Cons:

- 

## 8. Recommended Architecture

Describe the recommended option and why it best fits the goals and constraints.

## 9. Component Boundaries

| Component | Responsibility | Inputs | Outputs | Owner |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## 10. Data Flow

Describe the main data flows.

Include sensitive data boundaries and trust boundaries.

## 11. API and Contract Changes

List new or changed APIs, events, files, schemas, or configuration contracts.

## 12. Security and Privacy Design

Capture required controls, assumptions, and review needs.

Consider authentication, authorization, data sensitivity, secrets, logging, auditability, and abuse cases.

## 13. Operational Design

Describe deployment, configuration, observability, support, scaling, and recovery expectations.

## 14. Tradeoffs and Risks

| Tradeoff / Risk | Consequence | Mitigation / Decision |
| --- | --- | --- |
|  |  |  |

## 15. ADR Candidates

List decisions that should become ADRs.

- 

## 16. Open Questions

- 

