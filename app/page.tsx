import { YouBikeStationSearch } from "@/components/YouBikeStationSearch";
import { loadStations } from "@/lib/youbike/client";

export default async function Home() {
  const result = await loadStations();
  return <YouBikeStationSearch initialResult={result} />;
}
