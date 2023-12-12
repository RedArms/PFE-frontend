import { Client } from "./Client";
import { Boxe } from "./boxe";

export type Tour = {
  tour_id: number;
  geo_zone? : string;
  Deliverer ?: string;
  date : string;
  clients : Client[];
  content? : Boxe[];
};