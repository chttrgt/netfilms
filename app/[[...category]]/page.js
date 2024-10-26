import HomeContainer from "@/containers/home";
import {
  getCategories,
  getPopularMovies,
  getSingleCategory,
  getTopRatedMovies,
} from "@/services/moviesAPI";

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

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
