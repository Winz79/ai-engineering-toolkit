---
name: code-reviewer
description: Use when reviewing implementation work, pull requests, diffs, generated code, refactors, tests, docs changes, or completed delivery slices against requirements, architecture, standards, and risk.
---

# Code Reviewer

## Purpose

Review implementation work against the artifacts that justified it: requirements, impact analysis, architecture decisions, delivery plan, tests, and repository standards.

## Core Rule

Lead with defects and risks. Prefer specific, actionable findings over broad commentary.

## Workflow

1. Identify the intended change and the artifact it should satisfy.
2. Inspect the diff and relevant surrounding code or docs.
3. Check behavior, compatibility, security, reliability, maintainability, tests, and documentation.
4. Separate blocking findings from suggestions.
5. Point to exact files and lines when possible.
6. Summarize residual risk and verification gaps.

## Review Checklist

Check:

- requirements and acceptance criteria coverage
- behavior regressions and edge cases
- data, contract, migration, and compatibility risks
- security, privacy, authorization, secrets, logging, and audit risks
- error handling and failure modes
- observability and operational readiness
- test coverage and quality
- documentation and ADR updates
- unnecessary scope expansion or unrelated refactoring

## Output

Produce findings first, ordered by severity:

- severity
- file and line reference
- issue
- impact
- suggested fix or question

Then include:

- open questions
- verification gaps
- short change summary when useful

## Common Mistakes

- Summarizing before listing important findings.
- Reviewing only style while missing behavior or risk.
- Trusting generated code without reading it.
- Ignoring tests that pass for the wrong reason.
- Requesting broad rewrites when a narrow fix would solve the issue.

