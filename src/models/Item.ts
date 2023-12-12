export type Item = {
    item_id?: number;
    label: string;
    size?: string;
}

export type ItemWithQuantity = {
    item_id?: number;
    label: string;
    size?: string;
    quantity: number;
}
