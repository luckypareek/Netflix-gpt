import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-6 md:px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-2xl md:text-5xl'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-md w-1/4 '>{overview}</p>
        <div className='my-4 md:my-0'>
        <button className=' hover:bg-opacity-80 py-1 md:py-4 bg-white text-black px-3 md:px-12 text-lg font-bold  rounded-md text-xl'>▶️ Play</button>
        <button className='hidden md:inline-block mx-2 p-4 bg-gray-500  px-12 text-lg font-bold bg-opacity-50 rounded-md text-xl hover:bg-opacity-80'> More Info</button>
        </div>
   



    </div>
  )
}

export default VideoTitle