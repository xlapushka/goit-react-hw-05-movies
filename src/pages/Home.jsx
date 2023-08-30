import React, { useState, useEffect } from 'react';

import Loader from '../components/loader/loader';
import MoviesList from 'components/moviesList/moviesList';
import { getTrendingMoviesList } from '../api/apiTrendingMoviesList';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);

  useEffect(() => {
    setLoading(true);

    getTrendingMoviesList()
      .then(trendingMoviesList => {
        setTrendingMoviesList(trendingMoviesList);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <MoviesList moviesList={trendingMoviesList} />
    </div>
  );
};

export default Home;
