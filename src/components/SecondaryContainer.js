import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
    <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Populer"} movies={movies.populerMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRated}/>
    </div>
    </div>
  )
}

export default SecondaryContainer