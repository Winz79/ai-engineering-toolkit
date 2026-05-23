# Issue as Memory

## Purpose

This guide defines how a tracker item can act as durable operational memory for AI-assisted engineering workflows.

The goal is to avoid relying on chat history as the main source of truth. A new agent, harness, or human should be able to resume work from the tracker item, linked artifacts, and repository state.

This guide is tracker-neutral. It can apply to GitHub Issues, Mantis, Jira, Azure DevOps work items, or another issue tracker.

## Core Principle

The tracker item is the durable memory anchor.

Chat sessions, agent sessions, local notes, and worktrees may help execution, but the work that should survive must be written back to an issue, PR, task, or versioned document.

## When To Use A Durable Issue

Create or update a durable issue when the work:

- must survive across sessions;
- coordinates more than one agent or human;
- has acceptance criteria;
- may become a PR or release note;
- carries risk, uncertainty, or deferred follow-up;
- needs reviewable history;
- should be visible in backlog or planning;
- may need re-routing later.

A durable issue is especially useful when the original conversation, agent session, or worktree may disappear.

## When A Task Contract Is Enough

Use a lightweight task contract when the work is:

- tiny;
- local;
- low-risk;
- temporary;
- tied to one current session;
- not useful as backlog history;
- easy to discard after completion.

A task contract can live in a PR comment, local session note, issue comment, or agent prompt. If the result should matter later, promote it to a durable issue or update an existing one.

## Minimal Agent-Readable Issue Contract

A good issue should contain enough context for an agent to restart without reading a chat transcript.

Recommended fields:

```markdown
## Goal

## Context

## Scope

## Out of scope

## Acceptance criteria

## Relevant links

## Verification

## Risks

## Suggested route

## Current state

## Next action
```

The format may be adapted to the tracker, but the information should remain available.

## Field Guidance

### Goal

State the outcome, not only the activity.

Good:

```text
Add routing guidance so agents choose the smallest useful workflow.
```

Weak:

```text
Work on agent routing.
```

### Context

Capture the minimum background needed to understand why the issue exists.

Include links to related PRs, docs, decisions, or prior issues instead of copying large text blocks.

### Scope

State what should be changed or produced.

Scope should be specific enough to prevent the agent from broadening the work.

### Out of Scope

State what should not be done now.

This is important for agentic workflows because agents tend to expand useful ideas into extra work unless explicitly bounded.

### Acceptance Criteria

List observable conditions that prove the work is done.

Acceptance criteria should be checkable by review, tests, documentation inspection, or CI.

### Relevant Links

Link to source artifacts:

- PRs;
- ADRs;
- design notes;
- documentation;
- related issues;
- repository files;
- build logs;
- case study notes.

Do not rely on hidden chat context.

### Verification

State what should be run, checked, or reviewed.

Examples:

- unit test command;
- build command;
- documentation link check;
- manual reproduction steps;
- PR review checklist.

### Risks

Record known risks, uncertainties, or compatibility concerns.

Keep this short. If risks become complex, escalate to impact analysis, architecture, or threat modeling.

### Suggested Route

Optionally identify the likely route:

- Product / Strategy;
- Conductor / Planner;
- Implementer;
- Reviewer;
- QA / Verification;
- Methodology / Documentation.

The conductor or maintainer may override this route.

### Current State

State where the work currently stands.

Examples:

- ready for implementation;
- PR open and awaiting review;
- changes requested;
- blocked by missing decision;
- awaiting verification;
- deferred.

### Next Action

State the immediate next step.

The next action should be concrete enough for an agent or human to act without asking for a new plan.

## Write-Back Rules

After execution, the agent or conductor should write back information that should survive.

Write back:

- completed work summary;
- PR link;
- verification performed;
- unresolved risks;
- requested changes;
- state transition;
- follow-up issue links;
- decisions that affect future work.

Do not write back:

- verbose internal reasoning;
- temporary scratchpad notes;
- every command tried if it adds no future value;
- speculation that was resolved or discarded;
- chat transcript dumps.

## State Transitions

A tracker item may move through states such as:

```text
proposed
→ ready
→ in-progress
→ PR open
→ awaiting review
→ changes requested
→ awaiting verification
→ done
→ deferred / closed
```

The exact workflow can vary by tracker. What matters is that the current state and next action are visible.

## Orchestrator Usage

A conductor or orchestrator should use issue state to decide:

- whether work is ready;
- which role should act;
- whether an existing PR or branch should be resumed;
- whether review feedback returns to the same implementer/session;
- whether a new issue or task contract is needed;
- whether escalation is required.

The issue should not replace human judgment. It should make the next judgment easier.

## Tracker Neutrality

Avoid GitHub-specific assumptions in the generic method.

Use portable concepts:

- issue or work item;
- comment;
- linked PR or change request;
- state;
- assignee or owner;
- labels or tags;
- milestone or version.

GitHub-specific templates may exist as adapters, but the core methodology should remain portable to Mantis, Jira, Azure DevOps, or another tracker.

## Anti-Patterns

Avoid these patterns:

- chat history is the only memory;
- issue title is the only context;
- acceptance criteria are missing;
- out-of-scope work is not stated;
- every tiny task becomes a durable issue;
- important decisions stay in local scratchpads;
- an agent closes work without writing verification or remaining risk;
- follow-up work is mentioned in a PR but not tracked anywhere durable.

## Relationship To Other Guidance

Use [Agent Task Routing](agent-task-routing.md) to choose who should act on an issue.

Use [Lightweight Flow](lightweight-flow.md) when the issue is already scoped and low-risk.

Use [Reviewer Scope and Post-Review Handoff](reviewer-scope-and-handoff.md) when an issue has an associated PR review outcome.
