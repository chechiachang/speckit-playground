# Tasks: Taipei YouBike 2.0 Live Station Search

**Input**: Design documents from `/specs/001-youbike-station-search/`

**Feature**: Taipei YouBike 2.0 Live Station Search

**Prerequisites**: `plan.md` and `spec.md`

**Tests**: Not requested in the spec, so test tasks are not included.

## Phase 1: Setup

**Purpose**: Create the app structure and shared foundations.

- [X] T001 Create the web app structure from the implementation plan in `src/` and `tests/`
- [X] T002 Create the app entry files and root shell in `src/main.*` and `src/App.*`
- [X] T003 [P] Create shared styling files and base layout styles in `src/styles/`
- [X] T004 [P] Create the YouBike feature folder and module entry files in `src/lib/youbike/`

## Phase 2: Foundational

**Purpose**: Build the data and app plumbing needed by all user stories.

- [X] T005 Define YouBike station and availability data types in `src/lib/youbike/types.*`
- [X] T006 Implement YouBike API fetch and normalize logic in `src/lib/youbike/client.*`
- [X] T007 Implement refresh timer or re-fetch helper in `src/lib/youbike/availability.*`
- [X] T008 Add app-level loading and error state handling in `src/App.*`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

## Phase 3: User Story 1 - Search stations by address or name (Priority: P1) 🎯 MVP

**Goal**: Let users filter the station list by station address or station name.

**Independent Test**: Type an address or name keyword and confirm the station list filters correctly.

- [X] T009 [US1] Create the search box component in `src/components/SearchBox.*`
- [X] T010 [P] [US1] Implement station filtering by name and address in `src/lib/youbike/filter.*`
- [X] T011 [US1] Connect search input changes to filtered station state in `src/App.*`
- [X] T012 [US1] Restore the full list when the search input is cleared in `src/components/SearchBox.*`

### Parallel Example: User Story 1

- T009 and T010 can run in parallel after Phase 2.
- T011 starts after T009 and T010.
- T012 can run with T011 if the component contract is stable.

## Phase 4: User Story 2 - View real-time availability for each station (Priority: P1)

**Goal**: Show station name, available bikes, and remaining parking spaces, and refresh the values without a page reload.

**Independent Test**: Open any station row and confirm all three fields are visible and populated, then refresh and see the values update.

- [X] T013 [US2] Create the station list item component in `src/components/StationListItem.*`
- [X] T014 [US2] Create the station list renderer in `src/components/StationList.*`
- [X] T015 [US2] Wire availability refresh into app state updates in `src/App.*`
- [X] T016 [P] [US2] Update the UI when refreshed availability data arrives in `src/App.*`

### Parallel Example: User Story 2

- T013 and T014 can run in parallel after Phase 2.
- T015 depends on the list item and list renderer structure.
- T016 can run after T015 and can be parallel with later polish work.

## Phase 5: User Story 3 - Handle data retrieval failures gracefully (Priority: P2)

**Goal**: Show a friendly error and let users retry when the API fails or returns invalid data.

**Independent Test**: Block the API request, confirm the error view appears, then retry and confirm the list loads.

- [X] T017 [US3] Create the error state component with retry action in `src/components/ErrorState.*`
- [X] T018 [US3] Connect the retry action to data reload in `src/App.*`
- [X] T019 [US3] Detect invalid or empty API payloads in `src/lib/youbike/client.*`
- [X] T020 [US3] Prevent stale refresh updates from overwriting current state in `src/lib/youbike/availability.*`

### Parallel Example: User Story 3

- T017 and T019 can run in parallel after Phase 2.
- T018 depends on the error component.
- T020 can run alongside T018 if the refresh helper contract is stable.

## Phase 6: User Story 4 - Empty results are communicated clearly (Priority: P3)

**Goal**: Show an empty-state message when the search returns no stations.

**Independent Test**: Search for a term with no matches and confirm the empty state appears.

- [X] T021 [US4] Create the empty-state component in `src/components/EmptyResults.*`
- [X] T022 [US4] Switch the station list view to the empty state when no matches exist in `src/components/StationList.*`
- [X] T023 [US4] Keep empty-state behavior stable during search and refresh updates in `src/App.*`

### Parallel Example: User Story 4

- T021 can run in parallel with T022 after Phase 2.
- T023 depends on the app state wiring from User Story 1 and User Story 2.

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improve usability and finish shared concerns.

- [X] T024 Add mobile-responsive layout rules in `src/styles/`
- [X] T025 [P] Add loading indicators for initial load and refresh in `src/App.*`
- [X] T026 Add lightweight logging for fetch and refresh failures in `src/lib/youbike/client.*`
- [X] T027 Update `README.md` or `specs/001-youbike-station-search/quickstart.md` with manual verification steps

## Dependencies & Execution Order

- Phase 1 has no dependencies.
- Phase 2 depends on Phase 1 and blocks all user stories.
- User Stories 1 to 4 depend on Phase 2.
- Phase 7 depends on all implemented stories.

### Story Order

- US1 enables search.
- US2 adds availability display and refresh.
- US3 adds error handling and retry.
- US4 adds empty-state messaging.

## Parallel Opportunities

- Setup tasks T003 and T004 can run in parallel.
- US1 tasks T009 and T010 can run in parallel.
- US2 tasks T013 and T014 can run in parallel.
- US3 tasks T017 and T019 can run in parallel.
- US4 tasks T021 and T022 can run in parallel.
- Polish task T025 can run in parallel with T024, T026, or T027.

## Implementation Strategy

### MVP First

1. Finish Phase 1.
2. Finish Phase 2.
3. Finish User Story 1.
4. Validate search filtering before moving on.

### Incremental Delivery

1. Add station list availability.
2. Add refresh behavior.
3. Add error handling and retry.
4. Add empty-state messaging.
5. Finish responsive polish.
