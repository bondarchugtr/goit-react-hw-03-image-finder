import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
import container from "../Container.module.css";
import Api from "../ApiService/ApiService";
import Button from "../Button/Button";
import ThreeDots from "../Loader/Loader";
import Modal from "../Modal/Modal";

class ImageGallery extends Component {
  state = {
    imgArr: [],
    page: 1,
    loading: false,
    isOpen: false,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { imgName } = this.props;
    if (prevProps.imgName !== imgName || prevState.page !== page) {
      this.setState({ loading: true });
      Api(this.props.imgName, this.state.page)
        .then((imgArr) =>
          this.setState({
            imgArr: [...this.state.imgArr, ...imgArr.hits],
          })
        )
        .finally(() => this.setState({ loading: false }));
    }
    if (prevProps.imgName !== imgName) {
      this.clearOnNewRequest();
    }
  }
  clearOnNewRequest = () => {
    this.setState({
      page: 1,
      imgArr: [],
    });
  };

  buttonOnclickNextPage = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });

    this.scrollTop();
  };

  onClickImgToggleModal = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  imgModalWriting = (largeImageURL) => {
    this.onClickImgToggleModal();
    this.setState({ largeImageURL: largeImageURL });
  };

  scrollTop = () => {
    setTimeout(
      () =>
        window.scrollTo({
          top: window.pageYOffset + document.documentElement.clientHeight,
          behavior: "smooth",
          block: "end",
        }),
      1000
    );
  };

  render() {
    const { imgArr, isOpen, largeImageURL, loading } = this.state;

    return (
      <>
        <div className={container.container}>
          {imgArr.length > 0 && (
            <ul className={s.gallery}>
              {imgArr.map((img) => (
                <ImageGalleryItem
                  key={img.id}
                  src={img.webformatURL}
                  alt={img.tags}
                  onClick={() => this.imgModalWriting(img.largeImageURL)}
                />
              ))}
            </ul>
          )}
        </div>

        {imgArr.length > 0 && !loading && (
          <Button nextPage={this.buttonOnclickNextPage} />
        )}
        {loading && <ThreeDots />}

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
export default ImageGallery;
