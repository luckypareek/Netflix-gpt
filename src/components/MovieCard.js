import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster}) => {
  
  if(!poster)
  return null
  return (
    <div className='w-36  md:w-48 pr-4'> 
        <img alt="poster" src={IMG_CDN_URL + poster}/>
    </div>
  )
}

export default MovieCard