# Implementation Session Continuity

## Purpose

This guide defines how implementation work should continue after review feedback without restarting from a blank context.

## Core Principle

When technically possible, review-requested fixes should return to the same implementer session that produced the pull request.

Preferred path:

```text
same issue
→ same branch
→ same pull request
→ same implementer session
→ focused review fixes
→ re-review
```

A fresh session should be used only when the original session is unavailable, stale, unsafe, or when the requested work requires a different role or broader planning.

## Why It Matters

The implementer session often holds useful context that is not fully visible in the final diff:

- files touched and why;
- tradeoffs made during implementation;
- tests already run;
- assumptions and known gaps;
- rejected alternatives;
- current PR state.

Preserving this context reduces rework and avoids forcing a new agent to rediscover the same details.

## Role Boundaries

Session continuity does not change role ownership.

- The implementer performs implementation and review-requested fixes.
- The reviewer reviews independently.
- The conductor or maintainer decides whether feedback returns to the same implementer, becomes a follow-up issue, or requires escalation.

The implementer must not approve their own work.

## Preferred Flow

```text
Implementer opens or updates PR
→ Reviewer reviews independently
→ Reviewer approves, comments, or requests changes
→ Conductor / maintainer routes outcome
→ In-scope requested changes return to the same implementer session when possible
→ Implementer pushes follow-up commits to the same PR
→ Reviewer re-reviews
```

## When To Reuse The Same Session

Reuse the same implementer session when:

- the requested changes remain inside the original scope;
- the branch and PR are still valid;
- the original context is likely to help;
- no reviewer independence boundary is violated.

This should be the default for normal review fixes.

## When To Start A New Session

Start a new session when:

- the original session is lost or stale;
- the branch or working copy cannot be trusted;
- the review reveals a scope or design mismatch;
- the change needs product, architecture, QA, or planning work first;
- the conductor or maintainer intentionally reassigns the work.

A new session should start from durable state: issue, PR, branch, review comments, and any continuity note.

## Minimal Continuity Note

When the same session cannot continue, leave a concise handoff:

```markdown
## Implementation intent
## Branch / PR
## Files changed and why
## Decisions / tradeoffs
## Tests / verification run
## Known gaps or risks
## Review feedback to address
## Next action
```

This note is a restart aid, not a transcript.

## Optional PR Section

A PR may include:

```markdown
## Agent execution

- Implementer: <tool or agent>
- Session: <session id or local run id if available>
- Source issue: #123
- Branch: feature/example
- Status: awaiting review | changes requested | resumed for fixes
```

This is optional, but useful when several agents, sessions, or worktrees may be involved.

## Large Repository Note

For small repositories, branch and PR continuity may be enough.

For large-cost repositories, continuity may also include a reserved worktree:

```text
same issue → same branch → same PR → same worktree → same implementer session if available
```

Managed worktree pools should remain optional and used only when checkout, build, setup, or concurrency costs justify them.

## Anti-Patterns

Avoid:

- starting a fresh agent for every review comment;
- losing implementation context before review is resolved;
- letting the implementer self-approve;
- creating a new PR for in-scope review fixes;
- storing important review state only in chat;
- writing huge handoff notes nobody will read.

## Relationship To Other Guidance

Use [Reviewer Scope and Post-Review Handoff](reviewer-scope-and-handoff.md) for review ownership and routing.

Use [Issue as Memory](issue-as-memory.md) to preserve durable state across sessions.

Use [Agent Task Routing](agent-task-routing.md) when review feedback may require another role.

Use [Lightweight Flow](lightweight-flow.md) for bounded review fixes.
