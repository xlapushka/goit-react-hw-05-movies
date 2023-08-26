import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import css from '../styles.module.css';

import { useLocation } from 'react-router-dom';


const MoviesListBySearch = ({ moviesList }) => {

const location = useLocation();
  
  return (
    <ul >
      {moviesList.map(movie => {
        return (
          <Link
            key={movie.id}
            to={`${movie.id}`}
            className={css.list}
            state={{from: location}}
          >
            <li className={css.movieListLi}>{movie.original_title}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MoviesListBySearch;

MoviesListBySearch.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object),
};
