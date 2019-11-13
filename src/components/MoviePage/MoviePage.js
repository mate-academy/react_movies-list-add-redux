import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants/api';
import {
  mapMovieDetailsResponse,
} from '../../utils/dataMappers';
import { Info } from '../Info';
import './MoviePage.scss';

export class MoviePage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const {
      match: { params },
      history,
    } = this.props;

    fetch(`${API_URL}i=${params.id}`)
      .then(response => response.json())
      .then((data) => {
        const { Error } = data;

        if (Error) {
          history.push('/404');

          return;
        }

        const movie = mapMovieDetailsResponse(data);

        this.setState({ movie });
      });
  }

  render() {
    const { movie } = this.state;

    return !movie
      ? <div>Loading...</div>
      : (
        <>
          <div className="hero is-dark is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  {movie.title}
                </h1>
                <h2 className="subtitle">
                  {`Directed by: ${movie.director}`}
                </h2>

                <Link className="home-link" to="/">
                  <span className="icon is-medium">
                    <i className="fas fa-home fa-2x" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="columns is-marginless">
            <div className="column">
              <div className="media">
                <div className="media-left">
                  <figure className="image">
                    <img
                      src={movie.imgUrl}
                      alt="Film logo"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="is-size-5">{movie.description}</p>
                </div>
              </div>
            </div>

            <div className="column is-two-fifths">
              <div className="box has-background-dark">
                <div className="title is-3 has-text-light">
                  Information
                </div>

                <Info title="Runtime" value={movie.runtime} />
                <Info title="Release year" value={movie.year} />
                <Info title="Country" value={movie.country} />
                <Info title="Director" value={movie.director} />
                <Info title="Writer" value={movie.writer} />
                <Info isTag={false} title="Actors" value={movie.actors} />
                <Info title="Budget" value={movie.budget} />
                <Info isTag={false} title="Awards" value={movie.awards} />
                <Info title="IMDB Rating">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={movie.imdbUrl}
                  >
                    {movie.imdbRating}
                  </a>
                </Info>
              </div>
            </div>
          </div>
        </>
      );
  }
}

MoviePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
