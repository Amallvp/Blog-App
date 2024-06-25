import React, { useContext, useState } from 'react'
import './Write.css'
import axios from 'axios'
import { Context } from '../../Context/Context'
import BASE_URL from '../../config'


function Write() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {
            username: user.username,
            title,
            desc
        }

        if (file) {

            const formData = new FormData();
            const filename = Date.now() + file.name

            formData.append("name", filename)
            formData.append("file", file)
            newPost.photo = filename

            try {


                await axios.post(`${BASE_URL}/upload`, formData)
            }
            catch { }
        }
        try {
            const res = await axios.post(`${BASE_URL}/posts/create`,newPost)
            window.location.replace('/view/' + res.data._id)

        } catch { }

    }

    return (
        <div className="write">
            <div className='writeImg'>
                {file && <img className='inputImg'
                    src={URL.createObjectURL(file)}
                    alt="" />}



            </div>
            <div className="writeInput">


                <form action="" className="writeForm" onSubmit={handleSubmit}>
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput"><i className="inputIcon fa-solid fa-plus fa-fade"></i></label>
                        <input className='writeFile' type="file" id='fileInput' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />

                        <input className='writeInputText' type="text"

                            onChange={e => setTitle(e.target.value)}

                            placeholder='Title' autoFocus={true} />
                    </div>

                    <div className="writeFormGroup">
                        <textarea className="writeInputTextarea" id=""

                            onChange={e => setDesc(e.target.value)}

                            placeholder='tell your story...'></textarea>
                    </div>

                    <button className='writeSubmit' type='submit'>Publish</button>
                </form>
            </div>
        </div>
    )
}

export default Write