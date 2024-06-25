import React, { useContext, useEffect, useState } from 'react'
import './Sidebar.css'
import BASE_URL from '../../config'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

function Sidebar() {

    const [cat, setCat] = useState([])

    const {user}=useContext(Context)

    const PF = "http://localhost:5000/images/"

    useEffect(() => {

        const fetchCat = async () => {

            const res = await axios.get(`${BASE_URL}/category`)
            setCat(res.data);
        }
        fetchCat()
    },[])

    return (
        <div className='sidebar'>

            <div className="sidebarItems">

                <span className="sidebarTitle">ABOUT ME</span>
              {user &&  <img src={PF+ user.profilepic} alt="" />}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptas dolor
                    sit ipsum tempore magnam, consectetur incidunt laborum cupiditate </p>


            </div>

            <div className="sidebarItems">

                <span className="sidebarTitle">CATEGORIES</span>

                <ul className="sidebarList">
                    {cat.map((c) => (
                       <Link to={`/?cat=${c.name}`} className='link'> <li className="sidebarLists">{c.name}</li></Link>
                    ))}



                </ul>


            </div>

            <div className="sidebarItems">

                <div className="sidebarTitle">
                    <span>FOLLOW US</span>
                </div>

                <div className="sidebarIcons">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-pinterest"></i>
                </div>
            </div>


        </div>
    )
}

export default Sidebar