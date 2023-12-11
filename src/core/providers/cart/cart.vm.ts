
export interface CartProduct {
    id: string;
    picUrl: string;
    title: string;
}


export interface CartActionsReducer {
    type: "add" | "delete" | "empty";
    payload?: CartProduct;
}