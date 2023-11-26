import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react'
import { isValidDateValue } from '@testing-library/user-event/dist/utils'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'

import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth"

import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BACKGROUND_IMG } from '../utils/constants'

const Login = () => {
const [isSignInForm,setIsSignInForm] =useState(true)
const passwordRef=useRef(null)
const emailRef=useRef(null)
const nameRef=useRef(null)
const [errormsg,setErrormsg]=useState(null)

const dispatch=useDispatch()

 const toggleSignInForm =()=>{
   setIsSignInForm(!isSignInForm)
 }

 const handleButtonClick =(e)=>{
         
       const msg= checkValidData(emailRef.current.value,passwordRef.current.value)
       setErrormsg(msg)

       if(msg){
        return
       }

       if(!isSignInForm){

     createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
     .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName:nameRef.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const {uid,email,displayName}=auth.currentUser
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
 
  

    }).catch((error) => {
      setErrormsg(error.message)
    });


  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormsg(errorMessage)
    // ..
  });


       }
       else{
              

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormsg(errorMessage)
  });
       }


 }




  return (
    <div>
        <Header/>
        <div className='absolute '>
            <img
            className='h-screen object-cover  md:h-full'
            alt="logo"
            src={BACKGROUND_IMG}
            />
        </div>
        <form 
         onSubmit={(e)=>e.preventDefault()}
         className='absolute bg-black p-12 w-full md:w-3/12 mt-40 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'
         >
          <h1 className=' text-2xl py-4'>{isSignInForm ?"Sign In" :"Sign Up"}</h1>
          {!isSignInForm && 
           <input 
           type='text'
            placeholder='Full Name' 
            className='p-4 my-4 w-full bg-gray-800 rounded-lg'
            ref={nameRef}
            />
           
           }
          <input 
          type='text'
           placeholder='Email' 
           className='p-4 my-4 w-full bg-gray-800 rounded-lg'
           ref={emailRef}
           />
           
          <input
           type='password'
            placeholder='Password'
             className='p-4 my-4 w-full bg-gray-800 rounded-lg'
             ref={passwordRef}
             />
           <p className='text-red-600 font-bold text-lg '>{errormsg}</p>

          <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ?"Sign In" :"Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

        </form>
    </div>
  )
}

export default Login