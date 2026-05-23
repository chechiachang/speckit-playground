"use client";

import { useMemo, useState } from "react";
import { filterStations } from "@/lib/youbike/filter";
import type { YouBikeStation } from "@/lib/youbike/types";
import type { LoadStationsResult } from "@/lib/youbike/client";

export function YouBikeStationSearch({ initialResult }: { initialResult: LoadStationsResult }) {
  const [query, setQuery] = useState("");
  const result = initialResult;

  const stations = useMemo(() => {
    if (!result.ok) return [] as YouBikeStation[];
    return filterStations(result.stations, query);
  }, [query, result]);

  if (!result.ok) {
    return (
      <main className="page-shell">
        <section className="panel">
          <h1>Taipei YouBike 2.0 Live Station Search</h1>
          <p role="alert" className="error">{result.error}</p>
          <button type="button" onClick={() => window.location.reload()}>Retry</button>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="panel">
        <h1>Taipei YouBike 2.0 Live Station Search</h1>
        <label htmlFor="station-search">Search by station name or address</label>
        <input
          id="station-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="e.g. 市府 or 信義"
        />
        {stations.length === 0 ? (
          <p role="status">No stations match your search.</p>
        ) : (
          <ul>
            {stations.map((station) => (
              <li key={station.id}>
                <strong>{station.name}</strong>
                <div>{station.address}</div>
                <div>Available bikes: {station.availableBikes}</div>
                <div>Remaining spaces: {station.availableSpaces}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
