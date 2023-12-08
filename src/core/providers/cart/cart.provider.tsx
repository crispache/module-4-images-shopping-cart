import React from "react";
import { CartContext } from "./cart.context";
import { CartActionsReducer, CartProduct } from "./cart.vm";


const cartInfoReducer = (state: CartProduct[], action: CartActionsReducer): Array<CartProduct> => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        action.payload
      ];
      
    case "delete":
      return state.filter( (info) => info.id !== action.payload.id);

    case "empty":
      return [];
    default:
      return state;
  }
};

interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartProducts, dispatch] = React.useReducer(cartInfoReducer, []);

  return (
    <>
      <CartContext.Provider
        value={{
          cartProducts,
          dispatchCartActions: dispatch,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
