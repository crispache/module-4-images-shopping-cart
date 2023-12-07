import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { CartProvider, GalleryProvider } from "@/core";
import { CatGalleryScene, DogGalleryScene } from "@/scenes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <GalleryProvider>
          <Routes>
            <Route
              path={routes.root}
              element={<Navigate to={routes.dogGallery} />}
            />
            <Route path={routes.dogGallery} element={<DogGalleryScene />} />
            <Route path={routes.catGallery} element={<CatGalleryScene />} />
            <Route path="*" element={<Navigate to={routes.dogGallery} />} />
          </Routes>
        </GalleryProvider>
      </CartProvider>
    </BrowserRouter>
  );
};
