import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ imgName }) => {
  //   render() {
  return (
    <>
      <ul className={s.gallery}>
        <ImageGalleryItem imgName={imgName} />
      </ul>
    </>
  );
  //   }
};
export default ImageGallery;
