import { useEffect } from "react";
import { addToprated } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../utils/constant";

 
 
 const useToprated=()=>{
  const topRated=useSelector(store=>store.movies.topRated);
    const dispatch=useDispatch()
    const  getToprated= async()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', Api_options);
      const json=await data.json();
      
      dispatch(addToprated(json.results))
    }
    useEffect(()=>{
     !topRated && getToprated()
    },[])
 }
 export default useToprated;