import React, { Component } from "react";
import { nanoid } from "nanoid";

class ImageGalleryItem extends Component {
  state = {
    imgArr: [],
    loading: false,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgName !== this.props.imgName) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.props.imgName}&page=${this.state.page}&per_page=12&key=23937697-9e9e797303b592bb126e18e87`
      )
        .then((response) => response.json())
        .then((img) => this.setState({ img }))
        // this.setState({ imgArr: [{ ...img.hits }] })
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { imgArr } = this.state;
    return (
      <>
        {this.loading && <p>Загрузка...</p>}
        {imgArr.length > 0 &&
          this.img.hits.map((el) => (
            <li className="gallery-item" key={el.id}>
              <img src={el.webformatURL} alt={el.user} />
            </li>
          ))}
      </>
    );
  }
}

export default ImageGalleryItem;
