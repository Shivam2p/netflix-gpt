import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlaingMovies from '../hooks/useNowPlaingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
           useNowPlaingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse