import { useEffect } from "react";
import {addPopulerMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../utils/constant";

 
 
 const usePopulerMovies=()=>{
    const dispatch=useDispatch()
    const popuplermovie=useSelector(store=>store.movies.populerMovies);
    const  getPopulerMovies= async()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', Api_options);
      const json=await data.json();
      
      dispatch(addPopulerMovies(json.results))
    }
    useEffect(()=>{
     !popuplermovie && getPopulerMovies()
    },[])
 }
 export default usePopulerMovies;