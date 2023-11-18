import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
const [isSignInForm,setIsSignInForm] =useState(true)

 const toggleSignInForm =()=>{
   setIsSignInForm(!isSignInForm)
 }




  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img
            alt="logo"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            />
        </div>
        <form  className='absolute bg-black p-12  w-3/12 mt-40 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
          <h1 className=' text-2xl py-4'>{isSignInForm ?"Sign In" :"Sign Up"}</h1>
          {!isSignInForm && 
           <input 
           type='text'
            placeholder='Full Name' 
            className='p-4 my-4 w-full bg-gray-800 rounded-lg'
            />
           
           }
          <input 
          type='text'
           placeholder='Email' 
           className='p-4 my-4 w-full bg-gray-800 rounded-lg'
           />
           
          <input
           type='password'
            placeholder='Password'
             className='p-4 my-4 w-full bg-gray-800 rounded-lg'
             />
          <button type='submit' className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ?"Sign In" :"Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

        </form>
    </div>
  )
}

export default Login