import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'


function Navbar() {

    const PF = "http://localhost:5000/images/"

    const { user,dispatch } = useContext(Context)
    

    const handleLogout = () => {

        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="navbar">


        <>
                <div className="navbar-items">
                    <div className="navbar-left">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-pinterest"></i>
                    </div>
                    <div className="navbar-center">
                        <ul className="navbar-center">
                            <li><Link className='link' to={'/'}>Home</Link></li>
                            {user ? <Link className='link' to={'/about'}><li>About</li></Link> : ""}
                            <Link className='link' to={'/'}><li>Contact</li></Link>
                            <Link className='link' to={'/write'}><li>Write</li></Link>
                            <Link className='link' to={'/login'}><li onClick={handleLogout}>{user ? "Logout" : "Login"}</li></Link>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <Link to={'/profileSettings'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {user ? <img className='navbar-img'
                                src={PF + user.profilepic}
                                alt="" /> : ""}
    
                        </Link>
    
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
        </>
        </div>
    )
}

export default Navbar