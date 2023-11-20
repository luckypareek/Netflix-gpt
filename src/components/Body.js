import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const approuter=createBrowserRouter([{
    path:"/",
    element:<Login/>
},
{
    path:"/browse",
    element:<Browse/>
}

])


const Body = () => {
 const dispatch =useDispatch()
 

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
         
        const {uid,email,displayName}=user
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
 
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
       
      }
    });

  },[])
  return (
    <RouterProvider router={approuter}/>
  )
}

export default Body