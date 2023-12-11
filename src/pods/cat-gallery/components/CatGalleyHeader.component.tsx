import React from "react";
import { Typography } from "@mui/material";

interface Props {}

export const CatGalleryHeader: React.FC<Props> = React.memo(() => {
  return (
    <>
      <div className="list-header">
        <Typography variant="h4">Seleccionar imágenes</Typography>
        <Typography variant="body2" color="GrayText">
            Galería de imágenes de gatos
        </Typography>
      </div>
    </>
  );
});