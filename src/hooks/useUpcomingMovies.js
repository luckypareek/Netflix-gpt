import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addNowPlayingMovies, addUpcomingMovies } from "../utils/movieSlice"





const useUpcomingMovies=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        getUpcomingMovies()
    },[])
  
  
    const getUpcomingMovies =async()=>{
  
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const data_json=await data.json()
   
      dispatch(addUpcomingMovies(data_json?.results))
    }


}

export default useUpcomingMovies