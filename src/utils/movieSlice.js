import { createSlice } from "@reduxjs/toolkit";

 const movieSlice=createSlice({
    name:"Movies",
    initialState:{
        nowPlayingMovies:null,
        trailorVedio:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;

        },
        addTrailorVedio:(state,action)=>{
            state.trailorVedio=action.payload
        }
    }
 })
export const {addNowPlayingMovies,addTrailorVedio }=movieSlice.actions;
 export default movieSlice.reducer;