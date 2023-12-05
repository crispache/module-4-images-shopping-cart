import React from "react";
import { AppLayout } from "@/layouts";
import { DogGalleryContainer } from "@/pods";

export const DogsListScene: React.FC = () => {
  return (
    <AppLayout>
        <DogGalleryContainer />
    </AppLayout>
  );
};