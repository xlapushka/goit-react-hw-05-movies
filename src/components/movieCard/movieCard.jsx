import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import css from '../styles.module.css';

import { useLocation } from 'react-router-dom';

import { useRef } from 'react';

const MovieCard = ({ poster, title, year, voteAverage, voteCount, overview, genres, movieId}) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
 
  
  return (
    <div className={css.movieCard}>
      <div className={css.movieCardFlex2}>
        <h1>
          {title} ({year})
        </h1>
        <Link
          to={backLinkLocationRef.current}
          className={css.link}
        >
          <button type="button" className={css.headerBtnGoBack}>
            ⬅️ Go Back
          </button>
        </Link>
      </div>

      <div className={css.movieCardFlex}>
        <img src={poster} width="200px" alt="movie poster" />
        <div className={css.movieCardParams}>
          <p>
            <span>Vote average: </span> {voteAverage}
          </p>
          <p>
            <span>Vote count: </span> {voteCount}
          </p>
          <p>
            <span>Genres: </span> {genres}
          </p>

          <div>
            <br></br>
            <p>
              <span>Additional Information:</span>
            </p>
            <ul className={css.movieCardLinkList}>
              <Link to={'cast'}>
                <li className={css.movieCardLinkListA}>Cast</li>
              </Link>
              <Link to={'reviews'}>
                <li className={css.movieCardLinkListA}>Reviews</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <p>
        <span>Overview:</span> {overview}
      </p>
    </div>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  voteAverage: PropTypes.number,
  voteCount: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
  movieId: PropTypes.string,
};
