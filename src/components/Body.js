import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'



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

 return (
  <RouterProvider router={approuter}/>
)
 }
export default Body