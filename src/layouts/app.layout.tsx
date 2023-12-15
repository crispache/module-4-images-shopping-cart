import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Badge,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { routes } from "@/routers";
import { CartContext, GalleryContext } from "@/core";
import { Cart } from "@/common";

interface Props {
  children: React.ReactNode;
}

type TypeGallery = "dog" | "cat";

// TODO: Se podría hacer más pequeña la componente
export const AppLayout: React.FC<Props> = ({ children }) => {
  const { gallery, setGallery } = React.useContext(GalleryContext);
  const { cartProducts, isShowCart, setIsShowCart} = React.useContext(CartContext);
  const navigate = useNavigate();

  const handelChange = (e: React.MouseEvent<HTMLElement, MouseEvent>,value: TypeGallery | null) => { 
    if(value !== null) {
      setGallery(value);
    }
  };

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gallery App
          </Typography>
          <IconButton size="medium" onClick={() => setIsShowCart(true) }>
            <Badge badgeContent={cartProducts?.length} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
          <Box sx={{ minHeight: "90vh", marginTop: 5 }}>
            <ToggleButtonGroup
              color="primary"
              exclusive
              size="large"
              fullWidth
              value={gallery}
              onChange={handelChange}
            >
              <ToggleButton
                value="dog"
                size="large"
                onClick={() => navigate(routes.dogGallery)}
              >
                Perros
              </ToggleButton>
              <ToggleButton
                value="cat"
                size="large"
                onClick={() => navigate(routes.catGallery)}
              >
                Gatos
              </ToggleButton>
            </ToggleButtonGroup>

            {children}
          </Box>
        </Container>

        <Cart isOpen={isShowCart} closeCartPanel={() => setIsShowCart(false)}></Cart>
      </main>
    </>
  );
};
