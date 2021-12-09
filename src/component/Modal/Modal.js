import React, { Component } from "react";
import s from "./Modal.module.css";
// import { createPortal } from "react-dom";
class Modal extends Component {
  render() {
    return (
      <div>
        <div className={s.overlay}>
          <div className={s.modal}>
            <img
              className={s.modal__image}
              src={this.props.src}
              alt={this.props.alt}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
