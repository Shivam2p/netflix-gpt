import React from 'react';
import {  useSelector } from 'react-redux';
import useGetMovieVedio from '../hooks/useGetMovieVedio';


const VideoBackground = ({ id }) => {
    useGetMovieVedio(id);
    const trailerVedio=useSelector(store=>store.movies?.trailorVedio)
  
 
  return (
        <div className="w-full h-screen absolute top-0 left-0 -z-10 ">
            {trailerVedio?.key ? (
               <iframe
               className="w-full h-full"
               src={`https://www.youtube.com/embed/${trailerVedio?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVedio?.key}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1`}
               title="YouTube video player"
                allow="autoplay; encrypted-media"
               referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            ) : (  <p className="text-white text-center">Loading video...</p>)}
        </div>
    );
};

export default VideoBackground;

