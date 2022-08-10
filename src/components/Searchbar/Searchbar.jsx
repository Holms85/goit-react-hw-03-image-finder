import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import css from 'components/Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = { onSubmit: PropTypes.func };

  state = {
    findValue: '',
  };

  handleInputChange = event => {
    this.setState({ findValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.findValue.trim() === '') {
      toast.error('Type something to find');
      return;
    }

    this.props.onSubmit(this.state.findValue);
    this.setState({ findValue: '' });
  };

  render() {
    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={css.SearchFormBtn}>
                    <span className={css.SearchFormBtnLabel}>Search</span>
          </button>

          <input
                    className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.findValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;