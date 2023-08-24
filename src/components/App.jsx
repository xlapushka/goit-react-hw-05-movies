// import React, { useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import css from './styles.module.css';

import { Foooter } from './footer/footer';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Movie from '../pages/Movie';
import { ReactComponent as Logo } from 'images/logo.svg';

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <ul className={css.headerNav}>
          <li>
            <NavLink to="https://www.themoviedb.org">
              <Logo className={css.logo} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={css.link}>
              <button
                type="button"
                className={`${css.headerNavBtn} ${css.headerNavBtnLeft}`}
              >
                Home
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.link}>
              <button type="button" className={css.headerNavBtn}>
                Movies
              </button>
            </NavLink>
          </li>
        </ul>
      </header>

      <section className={css.section}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route index element={<Movie />} /> */}
          <Route path="/movies" element={<Movies/>}>
            <Route path="/movies/:movieId" element={<Movie />}>
              <Route path="/movies/:movieId/cast" element={<div>Movies</div>} />
              <Route
                path="/movies/:movieId/reviews"
                element={<div>Movies</div>}
              />
            </Route>
          </Route>
        </Routes>
      </section>

      <Foooter />
    </div>
  );
};


