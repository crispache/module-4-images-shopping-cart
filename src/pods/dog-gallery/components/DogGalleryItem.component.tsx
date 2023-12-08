import React from "react";
import { CardComponent } from "@/common";
import { CartContext } from "@/core";
import { PictureInfo } from "../DogGallery.vm";


interface Props {
  image: PictureInfo;
}

export const DogGalleryItem: React.FC<Props> = (props) => {
  const { image } = props;
  const [isSelected, setInfo] = React.useState<boolean>(props.image.isSelected);
  const { cartInfo, dispatchCartActions } = React.useContext(CartContext);

  // TODO: Lógica repetida* se podría reutilizar de alguna forma
  React.useEffect(() => {
    const isCartAdded = cartInfo.some((item) => item.id === image.id);
    setInfo(isCartAdded);
  }, [cartInfo]);

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
