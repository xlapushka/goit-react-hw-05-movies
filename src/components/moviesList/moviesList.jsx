import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import css from '../styles.module.css';


const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul>
      {moviesList.map(movie => {
        return (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            className={css.list}
            state={{ from: location }}
          >
            <li className={css.movieListLi}>{movie.original_title}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object),
};
