import React, { useEffect, useState } from 'react'
import './SingleView.css'
import ViewComponent from '../../Component/ViewComponent/ViewComponent'
import Sidebar from '../../Component/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import BASE_URL from '../../config'
import axios from 'axios'


function SingleView() {

  const location =useLocation()

  const path = location.pathname.split('/')[2]
//    console.log(path);

  const[post,setPost]=useState({})

  useEffect(()=>{

   const getPosts=async()=>{

       const res = await axios.get(`${BASE_URL}/posts/`+path)

       setPost(res.data);
   }
   getPosts()
  },[path])

  return (
    <div className='SingleView'>
<ViewComponent/>
<Sidebar/>
    </div>
  )
}

export default SingleView