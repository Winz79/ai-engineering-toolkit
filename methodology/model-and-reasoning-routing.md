# Model and Reasoning Effort Routing

## Purpose

This guide extends task routing with provider-neutral model tier and reasoning effort guidance.

The goal is to choose enough model capability for the task without defaulting every request to the most expensive or highest-latency option.

This guide does not mandate a specific provider or model name.

## Core Principle

Use the cheapest and fastest model tier that can safely produce a reviewable result.

Escalate model capability when the task has ambiguity, broad context, architectural impact, security/privacy risk, migration risk, or high regression cost.

## Generic Model Tiers

| Tier | Use for | Avoid when |
| --- | --- | --- |
| fast / cheap | formatting, simple docs, obvious edits, lightweight classification | correctness depends on subtle reasoning |
| balanced | scoped implementation, routine review, issue decomposition | large context or high-risk decisions are needed |
| strong reasoning | architecture, difficult debugging, high-risk review, legacy impact analysis | task is mechanical or low risk |
| large-context | broad repository analysis, multi-file legacy exploration, long issue/PR history | targeted context is enough |
| specialized code | code-heavy edits, test generation, refactoring, API migration | product or strategy reasoning dominates |
| human decision required | irreversible tradeoffs, ambiguous product direction, risk acceptance | model output alone is sufficient and reviewable |

## Reasoning Effort

| Effort | Use for | Expected behavior |
| --- | --- | --- |
| low | simple formatting, small docs, obvious cleanup | act quickly, minimal planning |
| medium | scoped implementation, standard PR review, issue split | inspect context, produce small plan, verify |
| high | architecture, migration, security-sensitive review, legacy impact | compare options, surface tradeoffs, require evidence |
| very high | ambiguous strategy, cross-repo modernization, critical decisions | slow down, clarify, propose options, require human decision |

## Routing Examples

| Situation | Model tier | Reasoning effort |
| --- | --- | --- |
| documentation typo | fast / cheap | low |
| small bugfix with tests | balanced | medium |
| routine PR review | balanced | medium |
| high-risk PR review | strong reasoning | high |
| review-requested fixes in same scope | balanced or specialized code | medium |
| architecture decision | strong reasoning | high |
| broad legacy repository intake | large-context + strong reasoning | high |
| DosiServ-like modernization planning | large-context + strong reasoning | very high |
| security-sensitive design | strong reasoning | high |
| unclear product direction | strong reasoning + human decision | very high |

## Escalation Triggers

Escalate to a stronger tier when:

- acceptance criteria are unclear or disputed;
- the task crosses module, repository, or team boundaries;
- failure has security, privacy, compliance, operational, or customer impact;
- the agent must reason over long history, large diffs, or many files;
- review finds a design or scope mismatch;
- the model is guessing instead of grounding in evidence;
- cheap model output requires repeated correction.

## De-Escalation Triggers

Use a cheaper or faster tier when:

- the task is mechanical;
- the scope is tiny and local;
- acceptance criteria are obvious;
- existing patterns are clear;
- verification is cheap;
- the task is only formatting or extraction.

## Human Decision Boundary

Some tasks should not be solved by model escalation alone.

Route to human decision when:

- product direction is ambiguous;
- tradeoffs require ownership or risk acceptance;
- architecture options have organizational consequences;
- security/compliance risk cannot be accepted by the agent;
- the model cannot ground its recommendation in available evidence.

## Relationship To Other Guidance

Use [Agent Task Routing](agent-task-routing.md) to decide which role or workflow should act.

Use this guide after routing to choose model tier and reasoning effort.

Use [Shared Toolkit and Local Project Contract](shared-toolkit-local-contract.md) to apply this provider-neutrally across harnesses.
