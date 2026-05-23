import type { YouBikeStation } from "./types";

type RawStation = {
  sno?: string;
  sarea?: string;
  sna?: string;
  ar?: string;
  available_rent_bikes?: string;
  available_return_bikes?: string;
};

type YouBikeApiResponse = {
  result?: {
    records?: RawStation[];
  };
} | RawStation[];

export type LoadStationsResult =
  | { ok: true; stations: YouBikeStation[] }
  | { ok: false; error: string };

export async function loadStations(): Promise<LoadStationsResult> {
  try {
    const response = await fetch("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json", {
      cache: "no-store",
    });

    if (!response.ok) {
      return { ok: false, error: "Failed to load YouBike stations. Please try again." };
    }

    const data = (await response.json()) as YouBikeApiResponse;
    const records = Array.isArray(data) ? data : data.result?.records;

    if (!Array.isArray(records) || records.length === 0) {
      return { ok: false, error: "YouBike station data was empty or invalid." };
    }

    const stations = records
      .filter((record) => record.sno && record.sna && record.ar)
      .map<YouBikeStation>((record) => ({
        id: record.sno as string,
        name: String(record.sna).replace(/^YouBike2.0_/, ""),
        address: String(record.ar),
        availableBikes: Number(record.available_rent_bikes ?? 0),
        availableSpaces: Number(record.available_return_bikes ?? 0),
      }));

    if (stations.length === 0) {
      return { ok: false, error: "YouBike station data was empty or invalid." };
    }

    return { ok: true, stations };
  } catch {
    return { ok: false, error: "Failed to load YouBike stations. Please try again." };
  }
}
