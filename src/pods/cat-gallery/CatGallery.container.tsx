import React from "react";
import { CatGallery } from "./CatGallery.component";
import { CATS_IMAGES_MOCKS } from "./mocks";


export const CatGalleryContainer: React.FC = () => {
    return (
    <>
        <CatGallery images={CATS_IMAGES_MOCKS}/>
    </>)
}