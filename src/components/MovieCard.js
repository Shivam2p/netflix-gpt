import React from "react";
import { moviePoster } from "../utils/constant";

const MovieCard = ({ movie }) => {
  if (!movie) return null; // Prevents errors if movie data is missing

  const { title, poster_path, vote_average } = movie;
  
if(!poster_path) return
  return (
    <div className="w-56 p-3 md:w-48 pr-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-80 object-cover rounded-lg"
        src={moviePoster+`${poster_path}`}
        alt={title}
      />
      <div className="mt-3 text-white">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <p className="text-gray-400 text-sm">⭐ {vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
