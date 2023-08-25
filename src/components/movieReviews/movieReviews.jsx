import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/loader/loader';

import { getMovieReviews } from '../../api/apiMovieViewReview';
import MovieReviewsList from '../movieReviewsList/movieReviewsList'
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);


  useEffect(() => {
    setLoading(true);

    getMovieReviews(movieId)
      .then(resp => {
        setReviewsList(resp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      <h1>Movie Reviews</h1>
      {reviewsList.length !== 0 && (
        <MovieReviewsList reviewsList={reviewsList} />
      )}
      {reviewsList.length === 0 && (
        <p> Sorry, there are no reviews yet.. </p>
      )}
    </div>
  );
};

export default MovieReviews;

MovieReviews.propTypes = {
  movieId: PropTypes.string,
};
