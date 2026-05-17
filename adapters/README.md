# Adapters

Adapters translate the generic AI-first engineering methodology into tool-specific operating instructions.

The methodology remains the source of truth. Adapter files should only explain how a particular tool should apply it.

## Adapter Rules

Each adapter should:

- keep the "do not code first" rule visible
- preserve the seven-step workflow
- explain when to use full mode versus lightweight mode
- tell the tool how to inspect context before editing
- require small, reviewable changes
- require verification before reporting completion
- preserve the distinction between generic methodology and examples

Each adapter should avoid:

- redefining the methodology
- adding product-specific assumptions
- hard-coding one repository's domain into the generic process
- bypassing requirements, impact, design, or review for convenience
- contradicting repository standards

## Current Adapters

| Tool | File | Status |
| --- | --- | --- |
| Codex | [AGENTS.md](codex/AGENTS.md) | Initial adapter |
| Claude | [CLAUDE.md](claude/CLAUDE.md) | Initial adapter |
| Continue | `continue/rules.md` | Planned |

## Update Pattern

When adding or changing an adapter:

1. Start from the generic methodology and standards.
2. Adapt only the parts that the tool needs to execute well.
3. Keep tool-specific mechanics separate from methodology content.
4. Update this index and the root README.
5. Verify links and scan for unresolved markers before committing.
