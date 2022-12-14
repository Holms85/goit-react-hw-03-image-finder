import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from 'components/Modal/Modal.module.css';

class Modal extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    onCloseModal: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleCloseModal = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { src, alt } = this.props;

    return (
      <div className={css.Overlay} onClick={this.handleCloseModal}>
        <div className={css.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;