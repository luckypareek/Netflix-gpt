import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult, addSearchQueryErrorMsg, startFetching } from '../utils/gptSlice'
import { checkValidMoviveQuery } from '../utils/validate'

const GptSearchBar = () => {

   const searchText=useRef(null)
   const dispatch=useDispatch()


   const searchMovieTMDB = async (movie)=>{
    const movie_data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,API_OPTIONS)
    const movie_data_json=await movie_data.json()
    return movie_data_json

   }

    const handleGptSearchClick =async ()=>{
      //Make an API call to Gpt and get movies results

       dispatch(addGptMovieResult({movieNames:null,movieResults:null}))

      const  msg=checkValidMoviveQuery(searchText.current.value)
      dispatch(addSearchQueryErrorMsg(msg))
      if(msg){
      
       return

      }

      dispatch(startFetching())
      const gptQuery="Act as a Movie recommendation system and suggest some movies for the query : "+searchText.current.value + ". Only give me names of 5 movies , comma seperated like the example result given ahead. Example Result : Gadar , Don , Sholay , Partner , Andaz Apna Apna"
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content:gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      


     
      const gptMovies=gptResults.choices?.[0]?.message?.content.split(",")
  
     
      // searchMovieTMDB returns array of promise coz it is async function 
     const promiseArray= gptMovies.map(gptMovie => searchMovieTMDB(gptMovie))
     
     //Promise.all returns a promise after all the promises gets resolved , added await for the returned promise
     const tmdbResults= await Promise.all(promiseArray)
  
     dispatch(addGptMovieResult({movieNames : gptMovies,movieResults :tmdbResults}))
    

    }

    const langKey=useSelector(store=> store.config.lang)
  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black  grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}> 
            <input 
             type='text' 
             className='col-span-10 p-4 m-4 ' 
             placeholder={lang[langKey].gptSearchPlaceHolder} 
             ref={searchText}
             />
            <button className='col-span-2 py-2 px-4 mx-2 my-4 bg-red-700 rounded-lg text-white' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
           
        </form>
    </div>
  )
}
 
export default GptSearchBar