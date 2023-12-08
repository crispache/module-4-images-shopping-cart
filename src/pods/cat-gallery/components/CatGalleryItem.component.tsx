import React from "react";
import { CardComponent } from "@/common";
import { CartContext } from "@/core";
import { PictureInfo } from "../CatGallery.vm";

interface Props {
  image: PictureInfo;
}

export const CatGalleryItem: React.FC<Props> = (props) => {
  const { image } = props;
  const [isSelected, setInfo] = React.useState<boolean>(props.image.isSelected);
  const { cartProducts, dispatchCartActions } = React.useContext(CartContext);

  React.useEffect(() => {
    const isCartAdded = cartProducts.some((item) => item.id === image.id);
    setInfo(isCartAdded);
  }, [cartProducts]);

  const onChangeCheck = (isChecked: boolean) => {
    setInfo(isChecked);

    if (isChecked) {
      dispatchCartActions({ type: "add", payload: image });
    }

    if (!isChecked) {
      dispatchCartActions({ type: "delete", payload: image });
    }
  };

  return (
    <>
       <CardComponent
        title={image.title}
        imgUrl={image.picUrl}
        isChecked={isSelected}
        onChangeCheck={onChangeCheck}
      />
    </>
  );
};
