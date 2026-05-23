# Context Routing Template

Use this file in a project-local `.ai/` folder to load only the toolkit guidance required by the current task.

## Toolkit Reference

- toolkit repository:
- toolkit version or commit:

## Always Load

Project-local context that should be loaded before task-specific methodology:

- `.ai/project-context.md`
- `.ai/rules.md`
- `.ai/commands.md`

## Routing Rules

Do not load the full toolkit by default.

Load persistent project context first, classify the task, then load only the methodology files required by the selected route.

## Task Routes

| Situation | Toolkit files to load |
| --- | --- |
| unclear task routing | `methodology/agent-task-routing.md` |
| small implementation / bugfix | `methodology/agent-task-routing.md`, `methodology/lightweight-flow.md` |
| PR review | `methodology/reviewer-scope-and-handoff.md`, `methodology/lightweight-flow.md` |
| review-requested fixes | `methodology/reviewer-scope-and-handoff.md`, `methodology/implementation-session-continuity.md`, `methodology/issue-as-memory.md` |
| long-running issue / restart | `methodology/issue-as-memory.md` |
| large costly repository workspace | `methodology/optional-managed-worktree-pool.md`, `methodology/implementation-session-continuity.md` |
| methodology feedback | `methodology/methodology-improvement-loop.md` |

## Escalation

Load additional methodology only when the current task exposes uncertainty, risk, architecture impact, security/privacy concerns, migration impact, or cross-team coordination.

## Notes

Project-specific rules stay local. Do not copy the whole shared toolkit into the project unless there is a deliberate versioning or offline-use reason.
