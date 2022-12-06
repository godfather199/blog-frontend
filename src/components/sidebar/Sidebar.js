import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './sidebar.css'

function Sidebar() {
  const [cats, setCats] = useState([])
  const {user} = useContext(Context)
  const PF = 'http://localhost:5000/images/'

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('http://localhost:5000/api/categories')
      setCats(res.data)
    }

    getCats()
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          // src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg"
          src = 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400'
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          temporibus ea.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className = 'link'>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar