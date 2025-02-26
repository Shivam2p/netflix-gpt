import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const Movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!Movies) return;
    const mainMovie = Movies[Math.floor(Math.random() * Movies.length)];

    const {original_title, overview,id}=mainMovie;
  return (
    <div className="pt-[30%] sm:pt-[20%] md:pt-10 lg:pt-8 flex flex-col items-center">
  <VideoTitle title={original_title} overview={overview} />
  <VideoBackground id={id} />
</div>

  )
}

export default MainContainer
