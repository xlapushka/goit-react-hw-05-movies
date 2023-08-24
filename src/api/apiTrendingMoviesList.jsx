

export async function getTrendingMoviesList() {
  const fetch = require('node-fetch');

  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
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
    const trendingMoviesList = json.results;

    return trendingMoviesList;
  } catch (err) {
    return console.error('error:' + err);
  }
}; 



