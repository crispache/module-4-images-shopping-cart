import React from "react";
import { AppLayout } from "@/layouts";
import { DogGalleryContainer } from "@/pods";
import { Navigate } from "react-router-dom";
import { routes } from "@/routers";
import { GalleryContext } from "@/core";

export const DogGalleryScene: React.FC = () => {
  const { gallery } = React.useContext(GalleryContext);
  return (
    <AppLayout>
      {gallery === "dog" ? (
        <DogGalleryContainer />
      ) : (
        <Navigate to={routes.root} />
      )}
    </AppLayout>
  );
};
