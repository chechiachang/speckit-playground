# Quickstart: 台北市 YouBike 2.0 即時站點查詢器

## Goal
Run the single-page app, load live station data, and verify search works by name and address.

## Development Steps
1. Install dependencies.
2. Start the web app in development mode.
3. Open the app in a browser.
4. Confirm station data loads automatically.
5. Type a keyword in the search box and confirm the list filters immediately.

## Expected Behavior
- The page shows a loading state first.
- The station list appears after data loads.
- Search matches both station name and station address.
- Empty search results show a no-match message.
- API failure shows an error state with retry.

## Verification
- Check that each station row shows name, available bikes, and empty docks.
- Check that empty and error states are understandable.
