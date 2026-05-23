export type YouBikeStation = {
  id: string;
  name: string;
  address: string;
  availableBikes: number;
  availableSpaces: number;
};

export type StationAvailability = Pick<YouBikeStation, "availableBikes" | "availableSpaces">;
