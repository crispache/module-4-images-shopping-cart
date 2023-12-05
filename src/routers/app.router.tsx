import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CatGalleryScene, DogGalleryScene } from "@/scenes";
import { routes } from "./routes";


export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={routes.root} element={<Navigate to={routes.dogGallery } />} />
          <Route path={routes.dogGallery} element={<DogGalleryScene />} />
          <Route path={routes.catGallery} element={<CatGalleryScene />} />
        </Routes>
      </BrowserRouter>
  );
};
