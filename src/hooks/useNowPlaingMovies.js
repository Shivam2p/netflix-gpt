import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { Api_options } from "../utils/constant";

 
 
 const useNowPlaingMovies=()=>{
    const dispatch=useDispatch()
    const  getNowPlayingMovies= async()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_options);
      const json=await data.json();
      
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
      getNowPlayingMovies()
    },[])
 }
 export default useNowPlaingMovies;