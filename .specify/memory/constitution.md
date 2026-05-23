# speckit-playground Constitution

## Core Principles

### I. Concise, Testable Units
Every deliverable is structured as a small, independently testable unit with a clear purpose.
Code must be decomposed so a change can be validated without requiring broad integration.

### II. Interface Clarity
Each externally visible capability must expose an explicit interface (API/CLI/function contract) with
documented inputs, outputs, and error behavior.
Tests must validate the contract, not only the happy path.

### III. Test Coverage Is Non-Negotiable
New behavior must include tests that fail before implementation and pass after implementation.
For each feature PR, coverage must meet the project target for the changed code.
If the target cannot be met, the PR must include an explicit, time-bounded mitigation plan.

Coverage targets (minimum):
- Lines covered: 80%
- Branches covered: 70%

Exception: generated code, dependency code, or thin wrappers may be excluded only if justified in the PR.

### IV. Layered Testing Strategy
Use tests aligned to risk:
- Unit tests for logic and edge cases
- Contract tests for stable interfaces
- Integration tests for cross-module flows and data boundaries

Any change that modifies inputs/outputs or error semantics must include at least one contract-level test.

### V. No Surprise Complexity
Prefer the smallest implementation that satisfies requirements and testability.
If complexity is introduced, it must be justified in the PR by linking to the failing tests and the
measurable benefit (correctness, performance, or maintainability).

## Additional Constraints

### Definition of Done (DoD)
Each PR must include:
- Updated or added tests covering the changed behavior
- Proof the tests run (CI or local command output in the PR description)
- Documentation updates when the public interface changes

### Test Hygiene
Tests must be deterministic and run in CI without flaky timeouts.
If nondeterminism exists, the PR must include a fix or isolation strategy.

## Development Workflow

### Review Gates
Review must verify:
- The PR adds failing tests for the new behavior
- Coverage is tracked for changed code and meets minimum thresholds
- Edge cases and error semantics are covered

### Complexity & Scope Control
Avoid scope expansion during implementation.
If requirements change, update tests and re-validate coverage targets.

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

Governance is enforced by PR review and CI checks.

### Amendments
Any change to principles, coverage requirements, or governance rules must be proposed in a PR that:
- Summarizes the change
- Includes rationale and expected impact
- Updates the Constitution Sync Impact Report section

### Versioning Policy
Use semantic versioning:
- MAJOR: breaking governance/principles changes
- MINOR: new principles/sections or material additions
- PATCH: clarifications, wording, or typo fixes

### Compliance Review Expectations
Each PR must pass:
- Test suite execution
- Coverage minimums for changed code (or an explicit mitigation plan)

### Dates
Ratified and amended dates are tracked per version line below.

<!-- Sync Impact Report:
	Version change: 0.0.0 (template placeholders) -> 0.1.0
	Modified principles:
		- Principle 1 -> I. Concise, Testable Units
		- Principle 2 -> II. Interface Clarity
		- Principle 3 -> III. Test Coverage Is Non-Negotiable
		- Principle 4 -> IV. Layered Testing Strategy
		- Principle 5 -> V. No Surprise Complexity
	Added sections:
		- Additional Constraints (Definition of Done, Test Hygiene)
		- Development Workflow (Review Gates, Complexity & Scope Control)
	Removed sections:
		- None (template placeholders replaced)
	Templates requiring updates:
		- plan-template.md: ✅ already includes Constitution Check section (no change)
		- spec-template.md: ✅ already includes testing section (no change)
		- tasks-template.md: ⚠ pending (currently says tests are OPTIONAL; this constitution makes tests mandatory for new behavior)
	Follow-up TODOs:
		- Consider updating `.specify/templates/tasks-template.md` wording to align with mandatory test coverage.
-->

**Version**: 0.1.0 | **Ratified**: 2026-05-22 | **Last Amended**: 2026-05-22
