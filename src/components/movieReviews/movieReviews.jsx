import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import Loader from 'components/loader/loader';
import { getMovieReviews } from '../../api/apiMovieViewReview';
import MovieReviewsList from '../movieReviewsList/movieReviewsList'


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

      <h1>Movie Reviews</h1>
      {loading && <Loader />}
      {reviewsList.length !== 0 && (
        <MovieReviewsList reviewsList={reviewsList} />
      )}
      {reviewsList.length === 0 && !loading && <p> Sorry, there are no reviews yet.. </p>}
    </div>
  );
};

export default MovieReviews;

MovieReviews.propTypes = {
  movieId: PropTypes.string,
};
