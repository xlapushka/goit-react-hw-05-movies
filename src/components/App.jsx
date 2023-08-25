import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Movie from '../pages/Movie';
import Layout from './layout/layout';
import MovieCast from './movieCast/movieCast';
import MovieReviews from './movieReviews/movieReviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
