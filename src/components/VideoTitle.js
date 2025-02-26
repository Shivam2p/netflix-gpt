import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (<div className=' w-screen aspect-video pt-[9%] px-24 bg-gradient-to-r from-black'>
    <h1 className='text-white text-6xl font-bold'>{title}</h1>
    <p className=' text-white py-6 text-lg w-1/4'>{overview}</p>
    <div className=''>
        <button className='bg-white text-black p-4 px-5 text-xl  rounded-lg hover:bg-opacity-70'>▶Play</button>
        <button className=' mx-2 bg-gray-200 text-black p-4 px-3 text-xl  rounded-lg bg-opacity-20'> More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle