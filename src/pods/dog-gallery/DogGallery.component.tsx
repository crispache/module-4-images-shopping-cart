import React from "react";
import { DogGalleryItem, DogGalleryHeader } from "./components";
import { PictureInfo } from "./DogGallery.vm";

interface Props {
  images: PictureInfo[];
}

export const DogGallery: React.FC<Props> = (props) => {
  const { images } = props;

  return (
    <>
      {/* <DogGalleryHeader /> */}
      <div className="list-card-image">
        {images.map((image) => (
          <DogGalleryItem key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};
