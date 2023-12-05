import React from "react";
import { AppLayout } from "@/layouts";
import { DogsListContainer } from "@/pods";

export const DogsListScene: React.FC = () => {
  return (
    <AppLayout>
        <DogsListContainer />
    </AppLayout>
  );
};