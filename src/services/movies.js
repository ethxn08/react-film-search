const API_KEY = "e9c3d6c3";
export const searchMovies = async ({ query }) => {
  if (query === "") return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdId,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }));
  } catch (e) {
    throw new Error("Error Searching Movies");
  }
};
