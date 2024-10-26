const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;
const HEADERS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${process.env.ACCESS_TOKEN}`,
  },
};

const fetchMoviesAPI = async (pathName, query = "") => {
  try {
    const res = await fetch(`${BASE_URL}/${pathName}?${query}`, HEADERS);
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleCategory = async (genreId) => {
  return fetchMoviesAPI(
    "discover/movie",
    `language=en-US&with_genres=${genreId}&page=1`
  );
};

const getCategories = async () => {
  return fetchMoviesAPI("genre/movie/list", "language=en-US&page=1");
};

const getTopRatedMovies = async () => {
  return fetchMoviesAPI("movie/top_rated", "language=en-US&page=1");
};

const getPopularMovies = async () => {
  return fetchMoviesAPI("movie/popular", "language=en-US&page=1");
};

const getMovie = async (movieId) => {
  return fetchMoviesAPI(`movie/${movieId}`, "language=en-US&page=1");
};

export {
  getSingleCategory,
  getCategories,
  getTopRatedMovies,
  getPopularMovies,
  getMovie,
};
