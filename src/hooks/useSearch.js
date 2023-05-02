import { useEffect, useState, useRef } from "react";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirsetInput = useRef(true);

  useEffect(() => {
    //Validación de errores
    if (isFirsetInput.current) {
      isFirsetInput.current = query === "";
      return;
    }
    if (query === "") {
      setError("No se puede buscar una pelicula vacía");
      return;
    }
    if (query.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un solo número");
      return;
    }
    if (query.length < 3) {
      setError("No se puede buscar una pelicula con menos de 3 caracteres");
      return;
    }
    setError(null);
  }, [query]);
  return { query, setQuery, error };
};

export default useSearch;
