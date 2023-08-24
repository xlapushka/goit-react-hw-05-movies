import PropTypes from 'prop-types';

export async function getMovieInfo(movieId) {
  const fetch = require('node-fetch');

  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
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

    const poster = json.poster_path;
    const title = json.title;
    const vote_average = json.vote_average;
    const vote_count = json.vote_count;
    const year = json.release_date;
    const overview = json.overview;
    const genres = json.genres;

    // console.log('movieInfo', json.genres);

    return { poster, title, vote_average, vote_count, year, overview, genres };
  } catch (err) {
    return console.error('error:' + err);
  }
}

getMovieInfo.propTypes = {
  movieId: PropTypes.string,
};
