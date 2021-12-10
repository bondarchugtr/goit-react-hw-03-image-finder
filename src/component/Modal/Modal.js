import React, { Component } from "react";
import s from "./Modal.module.css";
import { createPortal } from "react-dom";
const modalContainer = document.createElement("div");
class Modal extends Component {
  componentDidMount() {
    document.body.appendChild(modalContainer);
    window.addEventListener("keydown", this.closeKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeKeyDown);
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
    return createPortal(
      <div className={s.overlay} onClick={this.closeBackDrop}>
        <div className={s.modal}>
          <img
            className={s.modal__image}
            src={this.props.largeImageURL}
            alt={this.props.alt}
          />
        </div>
      </div>,
      modalContainer
    );
  }
}

export default Modal;
