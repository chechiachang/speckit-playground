# Tasks: 台北市 YouBike 2.0 即時站點查詢器

**Input**: Design documents from `/specs/003-youbike-station-search/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Include automated tests for the main success path and important failure paths.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Review existing app structure and confirm YouBike feature entry points in `src/` and `tests/`
- [ ] T002 Update shared configuration for Taipei YouBike data fetching in `src/lib/`
- [ ] T003 [P] Add or refresh feature documentation scaffold in `specs/003-youbike-station-search/quickstart.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Define station data parsing and normalization helpers in `src/lib/youbike/`
- [ ] T005 [P] Define shared station and search result types in `src/lib/youbike/types.ts`
- [ ] T006 [P] Add shared error and loading state handling in `src/components/`
- [ ] T007 Create the YouBike data access layer that wraps the public JSON feed in `src/lib/youbike/client.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - 站點總覽 (Priority: P1) 🎯 MVP

**Goal**: Automatically load Taipei YouBike 2.0 station data and show station name, available bikes, and empty docks in a list.

**Independent Test**: Open the page and confirm the station list appears with live data and the three required fields.

### Tests for User Story 1

- [ ] T008 [P] [US1] Add unit coverage for station list rendering in `tests/unit/youbike-station-list.test.ts`
- [ ] T009 [P] [US1] Add integration coverage for first-load data display in `tests/integration/youbike-station-overview.test.ts`

### Implementation for User Story 1

- [ ] T010 [P] [US1] Implement station list view in `src/components/youbike-station-list.tsx`
- [ ] T011 [US1] Implement initial data load flow in `src/app/page.tsx`
- [ ] T012 [US1] Wire station display fields to the normalized model in `src/lib/youbike/client.ts`
- [ ] T013 [US1] Add loading, empty, and error state copy in `src/components/youbike-status.tsx`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - 關鍵字搜尋 (Priority: P2)

**Goal**: Filter the station list by station name or address with immediate updates.

**Independent Test**: Type a keyword and verify only matching stations remain in the list.

### Tests for User Story 2

- [ ] T014 [P] [US2] Add unit coverage for search filtering in `tests/unit/youbike-search-filter.test.ts`
- [ ] T015 [P] [US2] Add integration coverage for name and address search in `tests/integration/youbike-search.test.ts`

### Implementation for User Story 2

- [ ] T016 [P] [US2] Implement search input component in `src/components/youbike-search-input.tsx`
- [ ] T017 [US2] Implement keyword filtering logic in `src/lib/youbike/search.ts`
- [ ] T018 [US2] Connect search state to station list filtering in `src/app/page.tsx`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - 例外與提示 (Priority: P3)

**Goal**: Show clear empty-result and data-fetch error states with a retry path.

**Independent Test**: Trigger a zero-result search or API failure and confirm the matching message and retry behavior appear.

### Tests for User Story 3

- [ ] T019 [P] [US3] Add unit coverage for empty and error states in `tests/unit/youbike-status.test.ts`
- [ ] T020 [P] [US3] Add integration coverage for retry after fetch failure in `tests/integration/youbike-error-state.test.ts`

### Implementation for User Story 3

- [ ] T021 [P] [US3] Implement empty-state and error-state presentation in `src/components/youbike-status.tsx`
- [ ] T022 [US3] Implement retry action for failed station loads in `src/app/page.tsx`
- [ ] T023 [US3] Ensure zero-result searches surface the no-match message in `src/lib/youbike/search.ts`

**Checkpoint**: All user stories should now be independently functional

---

# Tasks: 台北市 YouBike 2.0 即時站點查詢器

## Phase 1: Setup

- [ ] T001 Confirm the Next.js app structure and feature paths under `src/app`, `src/components`, `src/lib`, and `tests/` based on `specs/003-youbike-station-search/plan.md`
- [ ] T002 Set up the YouBike feature test tooling and scripts for Vitest, React Testing Library, and Playwright in the project config files
- [ ] T003 [P] Add shared test helpers and fixture placement for station data in `tests/` and `src/lib/`

## Phase 2: Foundational

- [ ] T004 Create the station data mapping layer to normalize API response fields into the `Station` shape in `src/lib/station.ts`
- [ ] T005 Create the runtime fetch helper for the Taipei YouBike 2.0 public JSON feed in `src/lib/youbike.ts`
- [ ] T006 Create shared UI state types for `loading`, `ready`, `empty`, and `error` in `src/types/station.ts`
- [ ] T007 Add minimal environment and API configuration for the live station feed in the app config files

## Phase 3: User Story 1 - 站點總覽 (Priority: P1) 🎯 MVP

**Goal**: 頁面載入後自動取得站點資料，並顯示站點名稱、可用車輛、剩餘空位。

**Independent Test**: 開啟頁面後可看到 loading，接著自動出現站點清單，每筆都有名稱、可用車輛、剩餘空位。

### Tests for User Story 1

- [ ] T008 [P] [US1] Add unit tests for station normalization and required field validation in `tests/unit/station.test.ts`
- [ ] T009 [P] [US1] Add component tests for initial loading and successful station list rendering in `tests/components/station-list.test.tsx`
- [ ] T010 [P] [US1] Add Playwright coverage for first load showing the station list in `tests/e2e/station-search.spec.ts`

### Implementation for User Story 1

- [ ] T011 [US1] Implement station normalization and validation in `src/lib/station.ts`
- [ ] T012 [US1] Implement live Taipei YouBike 2.0 fetch logic in `src/lib/youbike.ts`
- [ ] T013 [US1] Build the station list presentation component in `src/components/station-list.tsx`
- [ ] T014 [US1] Build the page-level data loading flow in `src/app/page.tsx`
- [ ] T015 [US1] Add loading, ready, and basic empty-state rendering for the initial station list in `src/app/page.tsx`

## Phase 4: User Story 2 - 關鍵字搜尋 (Priority: P2)

**Goal**: 可依站點名稱或地址關鍵字即時過濾清單。

**Independent Test**: 輸入名稱或地址關鍵字後，清單立即只保留符合站點。

### Tests for User Story 2

- [ ] T016 [P] [US2] Add unit tests for case-insensitive keyword matching on name and address in `tests/unit/station-query.test.ts`
- [ ] T017 [P] [US2] Add component tests for typing in the search box and filtering results in `tests/components/station-search.test.tsx`
- [ ] T018 [P] [US2] Extend Playwright coverage for filtering by station name and address in `tests/e2e/station-search.spec.ts`

### Implementation for User Story 2

- [ ] T019 [US2] Implement keyword filtering logic for station name and address in `src/lib/station-query.ts`
- [ ] T020 [US2] Add the search input UI and wire it to filtered results in `src/components/station-search.tsx`
- [ ] T021 [US2] Connect search state to the page-level station list flow in `src/app/page.tsx`

## Phase 5: User Story 3 - 例外與提示 (Priority: P3)

**Goal**: 在無結果或 API 失敗時，顯示清楚提示並可重試。

**Independent Test**: 查無結果時顯示無結果提示；API 失敗時顯示錯誤訊息並可重新載入。

### Tests for User Story 3

- [ ] T022 [P] [US3] Add unit tests for empty-result and error-state handling in `tests/unit/station-state.test.ts`
- [ ] T023 [P] [US3] Add component tests for no-match and retry error UI in `tests/components/station-state.test.tsx`
- [ ] T024 [P] [US3] Extend Playwright coverage for empty results and API failure retry in `tests/e2e/station-search.spec.ts`

### Implementation for User Story 3

- [ ] T025 [US3] Implement empty-result and error-state UI messages in `src/components/station-state.tsx`
- [ ] T026 [US3] Add retry handling for failed fetches in `src/app/page.tsx`
- [ ] T027 [US3] Ensure the page preserves the search UI while showing empty or error states in `src/app/page.tsx`

## Phase 6: Polish & Cross-Cutting Concerns

- [ ] T028 [P] Align visual spacing and responsive layout for the single-page station search UI in `src/app/page.tsx` and `src/components/*.tsx`
- [ ] T029 Review and tighten accessibility labels for search, loading, empty, and error states in `src/components/*.tsx`
- [ ] T030 Run the quickstart flow and verify the app behavior matches `specs/003-youbike-station-search/quickstart.md`

## Dependencies & Execution Order

- Phase 1 must finish before Phase 2.
- Phase 2 must finish before any user story work.
- US1 is the MVP and should be completed first.
- US2 depends on the shared station data and page flow from US1.
- US3 depends on the existing loading flow and search UI, but can be implemented after US1 or alongside US2 if the foundation is ready.

## Parallel Opportunities

- `T003` can run in parallel with `T002`.
- `T008`, `T009`, and `T010` can run in parallel.
- `T016`, `T017`, and `T018` can run in parallel.
- `T022`, `T023`, and `T024` can run in parallel.
- `T028` and `T029` can run in parallel.

## Implementation Strategy

- MVP first: complete Setup, Foundational, and User Story 1.
- Validate the first usable station list before adding search.
- Add keyword filtering next.
- Add empty and error handling last.
- Keep all tasks small, file-specific, and independently testable.
