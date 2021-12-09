import React, { Component } from "react";

const Button = ({ nextPage }) => {
  return (
    <>
      <button onClick={nextPage}>Load more</button>
    </>
  );
};
export default Button;
