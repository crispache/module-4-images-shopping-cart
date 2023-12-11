import React from "react";
import { Button } from "@mui/material";
import { CartDialogDeleteProduct } from "./CartDialogDeleteProduct.component";

interface Props {}

export const CartFooter: React.FC<Props> = (props) => {
  const [isOpenDialog, setIsOpenDialog] = React.useState<boolean>(false);

  return (
    <div className="cart-footer">
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ marginBottom: 2 }}
      >
        Checkout
      </Button>
      <Button variant="outlined" fullWidth onClick={() => setIsOpenDialog(true)}>
        Vaciar carrito
      </Button>

      <CartDialogDeleteProduct
        isOpen={isOpenDialog}
        closeDialog={() => setIsOpenDialog(false)}
      />
    </div>
  );
};
