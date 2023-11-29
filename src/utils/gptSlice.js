import { createSlice } from "@reduxjs/toolkit";



const gptSlice=createSlice({
    name:"gpt",
    initialState:{
         showGptSearchView:false,
         movieNames:null,
         movieResults:null,
         searchQueryErrorMsg:null,
         isFetching: false, // New state to track fetching status

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
                state.isFetching = false; // Update fetching status when movie data is received
        },
        addSearchQueryErrorMsg:(state,action)=>{
            state.searchQueryErrorMsg=action.payload
            state.isFetching = false; // Update fetching status on error
        },
        startFetching: (state) => {
            state.isFetching = true; // Set fetching status when fetching starts
          },

        

    }
})


export const {toggleGptSearchView,OpenGptSearchView,addGptMovieResult,addSearchQueryErrorMsg,startFetching} = gptSlice.actions
export default gptSlice.reducer