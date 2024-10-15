import React from "react";
import FeaturedMovie from "@/components/featured-movie";

const MoviewContainer = ({ movie }) => {
  return <FeaturedMovie movie={movie} isCompact={false} />;
};

export default MoviewContainer;
