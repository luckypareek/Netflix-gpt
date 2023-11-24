import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addNowPlayingMovies } from "../utils/movieSlice"





const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        getNowPlayingMovies()
    },[])
  
  
    const getNowPlayingMovies =async()=>{
  
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const data_json=await data.json()
   
      dispatch(addNowPlayingMovies(data_json?.results))
    }


}

export default useNowPlayingMovies