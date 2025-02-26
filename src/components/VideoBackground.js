import React from 'react';
import {  useSelector } from 'react-redux';
import useGetMovieVedio from '../hooks/useGetMovieVedio';


const VideoBackground = ({ id }) => {
    
    useGetMovieVedio(id);
    const trailerVedio=useSelector(store=>store.movies?.trailorVedio)
  
 
  return (
    <div className="absolute inset-0 w-full h-full -z-10 ">
    {trailerVedio?.key ? (
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVedio.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVedio.key}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    ) : (
      <div className="flex items-center justify-center h-full">
        <p className="text-white text-lg sm:text-2xl text-center">Loading video...</p>
      </div>
    )}
  </div>
  
    );
};

export default VideoBackground;

