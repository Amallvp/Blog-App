import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'


function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen(!isOpen)


    const PF = "http://localhost:5000/images/"

    const { user, dispatch } = useContext(Context)


    const handleLogout = () => {

        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="navbar">



            <div className='navbar-items-wrapper'>
                <div className={isOpen ? "navbar-items active" : "navbar-items"}>
                    <div className="navbar-left">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-pinterest"></i>
                    </div>
    
                    <ul className="navbar-center">
                        <li><Link className='link' to={'/'} onClick={()=>setIsOpen(!isOpen)}>Home</Link></li>
                        {user ? <Link className='link' to={'/about'}><li onClick={()=>setIsOpen(!isOpen)}>About</li></Link> : ""}
                        <Link className='link' to={'/'}><li onClick={()=>setIsOpen(!isOpen)}>Contact</li></Link>
                        <Link className='link' to={'/write'}><li onClick={()=>setIsOpen(!isOpen)}>Write</li></Link>
                        <Link className='link' to={'/login'}><li onClick={handleLogout}>{user ? "Logout" : "Login"}</li></Link>
                    </ul>
    
                    <div className="navbar-right">
                        <Link to={'/profileSettings'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {user ? <img className='navbar-img'
                                src={PF + user.profilepic}
                                alt="" /> : ""}
    
                        </Link>
    
                        <i class="navbar-icon fa-solid fa-magnifying-glass"></i>
                    </div>
    
                </div>
            </div>
            <div>
                <div></div>
                <i onClick={handleClick} className={isOpen ? "navbaricon1 fa-solid fa-bars" : "navbaricon1 times fa-solid fa-times"}></i>
            </div>


        </div>
    )
}

export default Navbar