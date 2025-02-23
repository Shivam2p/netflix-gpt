// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
// import { addTrailorVedio } from '../utils/movieSlice';
// import {Api_options} from '../utils/constant'

// const useGetMovieVedio = (id) => {
//     const dispatch=useDispatch();
 


//     const getMovieVideo = async () => {
        
//             const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, Api_options);
//             const json = await response.json();

//             const filterData = json.results.filter(video => video.type === "Trailer");
//             const trailer = filterData.length ? filterData[0] : json.results[0];

          
//         dispatch(addTrailorVedio(trailer))
//     };

//     useEffect(() => {
//         if (id) getMovieVideo()
//     }, [id]);
  
// }

// export default useGetMovieVedio
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailorVedio } from '../utils/movieSlice';
import { Api_options } from '../utils/constant';

const useGetMovieVedio = (id) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, Api_options);
            const json = await response.json();

            if (!json.results || json.results.length === 0) return; // ✅ Prevents errors

            // ✅ Prioritize "Official Trailer" first
            let trailer = json.results.find(video => video.type === "Trailer" && video.name.toLowerCase().includes("official"));

            // ✅ If no "Official Trailer" found, pick any trailer
            if (!trailer) {
                trailer = json.results.find(video => video.type === "Trailer");
            }

            // ✅ If still no trailer, pick any video that has a valid key
            if (!trailer) {
                trailer = json.results.find(video => video.key);
            }

            // ✅ Only dispatch if a valid trailer is found
            if (trailer?.key) {
                dispatch(addTrailorVedio(trailer));
            }
        } catch (error) {
            console.error("Error fetching trailer:", error);
        }
    };

    useEffect(() => {
        if (id) getMovieVideo(); // ✅ Fetch only when `id` is valid
    }, [id, dispatch]);

    return null; // Hooks shouldn't return JSX
};

export default useGetMovieVedio;

