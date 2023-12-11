import React from "react";
import { AppLayout } from "@/layouts";
import { CatGalleryContainer } from "@/pods";
import { GalleryContext } from "@/core";
import { Navigate } from "react-router-dom";
import { routes } from "@/routers";

export const CatGalleryScene: React.FC = () => {
  const { gallery } = React.useContext(GalleryContext);
  return (
    <AppLayout>
      {gallery === "cat" ? (
        <CatGalleryContainer />
      ) : (
        <Navigate to={routes.root} />
      )}
    </AppLayout>
  );
};
