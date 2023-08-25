import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import css from '../styles.module.css';

import { useLocation } from 'react-router-dom';


const MoviesList = ({ moviesList }) => {

const location = useLocation();
// console.log(location);
  
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

export default MoviesList;

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object),
};
