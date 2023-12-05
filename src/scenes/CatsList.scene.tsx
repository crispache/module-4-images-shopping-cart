import React from "react";
import { AppLayout } from "@/layouts";
import { CatsListContainer } from "@/pods";

export const CatsListScene: React.FC = () => {
  return (
    <AppLayout>
        <CatsListContainer />
    </AppLayout>
  );
};