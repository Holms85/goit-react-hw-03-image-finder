import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Button/Button.module.css';

export default function Button({ onLoadMore }) {
  return (
    <button type="button" onClick={onLoadMore} className={css.Button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};