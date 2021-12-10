import React, { Component } from "react";
import { nanoid } from "nanoid";
import Button from "../Button/Button";
import ThreeDots from "../Loader/Loader";
import Modal from "../Modal/Modal";
import s from "./ImageGalleryItem.module.css";
class ImageGalleryItem extends Component {
  state = {
    imgArr: [],
    loading: false,
    page: 1,
    largeImageURL: "",
    isOpen: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { imgName } = this.props;
    if (prevProps.imgName !== imgName || prevState.page !== page) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${imgName}&page=${page}&per_page=12&key=23937697-9e9e797303b592bb126e18e87`
      )
        .then((response) => response.json())
        .then((imgArr) =>
          this.setState({
            imgArr: [...this.state.imgArr, ...imgArr.hits],
          })
        )
        .finally(() => this.setState({ loading: false }));
    }
  }

  buttonOnclickNextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  test = () => {
    this.setState({ largeImageURL: this.state.imgArr.largeImageURL });
    console.log(this.largeImageURL);
  };
  onClickImgToggleModal = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      largeImageURL: this.state.imgArr[1],
    }));
  };

  render() {
    const { imgArr, isOpen } = this.state;
    return (
      <>
        <div className={s.img__block}>
          {imgArr.length > 0 &&
            imgArr.map((el) => (
              <li className={s.gallery__item} key={el.id}>
                <img
                  onClick={this.onClickImgToggleModal}
                  src={el.webformatURL}
                  alt={el.user}
                  width="360px"
                  height="280px"
                />
              </li>
            ))}
        </div>
        {imgArr.length > 0 && <Button nextPage={this.buttonOnclickNextPage} />}
        {this.state.loading && <ThreeDots />}
        {isOpen && <Modal onClose={this.onClickImgToggleModal} />}
      </>
    );
  }
}

export default ImageGalleryItem;
