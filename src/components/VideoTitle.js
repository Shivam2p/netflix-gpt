import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
<div className="w-full aspect-video pt-[12%] px-4 sm:px-12 md:px-24 bg-gradient-to-r from-black flex flex-col justify-center">

  <h1 className="text-white text-xl sm:text-4xl md:text-6xl mt-16 md:mt-0 font-bold">{title}</h1>

  <p className="hidden sm:block text-white py-4 text-base sm:text-lg md:text-xl w-full sm:w-3/5 lg:w-1/3">
    {overview}
  </p>

  
  <div className="flex gap-2 mt-4">
    <button className="bg-white text-black py-2 px-4 sm:py-3 sm:px-6 text-sm md:text-xl rounded-lg hover:bg-opacity-70">
      ▶ Play
    </button>
    <button className="hidden sm:inline-block bg-gray-400 text-black py-2 px-4 text-lg sm:text-xl rounded-lg hover:bg-opacity-20">
      🛈 More Info
    </button>
  </div>
</div>

  )
}

export default VideoTitle