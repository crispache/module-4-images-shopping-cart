import React from "react";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { CartProduct } from "../Cart.vm";


interface Props {
  cartProducts: CartProduct[];
  deleteCartProduct: (product: CartProduct) => void;
}

export const CartList: React.FC<Props> = (props) => {
  const { cartProducts, deleteCartProduct } = props;

  return (
    <div className="cart-list">
      <List sx={{ width: "100%" }}>
        {cartProducts.map((info) => (
          <ListItem
            key={info.id}
            alignItems="flex-start"
            disablePadding
            sx={{ marginBottom: 3 }}
            secondaryAction={
              <IconButton
                edge="end"
                size="medium"
                onClick={() => deleteCartProduct(info)}
              >
                <DeleteOutline fontSize="medium" />
              </IconButton>
            }
          >
            <img
              src={info.picUrl}
              alt={info.title}
              height="100px"
              width="90px"
              style={{ borderRadius: 2, objectFit: 'cover' }}
            />
            <ListItemText sx={{ paddingLeft: 2 }}>{info.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
