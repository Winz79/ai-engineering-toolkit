---
name: data-classification-assistant
description: Use when data inventory, sensitivity, retention, logging, access, third-party sharing, or privacy controls need to be classified for a project or feature.
---

# Data Classification Assistant

## Purpose

Classify data handled by a project, feature, integration, workflow, or dataset so security, privacy, logging, and retention decisions can be reviewed early.

Use `templates/data-classification-template.md` as the target structure.

## Core Rule

Classify data by how it is collected, processed, stored, logged, shared, retained, and deleted. Do not limit the review to database fields.

## Workflow

1. Confirm the scope and identify all data sources, destinations, and owners.
2. Inventory data elements, including derived, logged, exported, cached, and backup data.
3. Assign classification levels and note personal, sensitive, regulated, or business-critical data.
4. Map access needs, retention expectations, third-party sharing, and deletion behavior.
5. List controls and verification needed before implementation or release.

## Output

Produce:

- classified data inventory
- sensitivity reasons and policy or legal notes
- data flow summary
- access and ownership matrix
- logging and observability rules
- retention and deletion expectations
- third-party sharing notes
- required controls and verification
- open questions and residual risks

## Common Mistakes

- Treating logs, analytics, exports, and backups as out of scope.
- Assuming internal users or services can access all data.
- Omitting retention, deletion, and support access behavior.
- Using vague labels without explaining sensitivity reasons.
- Waiting until threat modeling or implementation to discover regulated data.
