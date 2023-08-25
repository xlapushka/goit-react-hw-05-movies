import PropTypes from 'prop-types';

import css from '../styles.module.css';

const MovieReviewsList = ({ reviewsList }) => {

  return (
    <ul className={css.movieCastList}>
      {reviewsList.map(review => {

        return (
          <li key={review.id} className={css.movieCastListLi}>
            <div className={css.movieCastListLiDiv}>
              <p>
                <span>Author: {review.author}</span>
              </p>
              <p>{ review.content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieReviewsList;

MovieReviewsList.propTypes = {
  reviewsList: PropTypes.arrayOf(PropTypes.object),
};
