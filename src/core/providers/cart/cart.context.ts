import React from "react";
import { CartActionsReducer, CartProduct } from "./cart.vm";


interface CartContextModel {
  cartProducts: CartProduct[];
  dispatchCartActions: React.Dispatch<CartActionsReducer>;
}

export const CartContext =
  React.createContext<CartContextModel>(null);
