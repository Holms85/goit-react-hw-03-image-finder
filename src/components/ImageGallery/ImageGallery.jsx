// import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import preLoader from 'components/Loader/Loader';
import css from 'components/ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => (
  <ul className={css.ImageGallery}>
    {images.map(({ id, tags, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        tags={tags}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        onClick={onClick}
      />
    ))}
  </ul>
);

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
