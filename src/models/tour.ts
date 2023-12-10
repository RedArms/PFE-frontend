import { Boxe } from "./boxe";
import { Client } from "./client";

export type Tour = {
    tour: number;
    geo_zone? : string;
    Deliverer ?: string;
    date : string;
    clients : Client[];
    content? : Boxe[];
  };