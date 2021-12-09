import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ imgName }) => {
  //   render() {
  return (
    <>
      <ul className="gallery">
        <ImageGalleryItem imgName={imgName} />
      </ul>
    </>
  );
  //   }
};
export default ImageGallery;
