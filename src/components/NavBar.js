import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div classname="navbar">
        <Link to="#" className="menu-bars">
            <FaIcons.FaBars />
        </Link>
      </div>
    </>
  )
}

export default NavBar
