import type { YouBikeStation } from "./types";

export function filterStations(stations: YouBikeStation[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return stations;
  return stations.filter((station) =>
    station.name.toLowerCase().includes(normalized) || station.address.toLowerCase().includes(normalized),
  );
}
