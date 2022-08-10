import React from 'react';
import PropTypes from 'prop-types';
import 'components/Button/Button.module.css';

export default function Button({ onLoadMore }) {
  return (
    <button type="button" onClick={onLoadMore} className="Button">
      Load more
    </button>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};