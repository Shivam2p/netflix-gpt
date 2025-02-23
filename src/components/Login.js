import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { bgImg, UserAvatar } from '../utils/constant';
const Login = () => {
  const dispatch=useDispatch();
    const navigate=useNavigate();
    const [issignin,setsigin]=useState(true);
    const[errormsg,seterrormsg]=useState(null);
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const handlebtnclick=()=>{
        console.log(email.current.value,password)
     const message=   checkvalidData(email.current.value,password.current.value);

     seterrormsg(message);
     if(message) return;

     if(!issignin){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: UserAvatar,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(addUser({uid:uid,
                      email:email,
                      displayName:displayName,
                      photoURL:photoURL,
                    }));
            navigate("/browse")
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode+"-"+errorMessage)
          // ..
        });
     }
     else {
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormsg(errorCode+"-"+errorMessage)
  });
     }
    }
    const ToggleSignform=()=>{
        setsigin(!issignin)

    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src={bgImg} alt='bg-img'/>
        </div> 
        <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85'>
        <h1 className='font-bold  text-3xl py-4'>{issignin?"Sign In":"Sign Up"}</h1>
        {  !issignin&&(
            <>
                <input ref={name} type='text' placeholder='FullName' className='p-4 my-4 w-full bg-gray-700'/>
                <input type='tel' placeholder='Phone Number' className='p-4 my-4 w-full bg-gray-700'/>
                </>
            ) }
            <input  ref={email} type='email' placeholder='email address' className='p-4 my-4 w-full bg-gray-700'/>
            <input ref={password} type='password' placeholder='enter password' className='p-4 my-4 w-full bg-gray-700'/>
            <p className='text-red-500'>{errormsg}</p>
            <button onClick={handlebtnclick} className='p-4 my-6 w-full bg-red-600 rounded-lg'>{issignin?"Sign In":"Sign Up"}</button>
            <p  className='py-4 cursor-pointer' onClick={ToggleSignform}>
                {issignin?"New to Netflix ? Sign Up Now":"Already Registred ? Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login