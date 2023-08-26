import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Movie = lazy(() => import('../pages/Movie'));
const Layout = lazy(() => import('../components/layout/layout'));
const MovieCast = lazy(() => import('../components/movieCast/movieCast'));
const MovieReviews = lazy(() => import('../components/movieReviews/movieReviews'));


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
