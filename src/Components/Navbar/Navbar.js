import React from 'react'
import './Navbar.css'
import logo from '../../assets/tesla-logo-png-20.png'
// import {GiHamburgerMenu} from 'react-icons/gi';
// import {AiOutlineClose} from 'react-icons/ai';
import {BsCart2} from 'react-icons/bs'
import {useNavigate} from "react-router-dom"
// import { SlArrowDown } from "react-icons/sl";


function Navbar() {
  const navigate = useNavigate()
  const handleRoute = ()=>{
    if(localStorage.getItem("authenticated")){
      navigate("/shop")
    } else{
      navigate("/sign-in")
    }
  }
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
            <p 
            className='myAccount'
            onClick={handleRoute}
            >Account</p>
            <a href="#login" className="login"> Logout</a>
        </div>
    </div>
  )
}

export default Navbar
