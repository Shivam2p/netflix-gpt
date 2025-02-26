import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { bgImg } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className='bg-black'>
        <div className='absolute -z-10 '>
               
                </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch