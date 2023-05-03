import React from "react";

const renderMovies = (movies) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.image} alt={movie.title} />
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
