import React from "react";
import { notFound } from "next/navigation";
import MoviewContainer from "@/containers/movie";

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

const API_URL = "https://api.themoviedb.org/3";

const getMovie = async (movieId) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjBlNGQwMzQ2MDUzMWExN2MzNjg5OGM0MTgzNTM0YSIsIm5iZiI6MTcyOTk3MDcwMi4yNTQ5MjUsInN1YiI6IjY3MWQzZWYyYTRhYzhhNDMyYzVjNzlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TNxOH0oUu1bHb-Z7q386D2esE6d6Vek31gJYi0zA43s",
    },
  };
  const res = await fetch(
    `${API_URL}/movie/${movieId}?language=en-US&page=1}`,
    options
  );
  return res.json();
};

const MoviePage = async ({ params, searchParams }) => {
  // await delay(3000); // Simulating network delay

  const movieDetail = await getMovie(params.id);

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }

  return <MoviewContainer movie={movieDetail} />;
};

export default MoviePage;
