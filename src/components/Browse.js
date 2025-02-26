import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies '
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopulerMovies from '../hooks/usePopulerMovies';
import useToprated from '../hooks/useToprated';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
           useNowPlayingMovies();
           usePopulerMovies();
           useToprated();
  return (
    <div>
      <Header/>
      {
        showGptSearch ? (<GptSearch/>) :(<> <MainContainer/>
      <SecondaryContainer/></>)
      }
     
     
    </div>
  )
}

export default Browse