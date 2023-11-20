import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  

  const handleSignOut=()=>{
    signOut(auth).then(() => {
       navigate("/")
    }).catch((error) => {
      
      navigate("/error")
    });
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen justify-between flex'>
        <img 
        className='w-48 '
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        
        
        />
        { user &&
        <div className='flex p-4'>
          <img
           src="https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
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