# Methodology Assets Audit

## Summary

The repository is structurally coherent after the recent methodology additions. The new files mostly belong in `methodology/` because they define reusable rules, principles, and operating models rather than executable agent tasks.

No large refactor should be done immediately.

The strongest improvement path is:

1. keep the current methodology guides stable;
2. extract small reusable templates from embedded Markdown blocks;
3. align overlapping review prompt / skill / methodology assets;
4. add a lighter navigation layer so agents do not need the root README as the main context map;
5. defer hooks, automation, and model routing implementation until the contracts are stable.

## Findings

### Asset classification

Most recently added files are correctly placed in `methodology/`:

- `agent-task-routing.md` defines routing rules, not an executable task;
- `lightweight-flow.md` defines default operating mode;
- `issue-as-memory.md` defines tracker-as-memory principles;
- `reviewer-scope-and-handoff.md` defines role boundaries;
- `implementation-session-continuity.md` defines continuity rules;
- `optional-managed-worktree-pool.md` defines an optional advanced pattern;
- `shared-toolkit-local-contract.md` defines toolkit consumption and context routing;
- `methodology-improvement-loop.md` defines the feedback loop for improving the method.

However, several files contain embedded formats that should become templates rather than remain only inside methodology prose.

Best extraction candidates:

- `templates/agent-readable-issue-template.md`
- `templates/task-contract-template.md`
- `templates/implementation-continuity-note-template.md`
- `templates/context-routing-template.md`
- `templates/methodology-improvement-note-template.md`

Potential future skills:

- `skills/task-router/SKILL.md`
- `skills/issue-memory-updater/SKILL.md`
- `skills/post-review-conductor/SKILL.md`
- `skills/methodology-auditor/SKILL.md`

These should not be created all at once. Start with templates first.

### Coherence and terminology

The terminology is broadly coherent:

- `implementer`, `reviewer`, `conductor`, `maintainer`, and `QA / Verification` are consistently separated;
- `issue`, `task contract`, `PR`, `durable memory`, and `context routing` are now stable concepts;
- `lightweight by default` is consistent with routing and shared-toolkit guidance;
- optional worktree pooling is correctly described as conditional, not default.

Minor terminology risks:

- `conductor` and `planner` sometimes appear together. This is acceptable for now, but future guidance should decide whether `conductor` is the routing role and `planner` is a mode/capability, or whether both remain separate roles.
- `issue` and `work item` should remain paired in generic methodology because the toolkit is intended to work beyond GitHub.
- `PR` and `change request` should be paired when the guidance is tracker-neutral.

### Links and navigation

The root README links the important methodology files, templates, skills, prompts, standards, adapters, examples, tools, contributing guide, and roadmap.

The README is now complete but starting to behave like a full repository index. This makes it useful for humans but relatively expensive as an agent entrypoint.

Recommended follow-up:

- create `methodology/README.md` as a focused methodology index;
- create or update a short `AGENTS.md` / adapter entrypoint that tells agents to start from context routing, not the entire README;
- keep the root README as a human-facing overview;
- avoid adding every future file to the root README.

Broken links were not exhaustively checked by tooling in this audit. A Markdown link checker remains useful as a later validation slice.

### AI clarity

The repository is readable for agents, but the current entrypoint can still cause over-loading.

The clearest agent-consumption path should become:

```text
project .ai/AGENTS.md
→ project .ai/context-routing.md
→ selected toolkit methodology files
→ task-specific issue / PR / diff / files
```

The shared toolkit guidance now says this, but adapters have not yet been refreshed to apply it consistently.

The most important AI-clarity improvement is to add a small project-local context-routing template and update adapters to refer to it.

### Token efficiency

The current methodology is not huge, but token cost will grow if agents load the README plus all methodology files by default.

Token-efficiency improvements:

- do not load the full toolkit;
- extract reusable Markdown blocks into templates;
- keep root README shorter and move navigation depth into local indexes;
- make context routing the primary agent entrypoint;
- avoid repeating the same flow diagrams across routing, reviewer handoff, and implementation continuity;
- keep advanced patterns optional and loaded only when triggered.

Likely duplicate or near-duplicate zones:

- review guidance appears in `reviewer-scope-and-handoff.md`, `prompts/review-agent.md`, `skills/code-reviewer/SKILL.md`, and `templates/review-checklist-template.md`;
- issue/task formatting appears inside `issue-as-memory.md` but does not yet exist as standalone templates;
- context routing appears inside `shared-toolkit-local-contract.md` but should also exist as a local-project template.

### Extraction candidates

High-priority template extractions:

1. `agent-readable-issue-template.md`
2. `task-contract-template.md`
3. `context-routing-template.md`
4. `implementation-continuity-note-template.md`
5. `methodology-improvement-note-template.md`

Medium-priority skill extractions:

1. `task-router`
2. `post-review-conductor`
3. `issue-memory-updater`
4. `methodology-auditor`

Adapter updates:

- update Codex, Claude, Continue, and future OpenCode adapters to mention shared toolkit / local project contract;
- ensure adapters tell agents not to preload the full toolkit;
- ensure adapters prefer lightweight mode by default;
- ensure adapters use task routing before loading extra context.

Potential future hooks, but not now:

- review changes requested -> route back to same implementer/session;
- worktree reserve/release;
- issue state changed -> choose next agent route;
- PR opened -> verify implementation handoff exists.

These should remain deferred until the contracts are stable.

## Recommended PR slices

### PR 1 — Add operational templates

Create the small templates extracted from current methodology:

- agent-readable issue template;
- task contract template;
- context routing template;
- implementation continuity note template;
- methodology improvement note template.

Do not move methodology files yet.

### PR 2 — Add methodology index and reduce README pressure

Create `methodology/README.md` as the methodology navigation map.

Keep root README human-facing and avoid turning it into the full agent loading manifest.

### PR 3 — Align review assets

Review and align:

- `methodology/reviewer-scope-and-handoff.md`
- `prompts/review-agent.md`
- `skills/code-reviewer/SKILL.md`
- `templates/review-checklist-template.md`

Target separation:

- methodology file = role boundaries;
- prompt = role behavior;
- skill = repeatable review execution;
- template = checklist/output structure.

### PR 4 — Adapter refresh for on-demand context loading

Update adapter entrypoints so they load context the new way:

```text
local project context
→ classify route
→ load selected toolkit files
→ execute task
```

Do not make this provider-specific.

### PR 5 — Model and reasoning effort routing

Use issue #19 to add provider-neutral model tier / reasoning effort guidance.

This should extend routing, not replace it.

## Do not change yet

Do not create hooks yet.

Do not create a context resolver CLI yet.

Do not move all new methodology files into skills.

Do not merge methodology files just to reduce file count.

Do not make managed worktree pooling a default workflow.

Do not hard-code vendor-specific model names in generic methodology.

Do not optimize token count by deleting safety-critical guidance.

## Conclusion

The toolkit is at a good checkpoint. It does not need a broad structural rewrite.

The next best improvement is to make the methodology more operational and cheaper to consume by extracting templates and improving navigation.

The correct sequence is:

```text
audit report
→ templates
→ methodology index / README cleanup
→ review asset alignment
→ adapter refresh
→ model/reasoning routing
→ only then consider hooks or automation
```
