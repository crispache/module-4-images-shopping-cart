import React from "react";
import { GalleryType } from "./gallery.vm";

interface GalleryContextModel {
  gallery: GalleryType;
  setGallery: (gallery: GalleryType) => void;
}

export const GalleryContext =
  React.createContext<GalleryContextModel>(null);
