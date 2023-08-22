import css from '../styles.module.css';

export function Foooter() {
  return (
    <footer>
      <small>
        The project was coded by
        <a
          href="https://www.facebook.com/xlapushka"
          target="_blank"
          rel="noopener nofollow noreferrer"
          className={css.a}
        >
          xlapushka
        </a>
        and is
        <a
          href="https://github.com/xlapushka"
          target="_blank"
          rel="noopener nofollow noreferrer"
          className={css.a}
        >
          open-sourced on GitHub.
        </a>
        This product uses the
        <a
          href="https://www.themoviedb.org"
          target="_blank"
          rel="noopener nofollow noreferrer"
          className={css.a}
        >
          TMDB API
        </a>
        but is not endorsed or certified by TMDB.
      </small>
    </footer>
  );
}
