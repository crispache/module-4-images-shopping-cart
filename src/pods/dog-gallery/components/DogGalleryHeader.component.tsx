import React from "react";
import { Typography } from "@mui/material";

interface Props {}

export const DogGalleryHeader: React.FC<Props> = () => {
  return (
    <>
      <div className="header-list">
        <Typography variant="h4">Seleccionar imágenes</Typography>
        <Typography variant="body2" color="GrayText">
            Listado de imágenes de perros
        </Typography>
      </div>
    </>
  );
};
