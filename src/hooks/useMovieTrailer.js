import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addTrailerVideo } from "../utils/movieSlice"


const useMovieTrailer =(movieId)=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        getMovieVideos()
    },[])
     


    const getMovieVideos =async () =>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
        const data_json=await data.json()
  

        const filter_data = data_json.results.filter(item => item.type === "Trailer")
        // If trailer type video is there then take first one else take the forst video of any type it may be 
        const  trailer=filter_data.length ?filter_data[0] : data_json[0]
        dispatch(addTrailerVideo(trailer))
       
    }
}

export default useMovieTrailer