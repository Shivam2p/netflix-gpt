import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { bgImg } from '../utils/constant'

const GptSearch = () => {
  return (<>
    <div className='absolute -z-10'><img  className='h-screen object-cover w-screen   md:w-auto md:h-auto' src={bgImg} alt='bgimg'/></div>
    <div className=' '>
       
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch