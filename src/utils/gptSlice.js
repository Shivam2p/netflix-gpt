import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null


    },
    reducers:{
        toggleGptSearchView:(state)=>{
          state.showGptSearch=!state.showGptSearch;
        },

        addgptmovieresults:(state,action)=>{
            const{movieNames,movieResults}=action.payload;
            state.movieResults=movieResults;
            state.movieNames=movieNames;

        }
    }
})
export const {toggleGptSearchView,addgptmovieresults}=gptSlice.actions
export default gptSlice.reducer