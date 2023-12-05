import React from "react";
import { AppLayout } from "@/layouts";
import { DogGalleryContainer } from "@/pods";

export const DogGalleryScene: React.FC = () => {
  return (
    <AppLayout>
        <DogGalleryContainer />
    </AppLayout>
  );
};