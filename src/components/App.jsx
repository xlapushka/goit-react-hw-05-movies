import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Movie from '../pages/Movie';
import Layout  from '../components/layout/layout';

export const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId" element={<Movie />}>
                <Route
                  path="/movies/:movieId/cast"
                  element={<div>Movies Cast</div>}
                />
                <Route
                  path="/movies/:movieId/reviews"
                  element={<div>Movies Reviews</div>}
                />
              </Route>
          </Route>
        </Routes>
  );
};
