import React from "react";
import { GalleryContext } from "./gallery.context";
import { GalleryType } from "./gallery.vm";

interface Props {
  children: React.ReactNode;
}

export const GalleryProvider: React.FC<Props> = ({ children }) => {
  const [gallery, setGallery] = React.useState<GalleryType>("dog");

  return (
    <>
      <GalleryContext.Provider
        value={{
          gallery,
          setGallery,
        }}
      >
        {children}
      </GalleryContext.Provider>
    </>
  );
};
