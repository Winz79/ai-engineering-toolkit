# Optional Managed Worktree Pool

## Purpose

This guide defines an optional worktree pool and reservation model for repositories where workspace setup is expensive.

This is an advanced pattern, not a default toolkit requirement.

Use it only when normal branch or worktree creation creates too much cost, risk, or operational friction.

## Core Principle

Do not manage worktrees unless the repository cost justifies it.

For small or medium repositories, a normal branch-per-task or worktree-per-task workflow is simpler and usually better.

For large-cost repositories, prepared worktrees can reduce setup cost and prevent agents from stepping on each other.

## When This Pattern Is Justified

Consider a managed worktree pool when:

- the repository is large;
- checkout or worktree creation is slow;
- full build, restore, or setup is expensive;
- several agents may work concurrently;
- preserving a prepared environment matters;
- stale workspaces are costly or risky;
- review fixes should resume in the same workspace;
- disk usage needs a hard upper bound.

Typical example: a large legacy repository where repeated checkout, build, and setup dominate the work.

## When This Pattern Is Overkill

Do not use this pattern when:

- the repository is small;
- creating a worktree is cheap;
- agents run mostly sequentially;
- normal branch-per-task workflow is sufficient;
- cleanup is trivial;
- the pool itself would add more coordination than it removes.

ReplayLab-like repositories usually do not need this. DosiServ-like repositories may.

## Suggested Model

Prepare a bounded set of reusable worktrees outside the main development directory.

Each worktree should be reserved by at most one task or agent at a time.

Each managed worktree should have a small reservation marker that records:

- status;
- agent or harness;
- session or run id if available;
- issue or work item;
- pull request or change request;
- branch;
- owner;
- reservation time;
- last activity time.

The exact format is tool-specific. It should be readable by humans and future automation.

## Lifecycle

```text
available
→ reserved
→ active
→ awaiting review
→ changes requested / approved
→ resumed for fixes / released
→ cleanup
→ available
```

A worktree should not be reused until its reservation is released and cleanup is complete.

## Routing Rule

If review requests changes and the scope is unchanged, prefer routing back to:

```text
same issue → same branch → same PR → same worktree → same implementer session if available
```

Use a new worktree only if the original one is unavailable, stale, corrupted, unsafe, or the work requires re-planning.

## Cleanup Guidance

Cleanup should check:

- the worktree has no useful uncommitted changes;
- branch state is pushed or intentionally discarded;
- PR state is known;
- reservation marker is removed or reset;
- stale reservations are reviewed before deletion.

Never blindly delete a reserved worktree unless the owner, issue, branch, and PR state are understood.

## Tool Neutrality

This model should work with OpenCode, Claude Code, Codex, Continue, or a future orchestrator.

The method defines the contract. Tooling can later automate reservation, heartbeat, cleanup, and resume commands.

## Out Of Scope

This guide does not define:

- a central scheduler;
- distributed locking across machines;
- a full worktree manager CLI;
- project-specific scripts;
- mandatory use of worktree pools.

## Relationship To Other Guidance

Use [Implementation Session Continuity](implementation-session-continuity.md) to decide when review fixes should return to the same workspace/session.

Use [Issue as Memory](issue-as-memory.md) to preserve durable state if the workspace is lost.

Use [Agent Task Routing](agent-task-routing.md) to decide whether the same implementer should continue or another role should act.
