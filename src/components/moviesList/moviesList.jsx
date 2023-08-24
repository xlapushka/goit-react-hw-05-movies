import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import css from '../styles.module.css';


const MoviesList = ({ moviesList }) => {
  return (
    <ul >
      {moviesList.map(movie => {
        return (
          <Link
            key={movie.id}
            to={`${movie.id}`}
            className={css.list}
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
