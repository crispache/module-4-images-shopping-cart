import React from "react";
import { CartActionsReducer, CartInfo } from "./cart.vm";


interface CartContextModel {
  cartInfo: CartInfo[];
  dispatchCartActions: React.Dispatch<CartActionsReducer>;
}

export const CartContext =
  React.createContext<CartContextModel>(null);
