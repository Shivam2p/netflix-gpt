import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../utils/constant";

 
 
 const useNowPlayingMovies=()=>{
  const now_playing=useSelector(store=>store.movies.nowPlayingMovies);
    const dispatch=useDispatch()
    const  getNowPlayingMovies= async()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_options);
      const json=await data.json();
      
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
      if(!now_playing) getNowPlayingMovies()
    },[])
 }
 export default useNowPlayingMovies;