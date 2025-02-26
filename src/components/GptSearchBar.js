import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import lang from '../utils/languageconstant';
import GEMINI_AI from '../utils/GEMINI_AI';
import { Api_options } from '../utils/constant';
import { addgptmovieresults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch=useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const SearchText = useRef();
 

    const SearchMovieTmdb=async(movie)=>{
      const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie }&include_adult=false&language=en-US&page=1`, Api_options);
      const json=await data.json();
      //  
      return json.results;
    }

    const handleGptSearchClick = async () => {
            // console.log("User Input:", SearchText.current.value);
      const getQuery = `Act as a Movie Recommendation System And Suggest movies for the Query: ${SearchText.current.value}. Only give me the names of 5 movies, comma-separated. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.`;
            const movieName = await GEMINI_AI(getQuery);
            const MovieList=movieName.split(', ');
            const promisearray=MovieList.map((movie)=>SearchMovieTmdb(movie));
            const tmdbresults=await Promise.all(promisearray)
            dispatch(addgptmovieresults({movieNames:MovieList,movieResults:tmdbresults}))           
    };

    return (
      <div className="flex justify-center items-center min-h-screen p-6 sm:p-10">
      <form 
        className="w-full sm:w-3/4 md:w-1/2 bg-black grid grid-cols-12 rounded-lg p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input 
          type="text"
          className="m-2 p-3 col-span-9 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          ref={SearchText}
          placeholder={lang[langKey].GPtPlaceholder}
        />
        <button 
          className="py-3 px-4 col-span-3 m-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition duration-200"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].Gptsearch}
        </button>
      </form>
    </div>
    
    ) 
};

export default GptSearchBar;
