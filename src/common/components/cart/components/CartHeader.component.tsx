import React from "react";
import { IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

interface Props {
  totalCartProducts: number;
  closeCartPanel: () => void;
}

export const CartHeader: React.FC<Props> = (props) => {
  const { totalCartProducts, closeCartPanel } = props;

  return (
    <div className="cart-header">
      <Typography variant="h5">Carrito ({totalCartProducts}) </Typography>
      <IconButton size="medium" onClick={() => closeCartPanel()}>
        <Close fontSize="large" />
      </IconButton>
    </div>
  );
};
