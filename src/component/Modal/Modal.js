import React, { Component } from "react";
import s from "./Modal.module.css";
import { createPortal } from "react-dom";
import ImageGallery from "../ImageGallery/ImageGallery";
const modalContainer = document.createElement("div");
class Modal extends Component {
  componentDidMount() {
    document.body.appendChild(modalContainer);
    window.addEventListener("keydown", this.closeKeyDown);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeKeyDown);
    document.body.style.overflow = "scroll";
  }
  closeKeyDown = (el) => {
    if (el.code === "Escape") {
      this.props.onClose();
    }
  };
  closeBackDrop = (el) => {
    if (el.target === el.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { openImgModal, alt } = this.props;
    return createPortal(
      <div className={s.overlay} onClick={this.closeBackDrop}>
        <div className={s.modal}>
          <img className={s.modal__image} src={openImgModal} alt={alt} />
        </div>
      </div>,
      modalContainer
    );
  }
}

export default Modal;
