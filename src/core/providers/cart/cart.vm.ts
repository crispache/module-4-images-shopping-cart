
export interface CartInfo {
    id: string;
    picUrl: string;
    title: string;
}


export interface CartActionsReducer {
    type: "add" | "delete" | "empty";
    payload: CartInfo;
}