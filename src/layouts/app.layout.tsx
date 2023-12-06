import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { routes } from "@/routers";

interface Props {
  children: React.ReactNode;
}

type TypeGallery = "dog" | "cat";

export const AppLayout: React.FC<Props> = ({ children }) => {
  const [selectedGallery, setSelectedGallery] = useState<TypeGallery>("dog");
  const navigate = useNavigate();

  const handelChange = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: TypeGallery
  ) => {
    setSelectedGallery(value);
  };

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" noWrap>
            App Gallery
          </Typography>
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
              value={selectedGallery}
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
      </main>
    </>
  );
};
