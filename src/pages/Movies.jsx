import React, { useState, useEffect } from 'react';

import Notiflix from 'notiflix';

import Loader from 'components/loader/loader';
import SearchMovie from 'components/searchMovie/searchMovie';
import MoviesListBySearch from 'components/moviesListBySearch/moviesListBySearch';

import { getMoviesList } from '../api/apiMoviesList';
// import { useLocation } from 'react-router-dom';

const Movies = () => {
  const [keyWord, setKeyWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (keyWord === '') {
      // Notiflix.Notify.warning('Please enter something to search!');
      setMoviesList([]);
      return;
    } else {
      setLoading(true);

      getMoviesList({ keyWord })
        .then(({ moviesList, total }) => {
          if (total === 0) {
            setMoviesList([]);
            Notiflix.Notify.failure(
              'Sorry, there are no movies matching your search query. Please try again.'
            );
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
    // ========= забрати з query було б простійше, звісно, але вже понапідставляла палок)) =======
    // console.log(searchParams.get('query'), 'query');
    if (keyWord === ' ') {
      console.log('empty', keyWord);
    }
    setKeyWord(keyWord);
  };

  return (
    <div>
      <SearchMovie changeKeyWord={changeKeyWord} />
      {loading && <Loader />}
      {!loading && <MoviesListBySearch moviesList={moviesList} />}
    </div>
  );
};

export default Movies;
