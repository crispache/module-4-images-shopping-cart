import React from "react";
import { Divider, Drawer } from "@mui/material";
import { CartContext } from "@/core";
import { CartEmpty, CartHeader, CartList } from "./components";
import { CartProduct } from "./Cart.vm";

interface Props {
  isOpen: boolean;
  closeCartPanel: () => void;
}

export const Cart: React.FC<Props> = (props) => {
  const { isOpen, closeCartPanel } = props;
  const { cartInfo, dispatchCartActions } = React.useContext(CartContext);

  const deleteCartProduct = (product: CartProduct) => {
    dispatchCartActions({ type: "delete", payload: product });
  };

  return (
    <>
      <Drawer open={isOpen} onClose={closeCartPanel} anchor="right">
        <div className="cart-container">
          <CartHeader
            totalCartProducts={cartInfo?.length}
            closeCartPanel={closeCartPanel}
          />

          <Divider />

          {cartInfo?.length === 0 ? (
            <CartEmpty />
          ) : (
            <CartList
              cartProducts={cartInfo}
              deleteCartProduct={deleteCartProduct}
            />
          )}
        </div>
      </Drawer>
    </>
  );
};
