---
name: domain-model-extractor
description: Use when requirements, source code, documentation, workflows, or legacy behavior need to be turned into domain concepts, rules, glossary terms, and relationships.
---

# Domain Model Extractor

## Purpose

Extract the domain model that sits behind requirements, workflows, code, data, and operational behavior.

Use this skill during domain and impact analysis, especially before architecture design or legacy modernization.

## Core Rule

Separate domain concepts from implementation artifacts. A database table, API route, class, or UI label may reveal a concept, but it is not automatically the concept.

## Workflow

1. Gather requirements, workflows, docs, code paths, schemas, APIs, events, jobs, and support notes that describe behavior.
2. Identify domain entities, value objects, actors, states, events, policies, invariants, and lifecycle transitions.
3. Distinguish confirmed rules from inferred rules and open questions.
4. Map relationships, ownership, boundaries, and terms that have overloaded meanings.
5. Highlight modeling risks that should feed impact analysis, ADRs, tests, or documentation.

## Output

Produce:

- domain glossary
- key entities, roles, states, and events
- business rules and invariants
- workflows and lifecycle transitions
- ambiguous or overloaded terms
- confirmed versus inferred behavior
- boundary and ownership notes
- risks, gaps, and recommended next artifacts

## Common Mistakes

- Copying code structure and calling it the domain model.
- Treating field names as authoritative when behavior contradicts them.
- Ignoring operators, support workflows, scheduled jobs, and downstream consumers.
- Merging distinct concepts because they share a current implementation.
- Failing to mark inferred behavior as uncertain.
