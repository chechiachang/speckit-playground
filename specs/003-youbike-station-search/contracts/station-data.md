# Station Data Contract

The app expects a station list with these user-visible fields:
- Station name
- Station address
- Available bikes
- Empty docks

## Contract Rules
- The source must return a station collection at runtime.
- The app must be able to read station name and address for keyword filtering.
- The app must be able to read available bikes and empty docks for display.
- Missing or invalid data should be treated as a fetch or data error state.
