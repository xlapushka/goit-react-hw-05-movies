import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import Loader from 'components/loader/loader';
import { getMovieCast } from '../../api/apiMovieCast';
import MovieCastList from '../movieCastList/movieCastList'


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
      <h1>Movie Cast</h1>

      {loading && <Loader />}
      <MovieCastList castList={castList} />
      {castList.length === 0 && !loading && (
        <p> Sorry, there is no any information yet.. </p>
      )}
    </div>
  );
};

export default MovieCast;

MovieCast.propTypes = {
  movieId: PropTypes.string,
};
