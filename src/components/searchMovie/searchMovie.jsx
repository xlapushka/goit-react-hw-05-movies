import React, { useState } from 'react';
import PropTypes from 'prop-types';

import css from '../styles.module.css';


const SearchMovie = ({ changeKeyWord }) => {
  const [keyWord, setKeyWord] = useState('');

  const handleChange = event => {
    setKeyWord(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    changeKeyWord(keyWord.trim());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          value={keyWord}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
          onChange={handleChange}
        />

        <button type="submit" className={css.submitBtn}>
          <span>Search</span>
        </button>
      </form>
    </>
  );
};

SearchMovie.propTypes = {
  changeKeyWord: PropTypes.func.isRequired,
};

export default SearchMovie
