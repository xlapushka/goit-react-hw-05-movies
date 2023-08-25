import PropTypes from 'prop-types';

import css from '../styles.module.css';

const MovieCastList = ({ castList }) => {
  
  return (
    <ul className={css.movieCastList}>
      {castList.map(person => {
        const src =
          'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' +
          person.profile_path;

        return (
          <li key={person.id} className={css.movieCastListLi}>
            <img src={src} alt={person.name} width="80px" />
            <div className={css.movieCastListLiDiv}>
              <p>
                <span>{person.name} </span>
              </p>
              <p>in "{person.character}" role</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCastList;

MovieCastList.propTypes = {
  castList: PropTypes.arrayOf(PropTypes.object),
};
