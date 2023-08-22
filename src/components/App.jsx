import { Route, Routes, NavLink } from 'react-router-dom';

import css from './styles.module.css';

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <ul className={css.headerNav}>
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
          <Route path="/" element={<div>HomePage</div>} />
          <Route path="/movies" element={<div>Movies</div>} />
        </Routes>
      </section>
    </div>
  );
};
