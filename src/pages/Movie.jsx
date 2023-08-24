import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/loader/loader';
import MovieCard from 'components/movieCard/movieCard';

import { getMovieInfo } from '../api/apiMovieInfo';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  const [poster, setPoster] = useState();
  const [title, setTitle] = useState();
  const [year, setYear] = useState();
  const [voteAverage, setVoteAverage] = useState();
  const [voteCount, setVoteCount] = useState();
  const [overview, setOverview] = useState();
  const [genres, setGenres] = useState();

  useEffect(() => {
    setLoading(true);

    getMovieInfo(movieId)
      .then(
        ({
          poster,
          title,
          year,
          vote_average,
          vote_count,
          overview,
          genres,
        }) => {
          setPoster(
            'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' + poster
          );
          setTitle(title);
          setVoteAverage(vote_average);
          setVoteCount(vote_count);
          setYear(year.slice(0, 4));
          setVoteAverage(vote_average);
          setOverview(vote_count);
          setOverview(overview);
          setGenres(genres.map(genre => genre.name).join(', '));
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      <MovieCard
        poster={poster}
        title={title}
        year={year}
        voteAverage={voteAverage}
        voteCount={voteCount}
        overview={overview}
        genres={genres}
      />
    </div>
  );
};

export default Movie;

Movie.propTypes = {
  movieId: PropTypes.string,
};
