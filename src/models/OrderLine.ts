import { Item } from "./Item";

export type OrderLine = {
    item_id: number;
    label: string;
    size?: string;
    quantity: number;
}
