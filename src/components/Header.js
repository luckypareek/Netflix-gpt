import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import {toggleGptSearchView} from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const dispatch =useDispatch()
  const showGptSearchView=useSelector(store => store.gpt.showGptSearchView)

  useEffect(()=>{
    
    // onauthstatechage returns a function unsubscribe using which we can remove this event listner 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
         
        const {uid,email,displayName}=user
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
 
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    // unsubscribing to onauthstatechange() event listner when component unmounts
    return ()=> unsubscribe()

  },[])

  const handleGptSearchClick =()=>{
      dispatch(toggleGptSearchView())
  }
 
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }


  const handleSignOut=()=>{
    signOut(auth).then(() => {
    
    }).catch((error) => {
      
      navigate("/error")
    });
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen justify-between flex flex-col md:flex-row'>
        <img 
        className='w-48 mx-auto md:mx-0'
        alt="logo"
        src={LOGO}
        
        
        />
        { user &&
        <div className='flex p-4 justify-between'>
          { showGptSearchView &&
          <select className='p-2 m-2 bg-gray-900 text-white' onChange={(e)=>handleLanguageChange(e)}>
            {SUPPORTED_LANGUAGES.map(language =><option key={language.Indentifier} value={language.Indentifier} >{language.name}</option> )}
    
          </select>
}
          <button 
          className='py-2 px-4 bg-purple-800 text-white rounded-md mx-4 mt-2'
          onClick={handleGptSearchClick}
          >
            {showGptSearchView ? "Home" : "GPT Search"}
            </button>
          <img
           src={USER_AVATAR}
           alt="usericon"
           className='w-12 h-12 hidden md:inline-block'
           />
           <button onClick={handleSignOut} className='text-white font-bold px-2' >Sign Out</button>
        </div>
}
    </div>
  )
}

export default Header