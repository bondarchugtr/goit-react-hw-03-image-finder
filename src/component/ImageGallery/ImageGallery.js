import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
import container from "../Container.module.css";
const ImageGallery = ({ imgName }) => {
  return (
    <div className={container.container}>
      <ul className={s.gallery}>
        <ImageGalleryItem imgName={imgName} />
      </ul>
    </div>
  );
};
export default ImageGallery;