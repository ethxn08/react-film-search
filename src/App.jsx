import "./App.css";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input placeholder="Avenger, Star wars, Matrix, ..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <h3>Peliculas</h3>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
