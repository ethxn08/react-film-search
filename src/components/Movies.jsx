import React from "react";

const renderMovies = (movies) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
};

const renderNoReults = () => {
  return <p>No se encontraron peliculas para esta busqueda</p>;
};

const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0;
  return hasMovies ? renderMovies(movies) : renderNoReults();
};

export default Movies;
