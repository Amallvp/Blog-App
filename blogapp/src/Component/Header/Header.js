import React from 'react'
import "./Header.css"
import img1 from '../../assets/img1.jpg'

function Header() {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="headerTitle1">vp's Amazing</span>
                <span className="headerTitle2">Blogz</span>
            </div>
<img className='header-img' src={img1} alt="" />
        </div>
    )
}

export default Header