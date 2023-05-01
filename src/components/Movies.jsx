import React from "react";

const renderMovies = (movies) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
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
