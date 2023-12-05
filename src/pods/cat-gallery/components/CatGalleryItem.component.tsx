import React from "react";
import { CardComponent } from "@/common";
import { PictureInfo } from "../CatGallery.vm";

interface Props {
  image: PictureInfo;
}

export const CatGalleryItem: React.FC<Props> = (props) => {
  const { image } = props;

  return (
    <>
      <CardComponent title={image.title} imgUrl={image.picUrl} />
    </>
  );
};
