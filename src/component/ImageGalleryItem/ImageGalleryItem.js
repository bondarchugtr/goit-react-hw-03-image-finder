import React from "react";
import s from "./ImageGalleryItem.module.css";
const ImageGalleryItem = ({ id, src, user, onClick }) => {
  return (
    <>
      <li className={s.gallery__item}>
        <img
          className={s.gallery__img}
          onClick={onClick}
          id={id}
          src={src}
          alt={user}
          width="380px"
          height="280px"
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
