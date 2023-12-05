import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CatsListScene, DogsListScene } from "@/scenes";
import { routes } from "./routes";


export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={routes.root} element={<Navigate to={routes.dogsList } />} />
          <Route path={routes.dogsList} element={<DogsListScene />} />
          <Route path={routes.catsList} element={<CatsListScene />} />
        </Routes>
      </BrowserRouter>
  );
};
