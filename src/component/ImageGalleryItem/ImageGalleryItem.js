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
    largeImageURL: null,
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

  onClickImgToggleModal = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  test = (el) => {
    this.onClickImgToggleModal();
    this.setState({ largeImageURL: el.target.dataset.src });
  };

  render() {
    const { imgArr, isOpen, largeImageURL } = this.state;
    console.log(largeImageURL);
    return (
      <>
        <div className={s.img__block}>
          {imgArr.length > 0 &&
            imgArr.map((el) => (
              <li key={el.id} className={s.gallery__item}>
                <img
                  className={s.gallery__img}
                  onClick={this.test}
                  data-src={el.largeImageURL}
                  id={el.id}
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
        {isOpen && (
          <Modal
            onClose={this.onClickImgToggleModal}
            openImgModal={largeImageURL}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
