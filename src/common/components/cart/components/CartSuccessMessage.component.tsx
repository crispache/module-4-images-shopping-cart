import React from "react";
import {
  Alert,
  Snackbar,
} from "@mui/material";

interface Props {
  isShowMessage: boolean;
  closeMessage: () => void;
}

export const CartSuccessMessage: React.FC<Props> = (props) => {
  const { isShowMessage, closeMessage } = props;
 
  React.useEffect( () => {
    console.log('isShowSuccessMessage', isShowMessage)
  }, [isShowMessage])


  return (
    <>
      <Snackbar
        open={isShowMessage}
        onClose={closeMessage}
      >
        <Alert severity="success" variant="filled">
          Carrito vaciado correctamente
        </Alert>
      </Snackbar>
    </>
  );
};
