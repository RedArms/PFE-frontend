import { Client } from "./Client";

export type Tour = {
  tour: number;
  geo_zone? : string;
  Deliverer ?: string;
  date : string;
  clients : Client[];
};