import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Logo, SupportedLanguage } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLang } from '../utils/configSlice';



const Header = () => {
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user);
  const showgptlang=useSelector(store=>store.gpt.showGptSearch);

  const navigate=useNavigate();
  const handleGptSearch=()=>{
 dispatch(toggleGptSearchView())

  }

  useEffect(()=>{
    const unsubscibe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user
        dispatch(addUser({uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        }));
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser)
        // User is signed out
        // ...
        navigate("/")
      
      }
    });
    return ()=>unsubscibe();
  },[])
 
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    }); 
  }
  const handelLanguageChange=(e)=>{
    dispatch(changeLang(e.target.value))
  }
  return (
    <div className=' w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img  className='w-44' src={Logo} alt='logo'/>

  { user&&<div className='flex p-4 backdrop-blur-sm'>
    
     {showgptlang&& <select className='p-2 bg-gray-900 rounded-lg  text-white m-2' onChange={handelLanguageChange}>
        {SupportedLanguage.map((lang)=><option  className=' bg-gray-900 rounded-lg' value={lang.identifier} key={lang.identifier}>{lang.name }</option>)}
      </select>}
      
   
    <button className='py-2 px-4 mx-4 bg-purple-800 rounded-lg  font-bold ' onClick={handleGptSearch}> {showgptlang?"Home page":"Gpt_Search"}</button>
  <img className='w-12 h-12 rounded-md' src={user?.photoURL} alt='usericon'/>
  <button onClick={handleSignout} className='bg-purple-800 rounded-lg py-2 px-4 mx-4 font-bold' >Signout</button>
  </div>}
    </div>
  )
}

export default Header