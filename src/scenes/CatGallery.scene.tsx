import React from "react";
import { AppLayout } from "@/layouts";
import { CatGalleryContainer } from "@/pods";

export const CatGalleryScene: React.FC = () => {
  return (
    <AppLayout>
        <CatGalleryContainer />
    </AppLayout>
  );
};