import React, { useState, useEffect } from 'react';

import { Loader } from '../components/loader/loader';
// import { Link } from 'react-router-dom';

// import css from '../components/styles.module.css';

import { getTrendingMovies } from '../api/apiMovieList';
import { TrendingMoviesList } from 'components/trendingMovies/trendingMovies';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    setLoading(true);

    getTrendingMovies()
      .then(trendingMoviesList => {
        setTrendingMovies(trendingMoviesList);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <div>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <TrendingMoviesList trendingMovies={trendingMovies} />
    </div>
  );
};

export default Home;
