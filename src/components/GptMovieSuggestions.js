import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt=useSelector(store=>store.gpt);
  const{movieNames,movieResults}=gpt;

 if(!movieNames) return null;
  return (
    <div className='font-bold text-violet-700 bg-black -mt-72'>
{      movieNames.map((moviename,idx)=>       <MovieList key={idx} title={moviename}movies={movieResults[idx]}/>)
}
     
    </div>
  )
}

export default GptMovieSuggestions