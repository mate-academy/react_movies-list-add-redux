export const mapMovieResponse = (data) => {
  const {
    Title,
    Plot,
    Poster,
    imdbID,
  } = data;

  return {
    imdbId: imdbID,
    title: Title,
    description: Plot,
    imgUrl: Poster,
    imdbUrl: `https://imdb.com/title/${imdbID}`,
  };
};

export const mapMovieDetailsResponse = (data) => {
  const {
    Title,
    Plot,
    Poster,
    imdbID,
    Director,
    Actors,
    Awards,
    Genre,
    BoxOffice,
    Runtime,
    imdbRating,
    Year,
    Writer,
    Country,
  } = data;

  return {
    imdbId: imdbID,
    title: Title,
    description: Plot,
    imgUrl: Poster,
    imdbUrl: `https://imdb.com/title/${imdbID}`,
    director: Director,
    actors: Actors,
    awards: Awards,
    genre: Genre,
    budget: BoxOffice,
    runtime: Runtime,
    imdbRating,
    year: Year,
    writer: Writer,
    country: Country,
  };
};
