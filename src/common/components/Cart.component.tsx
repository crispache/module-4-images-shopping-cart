import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { CartContext } from "@/core";
import { Close, DeleteOutline } from "@mui/icons-material";
import { CartInfo } from "@/core/providers/cart/cart.vm";

interface Props {
  isOpen: boolean;
  closeDrawer: () => void;
}

export const Cart: React.FC<Props> = (props) => {
  const { isOpen, closeDrawer } = props;
  const { cartInfo, dispatchCartActions } = React.useContext(CartContext);

  const deleteItemCart = (image: CartInfo) => {
    dispatchCartActions({ type: "delete", payload: image });
  }

  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={closeDrawer}>
        <div className="cart-container ">
          <div className="close-button">
            <IconButton size="medium" onClick={() => closeDrawer()}>
              <Close fontSize="large" />
            </IconButton>
          </div>

          <div className="title-cart">
            <Typography variant="h5">Cesta del compra</Typography>
          </div>

          <List
            sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}
          >
            {cartInfo.map((info) => (
              <ListItem
                key={info.id}
                alignItems="flex-start"
                disablePadding
                sx={{ marginBottom: 3 }}
                secondaryAction={
                  <IconButton edge="end" size="medium" onClick={() => deleteItemCart(info)}>
                    <DeleteOutline fontSize="medium" />
                  </IconButton>
                }
              >
                <img
                  src={info.picUrl}
                  alt={info.title}
                  height="120px"
                  width="auto"
                  style={{ borderRadius: 2 }}
                />
                <ListItemText sx={{ paddingLeft: 2 }}>
                  {info.title}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};
