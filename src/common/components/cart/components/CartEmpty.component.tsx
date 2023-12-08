import React from "react";
import { Typography } from "@mui/material";
import EmptyCart from "./../assets/empty_cart.png";

interface Props {}

export const CartEmpty: React.FC<Props> = () => {
  return (
    <div className="cart-empty">
        <img src={EmptyCart} alt="Carrito vacío" height="150px" width="auto" />

        <Typography variant="body1">¡Tu carrito está vacío! </Typography>
        <Typography variant="body2" color="GrayText">
          Explora la galería de imágenes
        </Typography>
    </div>
  );
};
