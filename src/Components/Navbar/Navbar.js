import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/tesla-logo-png-20.png'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {BsCart2} from 'react-icons/bs'
import {useNavigate} from "react-router-dom"
// import { SlArrowDown } from "react-icons/sl";


function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNabvar] = useState(false);
  const navigate = useNavigate()
  const handleRoute = ()=>{
    if(localStorage.getItem("authenticated")){
      navigate("/shop")
    } else{
      navigate("/sign-in")
    }
  }
  const changeBackground =() =>{
    if(window.scrollY > 0){
        setNabvar(true)
    } else{
      setNabvar(false);
    }
  }
  useEffect(()=>{
    if(toggleMenu){
      document.querySelector("body").style.overflow = "hidden"
    }
    return ()=> {
      document.querySelector("body").style.overflow = "auto"
    }
  }, [toggleMenu])
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, [navbar])

  return (
    <div className={navbar ? 'home-navbar active' : 'home-navbar'}>
        <div className="home-logo">
            <img src={logo} alt="navbar_logo" className="home-site-logo"/>
        </div>
        <div className="home-navbar-links">
          <ul>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
          </ul>
        </div>
        <div className="home-buttons">
            <BsCart2 className='cart'/>
            <p 
            className='myAccount'
            onClick={handleRoute}
            >Account</p>
            <a href="#login" className="home-login"> Logout</a>
        </div>

        <div className={navbar ? 'navbar_smallscreen active' : 'navbar_smallscreen'}>
        <GiHamburgerMenu cursor="pointer" color="black" fontSize={27} onClick={()=>setToggleMenu(true)}  className="hamburger"/>
        {
        toggleMenu && (
        <div className="smallscreen-overlay">
          <AiOutlineClose color="#fff" cursor="pointer" fontSize={27} className="overlay-close" onClick={()=>setToggleMenu(false)}/>
          <ul className='smallscreen-links' onClick={()=>setToggleMenu(false)}>
            <li className='opensans'><a href="#home">Model S</a></li>
            <li className='opensans'><a href="#about">Model 3</a></li>
            <li className='opensans'><a href="#menu">Model X</a></li>
            <li className='opensans'><a href="#contact">Solar Roof</a></li>
            <li className='opensans'><a href="#contact">Solar Panels</a></li>
            <li className='opensans'><a href="#gallery">Account</a></li>
        </ul>
        </div>
        )}
        
      </div>
    </div>
  )
}

export default Navbar
