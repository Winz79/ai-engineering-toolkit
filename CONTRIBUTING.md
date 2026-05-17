# Contributing

This repository should grow through small, reviewable methodology slices.

The goal is not to add every useful artifact at once. The goal is to improve the AI-first engineering toolkit while preserving clear boundaries between methodology, templates, skills, prompts, standards, adapters, and examples.

## Contribution Principles

- Start from the current repository state.
- Keep each change focused on one artifact type or one workflow gap.
- Preserve the distinction between reusable methodology and project-specific examples.
- Do not invent business context for examples.
- Update README or local indexes when adding important files.
- Prefer practical, reviewable Markdown over broad process narration.
- Verify the change before committing.

## Change Types

| Change | Expected Review Focus |
| --- | --- |
| Methodology | Does it improve the core workflow without duplicating templates or standards? |
| Template | Is the artifact practical, generic, and reviewable? |
| Skill | Does the trigger fit a real repeated task, and is the workflow concise? |
| Prompt | Does the role prompt keep responsibility, scope, and review boundaries clear? |
| Standard | Does it define reusable quality expectations without becoming tool-specific? |
| Adapter | Does it translate the methodology for one tool without redefining it? |
| Example | Does it use confirmed context and keep assumptions explicit? |
| Tooling | Does it automate a real repository task without becoming required for the methodology? |

## Slice Workflow

1. Inspect the repository and current git status.
2. Identify the smallest useful change.
3. Edit only the files needed for that slice.
4. Update relevant indexes or README links.
5. Run verification.
6. Commit with a concise message.
7. Push the branch or mainline according to the current workflow.

## Verification Checklist

Before committing, run checks appropriate to the change:

- file tree scan
- unresolved marker scan
- Markdown link or readability review
- skill frontmatter validation when skills change
- syntax check for scripts or automation helpers
- git status review

Record skipped checks and residual risk in the commit discussion or handoff.

## Example Promotion

Examples may reveal improvements that belong in reusable methodology.

Promote a lesson from an example only when:

- the pattern applies beyond the example project
- the source context is clear
- assumptions are separated from confirmed facts
- the reusable change is added to methodology, templates, skills, prompts, or standards in a separate slice

Do not copy example-specific facts into generic files.

## Commit Style

Use short imperative commit messages:

- `Add examples guidance index`
- `Add Continue adapter rules`
- `Refine documentation standard`

Avoid bundling unrelated methodology, template, skill, and example changes into one commit.
