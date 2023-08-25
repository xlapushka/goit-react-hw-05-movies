import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from '../styles.module.css';


const SearchMovie = ({ changeKeyWord }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyWord, setKeyWord] = useState(searchParams.get('query') ?? '');

  const handleChange = event => {
    setKeyWord(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: `${keyWord.trim()}` })
    changeKeyWord(keyWord.trim());
  };

  useEffect(() => {
    changeKeyWord(keyWord);
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
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
