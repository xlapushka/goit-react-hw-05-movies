import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from '../styles.module.css';

import { ReactComponent as Logo } from 'images/logo.svg';
import Footer from '../footer/footer';

const Layout = () => {
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
      <main>
        <section className={css.section}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
