# Methodology Index

Use this index to select the smallest useful methodology guidance for the current task.

Do not load every methodology file by default.

## Start Here

| Need | Read |
| --- | --- |
| understand the overall methodology | [AI-First Engineering Methodology](ai-first-engineering-methodology.md) |
| integrate the toolkit into another repo | [Shared Toolkit and Local Project Contract](shared-toolkit-local-contract.md) |
| decide which route or role should act | [Agent Task Routing](agent-task-routing.md) |
| choose model tier / reasoning effort | [Model and Reasoning Effort Routing](model-and-reasoning-routing.md) |
| keep bounded work lightweight | [Lightweight Flow](lightweight-flow.md) |
| use an issue/work item as durable memory | [Issue as Memory](issue-as-memory.md) |
| review PRs without turning review into planning | [Reviewer Scope and Post-Review Handoff](reviewer-scope-and-handoff.md) |
| continue review fixes in the same session | [Implementation Session Continuity](implementation-session-continuity.md) |
| manage expensive large-repo workspaces | [Optional Managed Worktree Pool](optional-managed-worktree-pool.md) |
| improve the toolkit from real friction | [Methodology Improvement Loop](methodology-improvement-loop.md) |

## Flow-Specific Guides

- [New Project Flow](new-project-flow.md)
- [Existing Project Feature Flow](existing-project-feature-flow.md)
- [Lightweight Flow](lightweight-flow.md)

## Context Loading Rule

```text
Load project-local context first.
Classify the task.
Load only the methodology files required by the selected route.
Escalate only when uncertainty, risk, architecture impact, security/privacy, migration, or coordination requires it.
```

## Related Templates

- [Agent-Readable Issue Template](../templates/agent-readable-issue-template.md)
- [Task Contract Template](../templates/task-contract-template.md)
- [Context Routing Template](../templates/context-routing-template.md)
- [Implementation Continuity Note Template](../templates/implementation-continuity-note-template.md)
- [Methodology Improvement Note Template](../templates/methodology-improvement-note-template.md)

## Deferred Concepts

Hooks, automated context resolvers, provider-specific model selection, and worktree management CLIs should remain deferred until the methodology contracts are stable.
