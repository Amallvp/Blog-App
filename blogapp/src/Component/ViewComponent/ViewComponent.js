import React, { useContext, useEffect, useState } from 'react'
import './ViewComponent.css'
import { Link, useLocation } from 'react-router-dom'
import BASE_URL from '../../config'
import axios from 'axios'
import { Context } from '../../Context/Context'

function ViewComponent() {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [updateMode, setUpdateMode] = useState(false)

    const location = useLocation()

    const path = location.pathname.split('/')[2]
    //    console.log(path);

    const [post, setPost] = useState({})


    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context)

    useEffect(() => {

        const getPosts = async () => {


            const res = await axios.get(`${BASE_URL}/posts/` + path)

            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPosts()
    }, [path])

    const handleDelete = async () => {

        try {
            await axios.delete(`${BASE_URL}/posts/${path}`, { data: { username: user.username } })
            window.location.replace('/')
        }
        catch (err) { }
    }

    const handleUpdate = async () => {

        try {
            await axios.put(`${BASE_URL}/posts/${post._id}`, 
                { username:user.username,
                     title,
                     desc })

            setUpdateMode(false)
        }
        catch (err) { }
    }


    return (
        <div className="ViewComponent">
            <div className="ViewComponentDetails">

                {post.photo && <img className='View-img' src={PF + post.photo} alt="" />}



                <div className="ViewTitles">

                    {updateMode ? <input type="text" className='ViewTitleInput' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus /> :
                        <>
                            <span className='ViewTitle'>{title}</span>
                            {post.username === user.username && <div className="ViewIcon">
                                <i className="Icon1 fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                <i className="Icon2 fa-solid fa-trash-can" onClick={handleDelete}></i>
                            </div>}
                        </>}


                </div>

                <div className="ViewAuthor">
                    <span>Author : <b>

                        <Link to={`/?user=${post.username}`} className='link'> {user.username}</Link>


                    </b></span>
                    <span>{new Date(post.createdAt).toDateString()}</span>

                </div>

                <div className="ViewDescription">

                    {updateMode ? <textarea name="" className='ParaDescriptionInput' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>

                        : <p className='ParaDescription'> {desc} </p>}


                </div>
                {updateMode && <div className='updateButton'>
                    <button className='updateButtonInput' onClick={handleUpdate} >Update</button>
                </div>}


            </div>


        </div>
    )
}

export default ViewComponent