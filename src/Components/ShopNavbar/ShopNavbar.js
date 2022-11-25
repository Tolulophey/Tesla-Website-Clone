import React,{useState} from 'react'
import './ShopNavbar.css'
import logo2 from '../../assets/tesla-logo-png-201.png'
import logo from '../../assets/tesla-logo-png-20.png'
import {BsCart2} from 'react-icons/bs'
import {Link} from "react-router-dom"
// import { SlArrowDown } from "react-icons/sl";


function Navbar() {

  // const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNabvar] = useState(false);
  

  // const showMenu = () => setToggleMenu(!toggleMenu)

  const changeBackground =() =>{
    if(window.scrollY >=1){
      setNabvar(true)
    }else{
      setNabvar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <div class={navbar ? 'navbar active' : 'navbar'}>
        <div className="logo">
            <img src={logo2} alt="navbar_logo" className="site-logo"/>
            <img src={logo} alt="navbar_logo" className={navbar ? 'site-logo2 active' : 'site-logo2'}/>
            <div className={navbar ? 'divide active' : 'divide'}></div>
            <p className={navbar ? 'shop active' : 'shop'}>Shop</p>
        </div>
        <div class={navbar ? 'shopnavbar-links active' : 'shopnavbar-links'}>
          <ul>
            <li>Charging</li>
            <li>Vehicle Accessories</li>
            <li>Apparel</li>
            <li>Lifestyle</li>
          </ul>
        </div>
        <div class="buttons">
            <BsCart2 className={navbar ? 'shop-cart active' : 'shop-cart'}/>
            {/* <Link to="sign-in" className='account'>Account</Link> */}
            <Link to="/sign-in" className={navbar ? 'shoplogin active' : 'shoplogin'}> Logout</Link>
        </div>
    </div>
  )
}

export default Navbar
