import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({
  topRatedMovies = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
}) => {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[2]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((category) => category.id === +selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Populer Movies"
        movies={topRatedMovies.slice(0, 7)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={popularMovies.slice(7, 14)}
      />
    </div>
  );
};

export default HomeContainer;
