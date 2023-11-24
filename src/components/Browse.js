import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addNowPlayingMovies} from './../utils/movieSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
   useNowPlayingMovies()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

      {
        /*
        -Movie Container
           -Movie background video
           -Video title
        -SecondaryContainer
           -MovieList * n 
              -cards*n

        */
      }
    </div>
  )
}

export default Browse