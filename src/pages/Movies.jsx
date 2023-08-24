import React, { useState, useEffect } from 'react';

import Notiflix from 'notiflix';

import Loader from 'components/loader/loader';
import SearchMovie from 'components/searchMovie/searchMovie';
import MoviesList from 'components/moviesList/moviesList';

import { getMoviesList } from '../api/apiMoviesList';


const Movies = () => {
  const [keyWord, setKeyWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (keyWord === '') {
      Notiflix.Notify.warning('Please enter something to search!');
      setMoviesList([]);
      return;
    } else {
      setLoading(true);

      getMoviesList({ keyWord })
        .then(({ moviesList, total }) => {
          if (total === 0) {
            setMoviesList([]);
            Notiflix.Notify.failure('Sorry, there are no movies matching your search query. Please try again.');
          } else {
            setMoviesList(moviesList);
          }
        })
        .finally(() => { 
          setLoading(false);
        });
    }
  }, [keyWord]);

  const changeKeyWord = keyWord => {
    setKeyWord(keyWord);
  };

  return (
    <div>
      <SearchMovie changeKeyWord={changeKeyWord} />
      {loading && !moviesList && <Loader />}
      {!loading && <MoviesList moviesList={moviesList} />}
    </div>
  );
};

export default Movies;
