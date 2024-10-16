import React from "react";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({ selectedCategory }) => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={Genres.genres.find((g) => g.id === +selectedCategory.id).name}
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Populer Movies"
        movies={Movies.results.slice(0, 7)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(7, 14)}
      />
    </div>
  );
};

export default HomeContainer;
