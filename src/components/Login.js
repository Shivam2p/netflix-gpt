import React from 'react'
import Header from './Header'
const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg' alt='bg-img'/>
        </div> 
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85'>
        <h1 className='font-bold  text-3xl py-4'>Sign In</h1>
            <input type='email' placeholder='email address' className='p-4 my-4 w-full bg-gray-700'/>
            <input type='password' placeholder='enter password' className='p-4 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6 w-full bg-red-600 rounded-lg'>sigin</button>
        </form>
    </div>
  )
}

export default Login