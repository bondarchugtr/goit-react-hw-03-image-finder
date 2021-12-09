import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ imgName, id, user, webformatURL }) => {
  //   render() {
  return (
    <>
      <ul className="gallery">
        <ImageGalleryItem
          imgName={imgName}
          key={id}
          user={user}
          webformatURL={webformatURL}
        />
      </ul>
    </>
  );
  //   }
};
export default ImageGallery;
