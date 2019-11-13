import React, { Component } from 'react';
import { SearchMovie } from '../SearchMovie';
import { MoviesList } from '../MoviesList';
import { NewMovie } from '../NewMovie';
import data from '../../data';
import './HomePage.scss';

export class HomePage extends Component {
  state = {
    movies: data,
  };

  addMovie = (movie) => {
    this.setState(({ movies }) => {
      const isMovieExists = movies
        .some(({ imdbId }) => imdbId === movie.imdbId);

      return isMovieExists
        ? null
        : { movies: [...movies, movie] };
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie onAdd={this.addMovie} />
          <MoviesList movies={movies} />
        </div>

        <div className="sidebar">
          <NewMovie onAdd={this.addMovie} />
        </div>
      </div>
    );
  }
}
