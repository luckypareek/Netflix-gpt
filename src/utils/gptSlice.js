import { createSlice } from "@reduxjs/toolkit";



const gptSlice=createSlice({
    name:"gpt",
    initialState:{
         showGptSearchView:false,
         movieNames:null,
         movieResults:null

    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearchView = !state.showGptSearchView
        },
        OpenGptSearchView:(state,action)=>{
            state.showGptSearchView=false
        },
        
        addGptMovieResult:(state,action)=>{
                const {movieNames,movieResults}=action.payload
                state.movieNames=movieNames
                state.movieResults=movieResults
        }
        

    }
})


export const {toggleGptSearchView,OpenGptSearchView,addGptMovieResult} = gptSlice.actions
export default gptSlice.reducer