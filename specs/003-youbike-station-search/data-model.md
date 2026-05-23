# Data Model: 台北市 YouBike 2.0 即時站點查詢器

## Entity: Station

Represents one YouBike 2.0 station shown in the list.

### Fields
- `name`: string
- `address`: string
- `availableBikes`: number
- `emptyDocks`: number

### Validation Rules
- `name` must be a non-empty string.
- `address` must be a non-empty string.
- `availableBikes` must be a non-negative integer.
- `emptyDocks` must be a non-negative integer.

## Entity: StationQuery

Represents the current keyword filter used by the user.

### Fields
- `keyword`: string
- `matchedStations`: Station[]

### Validation Rules
- `keyword` may be empty.
- Matching is case-insensitive.
- Matching applies to both station name and station address.

## Relationships
- One `StationQuery` filters many `Station` records.
- The UI renders the filtered station list directly from fetched station data.

## State Notes
- `Station` data is fetched from the public API at runtime.
- The list state can be `loading`, `ready`, `empty`, or `error`.
