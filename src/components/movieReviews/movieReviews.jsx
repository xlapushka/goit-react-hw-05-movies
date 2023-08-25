import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import css from '../components/styles.module.css';

import Loader from 'components/loader/loader';

import { getMovieReviews } from '../../api/apiMovieViewReview';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  // const [poster, setPoster] = useState();

  useEffect(() => {
    setLoading(true);

    getMovieReviews(movieId)
      .then(resp => {
        console.log(resp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      <p> Movie Reviews Component</p>
    </div>
  );
};

export default MovieReviews;

MovieReviews.propTypes = {
  movieId: PropTypes.string,
};
