import React from 'react'
import './ShopNavbar.css'
import logo from '../../assets/tesla-logo-png-20.png'
import {BsCart2} from 'react-icons/bs'
import {Link} from "react-router-dom"
// import { SlArrowDown } from "react-icons/sl";


function Navbar() {
  return (
    <div class="navbar">
        <div class="logo">
            <img src={logo} alt="navbar_logo" className="site-logo"/>
            <div/>
            <p>Shop</p>
        </div>
        <div class="navbar-links">
          <ul>
            <li>Charging</li>
            <li>Vehicle Accessories</li>
            <li>Apparel</li>
            <li>Lifestyle</li>
          </ul>
        </div>
        <div class="buttons">
            <BsCart2 className='cart'/>
            {/* <Link to="sign-in" className='account'>Account</Link> */}
            <Link to="/sign-in" className="login"> Logout</Link>
        </div>
    </div>
  )
}

export default Navbar
