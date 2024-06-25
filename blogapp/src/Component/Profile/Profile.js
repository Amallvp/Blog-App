import React, { useContext, useState } from 'react'
import './Profile.css'
import { Context } from '../../Context/Context'
import axios from 'axios'
import BASE_URL from '../../config'


function Profile() {

     const PF = "http://localhost:5000/images/"

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [file, setFile] = useState(null)
    const [userUpdated,setUserUpdated]=useState(false)

    const {user ,dispatch}=useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type:"UPDATE_START"})

        const updatedUser = {
            userId:user._id,
            username,
            email,
            password
            
        }

        if (file) {

            const formData = new FormData();
            const filename = Date.now() + file.name

            formData.append("name", filename)
            formData.append("file", file)
            updatedUser.profilepic = filename

            try {


                await axios.post(`${BASE_URL}/upload`, formData)
            }
            catch { }
        }
        try {
         const res=  await axios.put(`${BASE_URL}/user/${user._id}`,updatedUser)

         console.log(res);
         dispatch({type:"UPDATE_SUCCESS",payload:res.data})
        
window.location.reload(`${BASE_URL}/user/${user._id}`)
        } 
      
        
        catch {    dispatch({type:"UPDATE_ERROR"}) }

    }

    return (
        <div className="profile">
            <div className="profileDetails">
                <div className="profileTitle">
                    <span className='pTitle1'>Update Your Account</span>
                    <span className='pTitle2'>Delete Account</span>
                </div>



                <form action="" onSubmit={handleSubmit}>

                    <div className='profileMain'>
                        <span className='profileMainTitle'>Profile Picture</span>

                        <div className="profileImage">
                            <img className='profileImg' src={file ? URL.createObjectURL(file) : PF+user.profilepic} alt=""  />
                            <div className='profileIcon'>
                                <label htmlFor="profileDetailsIcon">
                                    <i className="profileIcon fa-regular fa-circle-user"></i>
                                </label>
                                <input type="file" id='profileDetailsIcon' style={{ display: 'none' }}  onChange={(e) => setFile(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className="profileUserDetails">

                            <label className='labelTitle'>Username</label>
                            <input className='profileUserInput' type="text" value={username} placeholder={user.username}
                            
                            onChange={e => setUsername(e.target.value)}

                            id='profileUserInput1' />

                            <label className='labelTitle'>Email</label>
                            <input className='profileUserInput' type="email" placeholder={user.email} 
                            
                            onChange={e => setEmail(e.target.value)}
                            
                            id='profileUserInput2' />

                            <label  className='labelTitle'>Password</label>
                            <input className='profileUserInput' type="password" 
                            
                            onChange={e => setPassword(e.target.value)}
                            
                            id='profileUserInput3' />

                            <button className='profileSubmit' type='submit'>Submit</button>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default Profile