import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../../config'


function Signup() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {

      const res = await axios.post(`${BASE_URL}/register`, {
        username,
        email,
        password
      })
      res.data && navigate('/login')

    } catch (err) {
      setError(true)
    }

  }

  return (
    <div className="signup">

      <div className='signupDetails'>

        <span className='signupTitle'>signup</span>

        <form action="" className="signupFormGroup" onSubmit={handleSubmit} >

          <label className='SignuplabelInput'>Name</label>
          <input type="text" className='signupInput'

            onChange={e => setUsername(e.target.value)}

            placeholder='enter your username....' />

          <label className='SignuplabelInput'>Email</label>
          <input type="email" className='signupInput'

            onChange={e => setEmail(e.target.value)}

            placeholder='enter your email....' />

          <label className='SignuplabelInput'>Password</label>
          <input type="password" className='signupInput'

            onChange={e => setPassword(e.target.value)}

            placeholder='enter your password....' />

          <button className='SignupbuttonInput' type='submit'>signup</button>
        </form>

        {error ? <span style={{color:'#AD0E0E' , marginTop:'20px'}}>Something Went Wrong..!! </span> :  <span className='signuplink'><Link className='link' to={'/login'}>Already Have account ?</Link></span> }
      
      </div>
    </div>
  )
}

export default Signup