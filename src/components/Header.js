import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {

  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const dispatch =useDispatch()

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
 


  const handleSignOut=()=>{
    signOut(auth).then(() => {
    
    }).catch((error) => {
      
      navigate("/error")
    });
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen justify-between flex'>
        <img 
        className='w-48 '
        alt="logo"
        src={LOGO}
        
        
        />
        { user &&
        <div className='flex p-4'>
          <img
           src={USER_AVATAR}
           alt="usericon"
           className='w-12 h-12'
           />
           <button onClick={handleSignOut} className='text-white font-bold px-2' >Sign Out</button>
        </div>
}
    </div>
  )
}

export default Header