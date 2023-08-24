import PropTypes from 'prop-types';

import css from '../styles.module.css';

const MovieCard = ({ poster, title, year, voteAverage, voteCount, overview, genres}) => {

  return (
    <div className={css.movieCard}>
      <h1>
        {title} ({year})
      </h1>

        <div className={css.movieCardFlex}>
          <img src={poster} width="200px" alt="movie poster" />
        <div className={ css.movieCardParams}>
            <p><span>Vote average:  </span> {voteAverage}</p>
            <p><span>Vote count:  </span> {voteCount}</p>
            <p><span>Genres:  </span> {genres}</p>   

          <div>
              <br></br>
              <p><span>Additional Information:</span></p>
              <ul>
                <li>Cast</li>
                <li>Reviews</li>
                </ul>
            </div>

          </div>
        </div>
      
      <p><span>Overview:</span> {overview}</p>
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
};
