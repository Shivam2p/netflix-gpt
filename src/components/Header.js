import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';

import { useDispatch } from "react-redux";
import { Logo } from '../utils/constant';



const Header = () => {
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user);

  const navigate=useNavigate();

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
  return (
    <div className=' w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img  className='w-44' src={Logo} alt='logo'/>
  { user&&<div className='flex p-4'>
  <img className='w-12 h-12 rounded-md' src={user?.photoURL} alt='usericon'/>
  <button onClick={handleSignout} className='bg-red-500 rounded-lg ml-2 font-bold' >Signout</button>
  </div>}
    </div>
  )
}

export default Header