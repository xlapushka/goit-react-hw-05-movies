

export async function getMoviesList({ keyWord }) {

  const fetch = require('node-fetch');

  const url = `https://api.themoviedb.org/3/search/movie?query=${keyWord}&include_adult=false&language=en-US&page=1`;
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
     const moviesList = json.results;
     const total = json.total_results;

      // console.log('moviesList', json.total_results);

     return { moviesList, total };
   } catch (err) {
     
     return console.error('error:' + err);
   }
}


