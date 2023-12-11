import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { CartContext } from "@/core";
/* import { CartSuccessMessage } from "./CartSuccessMessage.component"; */

interface Props {
  isOpen: boolean;
  closeDialog: () => void;
}

export const CartDialogDeleteProduct: React.FC<Props> = (props) => {
  const { isOpen, closeDialog } = props;
  const { dispatchCartActions } = React.useContext(CartContext);
 // const [isShowSuccessMessage, setIsShowSuccessMessage] = React.useState<boolean>(false);

  const emptyCart =  () => {
    dispatchCartActions({ type: "empty" });
   // setIsShowSuccessMessage(true);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={closeDialog}>
        <DialogTitle>Vaciar carrito</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro que quiere vaciar el carrito?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ marginBottom: 1 }}>
          <Button onClick={closeDialog} variant="contained" color="primary">
            Cerrar
          </Button>
          <Button onClick={emptyCart} autoFocus variant="outlined">
            Vaciar
          </Button>
        </DialogActions>
      </Dialog>
    {/*   <CartSuccessMessage isShowMessage={isShowSuccessMessage} closeMessage={() => setIsShowSuccessMessage(false) }/> */}
    </>
  );
};
