
import { Link } from 'react-router-dom';

import css from '../styles.module.css';

import PropTypes from 'prop-types';


export const TrendingMoviesList = ({ trendingMovies }) => { 
  return (
    <ul>
      {trendingMovies.map(movie => {
        return (
          <Link
            key={movie.original_title}
            to={`${movie.original_title}`}
            className={css.list}
          >
            <li className={css.movieListLi}>{movie.original_title}</li>
          </Link>
        );
      })}
    </ul>
  );
}

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
