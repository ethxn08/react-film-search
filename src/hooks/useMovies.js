import { useRef, useState } from "react";
import { searchMovies } from "../services/movies";

const useMovies = ({ query }) => {
  const previousQuery = useRef(query);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    if (query === previousQuery.current) return;
    try {
      setLoading(true);
      setError(null);
      const newMovies = await searchMovies({ query });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { movies, error, loading, getMovies };
};

export default useMovies;
