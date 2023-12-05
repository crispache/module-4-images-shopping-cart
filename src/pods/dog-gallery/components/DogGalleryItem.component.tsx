import React from "react";
import { CardComponent } from "@/common";
import { PictureInfo } from "../DogGallery.vm";

interface Props {
  image: PictureInfo;
}

export const DogGalleryItem: React.FC<Props> = (props) => {
  const { image } = props;

  return (
    <>
      <CardComponent title={image.title} imgUrl={image.picUrl} />
    </>
  );
};
