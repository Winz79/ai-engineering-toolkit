---
name: release-notes-generator
description: Use when a release, delivery slice, user-facing change, migration, operational change, or documentation update needs concise release notes.
---

# Release Notes Generator

## Purpose

Summarize what changed, who is affected, what action is required, and how the release was verified.

Use `templates/release-notes-template.md` as the target structure.

## Core Rule

Write release notes from verified behavior and known impact. Do not describe planned work, unverified claims, or internal implementation details unless the audience needs them.

## Workflow

1. Identify the release scope, audience, and linked artifacts or commits.
2. Separate added, changed, fixed, and removed behavior.
3. Describe user, operator, developer, data, integration, security, privacy, and compatibility impact.
4. Capture migration steps, rollout status, rollback options, and known issues.
5. List the verification evidence used to support the release notes.

## Output

Produce:

- release summary
- intended audience
- added, changed, fixed, and removed items
- impact notes
- required actions or migration steps
- rollout and rollback notes
- verification evidence
- known issues and follow-up

## Common Mistakes

- Writing marketing copy instead of operationally useful notes.
- Claiming behavior that was not verified.
- Omitting migration, rollback, compatibility, or support impact.
- Including low-level implementation detail that does not help the audience.
- Mixing future roadmap items into current release notes.
