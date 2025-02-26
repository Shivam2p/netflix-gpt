import { createSlice } from "@reduxjs/toolkit";

 const movieSlice=createSlice({
    name:"Movies",
    initialState:{
        nowPlayingMovies:null,
        trailorVedio:null,
        populerMovies:null,
        topRated:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;

        },
        addPopulerMovies:(state,action)=>{
            state.populerMovies=action.payload;

        },
        addToprated:(state,action)=>{
            state.topRated=action.payload;

        },
        addTrailorVedio:(state,action)=>{
            state.trailorVedio=action.payload
        }
    }
 })
export const {addNowPlayingMovies,addTrailorVedio ,addPopulerMovies,addToprated}=movieSlice.actions;
 export default movieSlice.reducer;