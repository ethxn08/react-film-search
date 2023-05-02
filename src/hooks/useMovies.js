import { useState } from "react";
import withResults from "../mocks/with-results.json";
import noResults from "../mocks/no-results.json";

const useMovies = ({ query }) => {
  const [responseMovies, setResponseMovies] = useState([]);
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const getMovies = () => {
    if (query) {
      fetch(`https://www.omdbapi.com/?apikey=e9c3d6c3&s=${query}`)
        .then((res) => res.json())
        .then((json) => {
          setResponseMovies(json);
        });
    } else {
      setResponseMovies(noResults);
    }
  };

  return { movies: mappedMovies, getMovies };
};

export default useMovies;
