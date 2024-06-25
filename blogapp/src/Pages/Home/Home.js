
import './Home.css'
import Header from '../../Component/Header/Header'
import Posts from '../../Component/Posts/Posts'
import Sidebar from '../../Component/Sidebar/Sidebar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../../config'
import { useLocation } from 'react-router-dom'

function Home() {

  const [posts,setPosts]=useState([])

  const {search} = useLocation()
  console.log(search);


  useEffect(()=>{

    const fetchPosts=async()=>{

      const res = await axios.get(`${BASE_URL}/posts/${search}`)
      setPosts(res.data);
    }
    fetchPosts()
  },[search])
 
  return (
    <>
      <Header />
      <div className='home'>
        <Posts post={posts} className='HomePosts' />
        <Sidebar className='HomeSidebar' />
      </div>
    </>

  )
}

export default Home