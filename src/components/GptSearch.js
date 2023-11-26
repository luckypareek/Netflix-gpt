import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <div className='fixed -z-10'>
            <img
            alt="logo"
            src={BACKGROUND_IMG}
            />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch