import React, { useContext, useRef } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import axios from 'axios'
import BASE_URL from '../../config'


function Login() {

    const navigate =useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()

    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async(e) => {
        e.preventDefault()

        dispatch({ type: "LOGIN_START" })

        try {

            const res = await axios.post(`${BASE_URL}/login`, {
                email:emailRef.current.value,
                password:passwordRef.current.value,

            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })

            navigate('/')

        } catch(err) {

            dispatch({ type: "LOGIN_ERROR" })
        }

    }
 

    return (
        <div className="Login">

            <div className='LoginDetails'>
                <span className='loginTitle'>Login</span>

                    <form action="" className="LoginFormGroup" onSubmit={handleSubmit} >
    
    
                        <label className='labelInput'>Email</label>
                        <input type="email" className='LoginInput'
    
                            ref={emailRef}
    
                            placeholder='enter your email..' />
    
                        <label className='labelInput'>Password</label>
                        <input type="password" className='LoginInput'
                        
                        ref={passwordRef}
                        
                        placeholder='enter your password..' />
    
                        <button className='buttonInput' type='submit' disabled={isFetching}>Login</button>
                    </form>
                    <button className='signupbutton'><Link className='link' to={'/signup'}>Create New Account</Link></button>
            </div>
        </div>
    )
}

export default Login