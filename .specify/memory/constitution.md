<!--
Sync Impact Report
- Version change: TODO -> 1.0.0
- Modified principles: template placeholders -> Simplicity First; Test Coverage First; Small, Reviewable Changes; Data Safety; Spec Compliance
- Added sections: Delivery Standards; Governance
- Removed sections: none
- Templates requiring updates: ✅ .specify/templates/plan-template.md; ✅ .specify/templates/spec-template.md; ✅ .specify/templates/tasks-template.md; ✅ .github/prompts/speckit.constitution.prompt.md; ✅ README.md
- Deferred items: none
-->

# speckit-playground Constitution

## Core Principles

### I. Simplicity First
Implement the smallest solution that fully satisfies the feature. Prefer direct, readable code over
layers, abstractions, or new dependencies unless they clearly reduce total complexity. Every change
must have a clear purpose and a matching test plan.

### II. Test Coverage First
Each feature MUST include automated tests for the main success path and the important failure paths
before it is considered complete. Prefer fast unit tests first, then add integration or contract
tests when behavior crosses module boundaries or depends on external systems. Coverage must protect
the user-visible behavior, not just implementation details.

### III. Small, Reviewable Changes
Work in narrow, independently reviewable increments. A change set MUST stay focused on one user
story or one clearly bounded refactor. Avoid mixed concerns, unnecessary churn, and broad edits that
make review or rollback difficult.

### IV. Data Safety
Data access and mutation MUST be explicit, validated, and protected by error handling. External or
untrusted inputs require defensive handling, and destructive actions must be deliberate and
test-covered. When data is fetched from an external source, failures must be surfaced cleanly and
handled without corrupting state.

### V. Spec Compliance
Implementation MUST follow the approved spec, plan, and tasks in that order. If a requirement is
unclear, resolve it in the spec before coding. Tests, documentation, and implementation must stay
aligned so the spec remains the source of truth.

## Delivery Standards

1. Keep feature scope minimal unless the spec explicitly justifies expansion.
2. Write or update tests with every behavior change.
3. Prefer simple module boundaries that are easy to understand and mock.
4. Handle external data and API failures with clear error paths.
5. Do not add dependencies when the standard library or existing code is sufficient.

## Governance

This constitution overrides informal habits, README guidance, and prompt defaults when they conflict.
Changes require an update to this file, a matching update to dependent templates, and a short impact
note in the Sync Impact Report. The version follows semantic versioning: MAJOR for breaking
governance changes, MINOR for new or expanded principles, and PATCH for clarifications or wording
fixes.

Compliance is checked during spec, plan, and task generation. Any exception must be documented in the
relevant artifact with a clear reason and a follow-up plan. Reviewers should reject changes that
increase complexity without a measurable benefit or that reduce test coverage for critical behavior.

**Version**: 1.0.0 | **Ratified**: 2026-05-23 | **Last Amended**: 2026-05-23

