# Shared Toolkit and Local Project Contract

## Purpose

This guide defines how projects should consume the AI Engineering Toolkit without copying the whole methodology into every repository or loading it all into every agent session.

The goal is to share reusable methodology while keeping project-specific context local and loading only the guidance required by the current task.

## Core Principle

```text
Shared toolkit = generic methodology
Local .ai = project contract
Harness adapter = tool-specific entrypoint
Issue / PR = operational memory
Context routing = load-on-demand mechanism
```

The toolkit is not a global prompt. It is a versioned methodology library.

A project should reference the toolkit, define its local contract, and route each task to the smallest useful set of toolkit files.

## What Lives In The Shared Toolkit

The shared toolkit should contain reusable assets:

- methodology guides;
- templates;
- skills;
- prompts;
- standards;
- harness adapters;
- generic examples;
- reusable patterns.

Shared assets should be versioned and changed through reviewed pull requests.

Agents should not directly mutate shared toolkit files unless the explicit task is to update the toolkit.

## What Lives In The Project

Each project should keep project-specific context in its own repository.

Suggested structure:

```text
repo/
  .ai/
    AGENTS.md
    context-routing.md
    project-context.md
    commands.md
    rules.md
```

Project-local files should contain:

- product or system context;
- repository-specific commands;
- build and test instructions;
- architecture constraints;
- forbidden areas;
- project-specific conventions;
- links to relevant issues, PRs, docs, and intake notes.

Do not move project-specific rules into the generic toolkit unless they become a reusable pattern.

## Harness Adapters

Harness adapters translate the shared method into tool-specific entrypoints.

Examples:

- Codex may use `AGENTS.md` style instructions.
- Claude Code may use `CLAUDE.md` style instructions.
- OpenCode may use its own provider and instruction configuration.
- Continue may use its own configuration and context rules.

Adapters should preserve the same underlying methodology while respecting each tool's conventions.

## On-Demand Context Loading

Do not preload the full toolkit by default.

Recommended rule:

```text
Load persistent project context first.
Classify the task.
Load only the methodology files required by that task route.
Do not load unrelated toolkit assets unless escalation is justified.
```

The project-local `.ai/context-routing.md` file should map common task types to the minimal toolkit files required.

## Example Context Routing

```text
bugfix
→ methodology/agent-task-routing.md
→ methodology/lightweight-flow.md

PR review
→ methodology/reviewer-scope-and-handoff.md
→ methodology/lightweight-flow.md

review-requested fixes
→ methodology/reviewer-scope-and-handoff.md
→ methodology/implementation-session-continuity.md
→ methodology/issue-as-memory.md

large costly repository workspace
→ methodology/optional-managed-worktree-pool.md
→ methodology/implementation-session-continuity.md

methodology feedback
→ methodology/methodology-improvement-loop.md
```

The exact format may vary. The important behavior is selective loading.

## Versioning

Projects should pin or clearly reference the toolkit version they use.

Examples:

```text
ai-engineering-toolkit@main
ai-engineering-toolkit@v0.1.0
ai-engineering-toolkit commit <sha>
```

For production or regulated work, prefer tags or commit SHAs over floating `main`.

## Anti-Patterns

Avoid:

- copying the whole toolkit into every repository;
- loading all methodology files for every task;
- mixing project-specific rules into shared methodology;
- letting agents edit shared prompts without review;
- using a mutable shared prompt folder as the only source of truth;
- hiding durable state in chat history;
- building a context resolver before the routing contract is stable.

## Relationship To Other Guidance

Use [Agent Task Routing](agent-task-routing.md) to classify work.

Use [Issue as Memory](issue-as-memory.md) to preserve durable operational state.

Use [Methodology Improvement Loop](methodology-improvement-loop.md) when a project-specific lesson may become a shared toolkit pattern.
