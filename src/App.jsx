import "./App.css";
import withResults from "./mocks/with-results.json";
import noResults from "./mocks/no-results.json";
import Movies from "./components/Movies";

function App() {
  const movies = withResults.Search;

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
