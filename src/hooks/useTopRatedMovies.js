import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addNowPlayingMovies, addTopRatedMovies } from "../utils/movieSlice"





const useTopRatedMovies=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        getTopRatedMovies()
    },[])
  
  
    const getTopRatedMovies =async()=>{
  
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      const data_json=await data.json()
   
      dispatch(addTopRatedMovies(data_json?.results))
    }


}

export default useTopRatedMovies