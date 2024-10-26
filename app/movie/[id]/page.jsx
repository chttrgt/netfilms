import React from "react";
import { notFound } from "next/navigation";
import MoviewContainer from "@/containers/movie";
import { getMovie } from "@/services/moviesAPI";

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

const MoviePage = async ({ params, searchParams }) => {
  // await delay(3000); // Simulating network delay

  const movieDetail = await getMovie(params.id);

  if (!movieDetail) {
    notFound();
  }

  // if (searchParams.error === "true") {
  //   throw new Error("Error happened");
  // }

  return <MoviewContainer movie={movieDetail} />;
};

export default MoviePage;
