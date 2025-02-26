import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null; // Prevents errors if movies are missing

  return (
    <div className="px-6   ">
      <h2 className="text-lg md:text-3xl py-16 text-white">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 ">
      <div className="flex  ">
  {movies.map((movie, index) => (
    <MovieCard key={index} movie={movie} />
  ))}
</div>
</div>

    </div>
  );
};

export default MovieList;


