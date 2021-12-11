import React, { Component } from "react";
import { ReactComponent as Logo } from "../../logo.svg";
import s from "./Searchbar.module.css";
class Search extends Component {
  state = {
    imgName: "",
  };
  searchPhoto = (e) => {
    this.setState({ imgName: e.target.value.toLowerCase() });
  };

  handleSubmit = (el) => {
    const { imgName } = this.state;
    el.preventDefault();
    if (imgName.trim() === "") {
      return;
    }
    this.props.img(imgName);
    this.setState({ imgName: "" });
  };
  render() {
    const { imgName } = this.state;

    return (
      <>
        <header className={s.form__block}>
          <form className={s.form} onSubmit={this.handleSubmit}>
            <button className={s.button__submit} type="submit">
              <span>
                <Logo width="30px" height="30px" />
              </span>
              <span className={s.button__label}>Search</span>
            </button>
            <input
              onChange={this.searchPhoto}
              className={s.input}
              type="text"
              placeholder="Search images and photos"
              value={imgName}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Search;
