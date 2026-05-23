# Methodology Improvement Loop

## Purpose

This guide defines how real project friction should improve the AI Engineering Toolkit.

The toolkit should evolve from observed delivery work, not only from abstract process design. Real experiments such as ReplayLab and DosiServ expose where the method is too heavy, too vague, missing a rule, or producing the wrong artifact.

## Core Principle

Improve the method only when the change reduces future friction.

Do not add a new template, prompt, skill, standard, or playbook merely because one project had a one-off issue. A methodology asset should help future work become clearer, safer, faster, or easier to review.

## Improvement Loop

```text
Apply method on real project
→ Observe friction
→ Classify friction
→ Extract lesson
→ Update toolkit asset
→ Retest on real task
```

The loop is intentionally small. It is not a formal governance process or retrospective ceremony.

## Step 1 — Apply Method On Real Project

Use the current toolkit on a real task, PR, issue, intake, review, or planning flow.

Examples:

- run a ReplayLab issue through conductor, implementer, reviewer, and PR review;
- use DosiServ intake to map a legacy repository safely;
- test issue-as-memory on a tracker item;
- apply lightweight mode to a small feature or review.

The project does not need to be perfect. The point is to observe the method under real constraints.

## Step 2 — Observe Friction

Capture where the workflow slowed down, became unclear, or produced the wrong shape of output.

Useful observations include:

- too much human prompt crafting;
- unclear agent routing;
- full methodology used for small work;
- missing context for a fresh session;
- reviewer feedback not routed correctly;
- issue too vague for agent restart;
- PR or task missing verification evidence;
- project-specific rule leaking into generic methodology;
- agent created artifacts that did not reduce future friction.

Keep observations factual. Avoid turning every annoyance into a methodology change.

## Step 3 — Classify Friction

Classify the friction before proposing a fix.

| Friction type | Description | Likely response |
| --- | --- | --- |
| Routing issue | The wrong role or workflow was chosen. | Update task routing or role boundary guidance. |
| Artifact overhead | The process created too many documents for the task. | Strengthen lightweight mode or escalation rules. |
| Missing context | Agent or human could not resume from durable state. | Improve issue-as-memory, PR, or handoff guidance. |
| Issue/task boundary unclear | Work was too big for a task contract or too small for an issue. | Refine issue vs task contract guidance. |
| Review handoff gap | Review output did not cleanly become merge, fix, follow-up, or escalation. | Improve reviewer scope or post-review handoff guidance. |
| Missing verification rule | Done was claimed without enough evidence. | Update verification expectations or templates. |
| Reusable pattern candidate | A repeated solution may help future projects. | Promote into methodology, template, skill, or example. |
| Project-specific note only | The observation matters only for one repo or domain. | Keep it in the project `.ai`, docs, or issue. |

## Step 4 — Extract Lesson

Turn the observation into a concise lesson.

A useful lesson answers:

1. What happened?
2. Why did the current method not handle it well?
3. Is this likely to repeat?
4. Is the fix generic or project-specific?
5. What existing asset should change?

Example:

```markdown
## Observation
ReplayLab PR reviews often produced useful findings, but post-review ownership was unclear.

## Lesson
Reviewer output should stay review-focused. Post-review routing belongs to conductor or maintainer.

## Toolkit Change
Add reviewer scope and post-review handoff guidance.
```

## Step 5 — Update Toolkit Asset

Prefer changing an existing asset before creating a new one.

Possible update targets:

- methodology document;
- template;
- skill;
- prompt;
- standard;
- adapter;
- example;
- roadmap note.

Create a new asset only when:

- the concept has a clear owner;
- existing assets would become confusing if expanded;
- the pattern is likely reusable;
- the artifact can stay concise.

## Step 6 — Retest On Real Task

After a toolkit change, apply it again to a real task.

Retest questions:

- Did the new guidance reduce back-and-forth?
- Did it reduce unnecessary artifacts?
- Did it make role routing clearer?
- Did it preserve enough context for restart?
- Did it improve review or verification?
- Did it avoid polluting the generic toolkit with project-specific details?

If the answer is no, revise or remove the change.

## ReplayLab As Experimentation Ground

ReplayLab is a controlled experimentation ground for AI-assisted delivery methodology.

It is useful for testing:

- repo-local `.ai` instructions;
- conductor, implementer, reviewer, and QA role boundaries;
- lightweight mode;
- PR review and post-review handoff;
- issue-driven work;
- milestone and release workflows;
- session continuity and worktree usage where appropriate;
- autonomous agent workflow without constant prompt rewriting.

Expected toolkit outputs from ReplayLab:

- routing guidance;
- lightweight execution rules;
- review and handoff patterns;
- issue-as-memory patterns;
- case study lessons.

ReplayLab should not force every product-specific decision into the generic toolkit.

## DosiServ As Legacy Case Study

DosiServ is a high-complexity legacy modernization case study.

It is useful for testing:

- safe repository intake;
- `.ai/INTAKE` structure;
- large .NET Framework dependency mapping;
- MSBuild/binlog-driven exploration;
- large-repo worktree cost and workspace constraints;
- modernization blocker discovery;
- rules for safe agent exploration in a large legacy codebase.

Expected toolkit outputs from DosiServ:

- legacy repository intake pattern;
- safe exploration rules;
- dependency intelligence map guidance;
- optional managed worktree pool guidance for large-cost repositories.

DosiServ-specific paths, business context, customer rules, and build quirks should remain local to the DosiServ project unless generalized deliberately.

## Promotion Criteria

Promote a lesson into the reusable toolkit only when:

- it solves a repeated or likely repeated problem;
- it is not tied to one product or repository;
- it can be explained compactly;
- it improves safety, clarity, speed, reviewability, or continuity;
- it has been tested against at least one real task or case study;
- it does not duplicate an existing asset;
- it will not make the default workflow heavier for everyone.

If these criteria are not met, keep the lesson in a project-local note, issue, PR comment, or case study.

## Anti-Patterns

Avoid these patterns:

- adding a new artifact for every friction;
- promoting project-specific rules into generic methodology;
- making lightweight work heavier in the name of process improvement;
- creating a template when one sentence in an existing guide is enough;
- preserving chat transcripts instead of durable decisions;
- treating methodology improvement as a detached documentation exercise;
- adding automation before the contract is stable.

## Minimal Improvement Note

Use this structure when capturing a lesson:

```markdown
## Observation

## Friction type

## Lesson

## Proposed toolkit change

## Project-specific details to keep local

## Retest candidate
```

This note can live in an issue, PR description, case study, or methodology update.

## Relationship To Other Guidance

Use [Agent Task Routing](agent-task-routing.md) when the friction concerns role or workflow selection.

Use [Lightweight Flow](lightweight-flow.md) when the friction concerns process overhead.

Use [Issue as Memory](issue-as-memory.md) when the friction concerns durable context or restartability.

Use [Reviewer Scope and Post-Review Handoff](reviewer-scope-and-handoff.md) when the friction concerns review ownership or post-review routing.
