import "./App.css";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";

function App() {
  const { query, setQuery, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ query });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            placeholder="Avenger, Star wars, Matrix, ..."
            value={query}
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>
      <main>
        <h3>Peliculas</h3>
        {loading ? <p>Cargando....</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
