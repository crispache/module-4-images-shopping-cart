import React from "react";
import { CartContext } from "./cart.context";
import { CartActionsReducer, CartInfo } from "./cart.vm";


const cartInfoReducer = (state: CartInfo[], action: CartActionsReducer): Array<CartInfo> => {
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
  const [cartInfo, dispatch] = React.useReducer(cartInfoReducer, []);

  return (
    <>
      <CartContext.Provider
        value={{
          cartInfo: cartInfo,
          dispatchCartActions: dispatch,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
