import React from "react";
import { DogGallery } from "./DogGallery.component";
import { DOGS_IMAGES_MOCKS } from "./mocks";


export const DogGalleryContainer: React.FC = () => {
    return (
    <>
        <DogGallery images={DOGS_IMAGES_MOCKS}/>
    </>)
}