import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import imagesAPI from './components/Service/getAPI';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import PreLoader from 'components/Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    findValue: '',
    pageNumber: 1,
    images: [],
    status: 'idle',
    error: null,
    showModal: false,
    largeImageURL: '',
    imageAlt: '',
  };

  handleFormSubmit = findValue => {
    this.setState({
      findValue: findValue,
      pageNumber: 1,
      images: [],
    });
  };

  onMap = array => {
  return array.map(
    ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
        tags,
      webformatURL,
      largeImageURL,      
    })
  );
};

  componentDidUpdate(prevProps, prevState) {
    const prevFindValue = prevState.findValue;
    const nextFindValue = this.state.findValue;

    if (prevFindValue !== nextFindValue) {
      this.setState({ status: 'pending' });
      this.getImages();
    }

    if (prevState.pageNumber !== this.state.pageNumber) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
      // preLoader();
      this.getImages();
    }
  }

  getImages = () => {
    const { findValue, pageNumber } = this.state;
    this.setState({ status: 'pending' });
    imagesAPI
      .fetchImages(findValue, pageNumber)
      .then(res =>
        this.setState(prevState => ({
          images: [...prevState.images, ...this.onMap(res)],
          status: 'resolved',
        }))
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  onOpenModal = (url, alt) => {
    this.setState({ largeImageURL: url, imageAlt: alt });

    this.modalToggle();
  };
  handleImageClick = (imageURL, imageALT) => {
    this.props.onClick(imageURL, imageALT);
  };

  modalToggle = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { status, error, images, largeImageURL, imageAlt, showModal } =
      this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          <ImageGallery
            status={status}
            error={error}
            images={images}
            onClick={this.onOpenModal}
          />
        )}
        {status === 'pending' && <PreLoader />}
        {images.length > 0 && <Button onLoadMore={this.onLoadMore} />}
        {showModal && (
          <Modal
            src={largeImageURL}
            alt={imageAlt}
            onCloseModal={this.modalToggle}
          />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
