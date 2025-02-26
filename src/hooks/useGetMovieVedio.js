import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailorVedio } from '../utils/movieSlice';
import {Api_options} from '../utils/constant'

const useGetMovieVedio = (id) => {
    const dispatch=useDispatch();
 


    const getMovieVideo = async (id) => {
        
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, Api_options);
            const json = await response.json();

            const filterData = json.results.filter(video => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : json.results[0];

          
        dispatch(addTrailorVedio(trailer))
    };

    useEffect(() => {
        if (id) getMovieVideo(id)
    }, [id]);
  
}

export default useGetMovieVedio
