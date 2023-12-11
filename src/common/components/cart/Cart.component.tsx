import React from "react";
import { Divider, Drawer } from "@mui/material";
import { CartContext } from "@/core";
import { CartEmpty, CartFooter, CartHeader, CartList } from "./components";
import { CartProduct } from "./Cart.vm";

interface Props {
  isOpen: boolean;
  closeCartPanel: () => void;
}

export const Cart: React.FC<Props> = (props) => {
  const { isOpen, closeCartPanel } = props;
  const { cartProducts, dispatchCartActions } = React.useContext(CartContext);

  const deleteCartProduct = (product: CartProduct) => {
    dispatchCartActions({ type: "delete", payload: product });
  };

  return (
    <>
      <Drawer open={isOpen} onClose={closeCartPanel} anchor="right" variant={ isOpen ? 'permanent' : 'temporary'}>
        <div className="cart-container">
          <CartHeader
            totalCartProducts={cartProducts?.length}
            closeCartPanel={closeCartPanel}
          />

          <Divider />

          {cartProducts?.length === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <CartList
                cartProducts={cartProducts}
                deleteCartProduct={deleteCartProduct}
              />
              <CartFooter />
            </>
          )}
        </div>
      </Drawer>
    </>
  );
};
