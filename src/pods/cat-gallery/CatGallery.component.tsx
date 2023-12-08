import React from "react";
import { CatGalleryItem, CatGalleryHeader } from "./components";
import { PictureInfo } from "./CatGallery.vm";

interface Props {
  images: PictureInfo[];
}

export const CatGallery: React.FC<Props> = (props) => {
  const { images } = props;

  return (
    <>
     {/*  <CatGalleryHeader /> */}
      <div className="list-card-image">
        {images.map((image) => (
          <CatGalleryItem key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};
