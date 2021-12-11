import React, { Component } from "react";
import s from "./Button.module.css";
const Button = ({ nextPage }) => {
  return (
    <div className={s.b}>
      <button className={s.button} onClick={nextPage}>
        Load more
      </button>
    </div>
  );
};
export default Button;
