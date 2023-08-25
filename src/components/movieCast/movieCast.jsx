import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/loader/loader';

import { getMovieCast } from '../../api/apiMovieCast';
import MovieCastList from '../movieCastList/movieCastList'
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);


  useEffect(() => {
    setLoading(true);

    getMovieCast(movieId)
      .then(resp => {
        setCastList(resp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      <h1>Movie Cast</h1>
      <MovieCastList castList={ castList } />
    </div>
  );
};

export default MovieCast;

MovieCast.propTypes = {
  movieId: PropTypes.string,
};
