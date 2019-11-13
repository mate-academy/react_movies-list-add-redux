import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

export const MovieCard = (props) => {
  const {
    title,
    description,
    imgUrl,
    imdbUrl,
    imdbId,
  } = props;

  return (
    <Link to={`/movies/${imdbId}`} className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={imgUrl}
            alt="Film logo"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="./images/imdb-logo.jpeg"
                alt="imdb"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-8">{title}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
          <a href={imdbUrl}>IMDB</a>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  imdbId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  description: '',
};
