import React, { useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import css from './styles.module.css';

import { Foooter } from './footer/footer';
import Home from '../pages/Home';

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <ul className={css.headerNav}>
          <li> 
            <NavLink to="/"><img src="../../public/logo/logo.svg" alt='logo' weight="100px"/></NavLink>
          </li>
          <li>
            <NavLink to="/" className={css.link}>
              <button type="button" className={css.headerNavBtn}>
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
          <Route path="/movies" element={<div>Movies</div>}>
            <Route path="/movies/:movieId" element={<div>Movies</div>}>
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

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

// 1c102e66bbcfd2f02de567c2b0418712
