import React, { Component } from "react";
import { nanoid } from "nanoid";
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
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              onChange={this.searchPhoto}
              className="input"
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
