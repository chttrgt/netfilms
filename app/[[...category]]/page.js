import HomeContainer from "@/containers/home";

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

const API_URL = "https://api.themoviedb.org/3";

const getSingleCategory = async (genreId) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjBlNGQwMzQ2MDUzMWExN2MzNjg5OGM0MTgzNTM0YSIsIm5iZiI6MTcyOTk3MDcwMi4yNTQ5MjUsInN1YiI6IjY3MWQzZWYyYTRhYzhhNDMyYzVjNzlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TNxOH0oUu1bHb-Z7q386D2esE6d6Vek31gJYi0zA43s",
    },
  };
  const res = await fetch(
    `${API_URL}/discover/movie?language=en-US&with_genres=${genreId}&page=1}`,
    options
  );
  return res.json();
};

const getCategories = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjBlNGQwMzQ2MDUzMWExN2MzNjg5OGM0MTgzNTM0YSIsIm5iZiI6MTcyOTk3MDcwMi4yNTQ5MjUsInN1YiI6IjY3MWQzZWYyYTRhYzhhNDMyYzVjNzlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TNxOH0oUu1bHb-Z7q386D2esE6d6Vek31gJYi0zA43s",
    },
  };
  const res = await fetch(
    `${API_URL}/genre/movie/list?language=en-US&page=1}`,
    options
  );
  return res.json();
};

const getTopRatedMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjBlNGQwMzQ2MDUzMWExN2MzNjg5OGM0MTgzNTM0YSIsIm5iZiI6MTcyOTk3MDcwMi4yNTQ5MjUsInN1YiI6IjY3MWQzZWYyYTRhYzhhNDMyYzVjNzlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TNxOH0oUu1bHb-Z7q386D2esE6d6Vek31gJYi0zA43s",
    },
  };
  const res = await fetch(
    `${API_URL}/movie/top_rated?language=en-US&page=1}`,
    options
  );
  return res.json();
};

const getPopularMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjBlNGQwMzQ2MDUzMWExN2MzNjg5OGM0MTgzNTM0YSIsIm5iZiI6MTcyOTk3MDcwMi4yNTQ5MjUsInN1YiI6IjY3MWQzZWYyYTRhYzhhNDMyYzVjNzlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TNxOH0oUu1bHb-Z7q386D2esE6d6Vek31gJYi0zA43s",
    },
  };
  const res = await fetch(
    `${API_URL}/movie/popular?language=en-US&page=1}`,
    options
  );
  return res.json();
};

export default async function Home({ params }) {
  // await delay(3000); // Simulating network delay
  let selectedCategory;

  const topRatedMoviesPromise = getTopRatedMovies();
  const popularMoviesPromise = getPopularMovies();
  const categoriesPromise = getCategories();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    topRatedMoviesPromise,
    popularMoviesPromise,
    categoriesPromise,
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0.7) : [],
      }}
    />
  );
}
