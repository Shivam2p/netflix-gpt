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
    <div className="w-screen absolute px-6 py-3 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center md:justify-between">
   
    <img className="w-36 md:w-44 mx-auto md:mx-0" src={Logo} alt="logo" />
  
    {user && (
      <div className="flex flex-col md:flex-row items-center p-4 backdrop-blur-sm space-y-3 md:space-y-0 md:space-x-4">
       
        {showgptlang && (
          <select
            className="p-2 bg-gray-900 text-white rounded-lg m-2 md:m-0 w-full md:w-auto"
            onChange={handelLanguageChange}
          >
            {SupportedLanguage.map((lang) => (
              <option
                className="bg-gray-900 rounded-lg"
                value={lang.identifier}
                key={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
  
  
        <button
          className="py-2 px-4 bg-purple-800 text-white font-bold rounded-lg hover:bg-purple-700 transition"
          onClick={handleGptSearch}
        >
          {showgptlang ? "Home Page" : "GPT Search"}
        </button>
  
    
        <img className="w-10 h-10 md:w-12 md:h-12 rounded-md" src={user?.photoURL} alt="usericon" />
  
      
        <button
          onClick={handleSignout}
          className="py-2 px-4 bg-purple-800 text-white font-bold rounded-lg hover:bg-purple-700 transition"
        >
          Sign Out
        </button>
      </div>
    )}
  </div>
  
  )
}

export default Header