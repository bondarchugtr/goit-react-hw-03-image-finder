import React, { Component } from "react";
import "modern-normalize/modern-normalize.css";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import Search from "./component/Searchbar/Searchbar";
class App extends Component {
  state = {
    imgName: "",
  };
  handleFormSubmit = (imgName) => {
    this.setState({ imgName });
  };
  render() {
    return (
      <>
        <Search img={this.handleFormSubmit} />
        <ImageGallery imgName={this.state.imgName} />
      </>
    );
  }
}

export default App;
