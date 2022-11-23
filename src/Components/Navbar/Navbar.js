import React from 'react'
import './Navbar.css'
import logo from '../../assets/tesla-logo-png-20.png'
import {BsCart2} from 'react-icons/bs'
import {Link} from "react-router-dom"
// import { SlArrowDown } from "react-icons/sl";


function Navbar() {
  return (
    <div class="navbar">
        <div class="logo">
            <img src={logo} alt="navbar_logo" className="site-logo"/>
        </div>
        <div class="navbar-links">
          <ul>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
          </ul>
        </div>
        <div class="buttons">
            <BsCart2 className='cart'/>
            <Link to="sign-in" className='account'>Account</Link>
            <a href="#login" className="login"> Logout</a>
        </div>
    </div>
  )
}

export default Navbar
