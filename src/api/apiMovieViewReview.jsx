import PropTypes from 'prop-types';

export async function getMovieReviews(movieId) {
  const fetch = require('node-fetch');

  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzEwMmU2NmJiY2ZkMmYwMmRlNTY3YzJiMDQxODcxMiIsInN1YiI6IjY0ZTQ5M2FiYzYxM2NlMDEyY2MzNDc4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zwn48HYRW6JBDoSyF18YL5jL3b-LREwgJBhEoBSNLEo',
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();

    return json.results;
  } catch (err) {
    return console.error('error:' + err);
  }
}

getMovieReviews.propTypes = {
  movieId: PropTypes.string,
};
