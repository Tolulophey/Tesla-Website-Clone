import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo2 from '../../assets/tesla-logo-png-201.png'
import logo from '../../assets/tesla-logo-png-20.png'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {BsCart2} from 'react-icons/bs'
import {useNavigate} from "react-router-dom"
import {CartContext} from "../../App"
import { HashLink } from 'react-router-hash-link';


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const {cart} = useContext(CartContext);
  const [navbar, setNabvar] = useState(false);
  const navigate = useNavigate()
  let auth = JSON.parse(localStorage.getItem("authenticated"))
  const handleRoute = ()=>{
    if(auth){
      navigate("/shop")
    } else{
      navigate("/sign-in")
    }
  }
  const logOut =() =>{
    localStorage.clear()
    navigate("/sign-in")
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
      <div className={
        navbar && toggleMenu ? 'home-navbar show active' :
          !navbar && toggleMenu ? "home-navbar show" :
            navbar && !toggleMenu ? "home-navbar active": 'home-navbar'
      }>
        <div className="top">
          <div className="home-logo">
            <img src={logo} alt="navbar_logo" className='site-logo'/>
            <img src={logo2} alt="navbar_logo" className="site-logo2"/>
          </div>
          <div className="hamburger-menu">
            <GiHamburgerMenu cursor="pointer" fontSize={27} className="hamburger"  onClick={() => setToggleMenu(!toggleMenu)}/>
            <AiOutlineClose cursor="pointer" fontSize={27} className="close" onClick={()=>setToggleMenu(false)}/>
          </div>
        </div>
        <div className="bottom">
          <div className={navbar ? 'home-navbar-links active' : 'home-navbar-links'}>
            <ul onClick={()=>setToggleMenu(false)}>
              <HashLink to="#model3">
                <li>Model 3</li>
              </HashLink>
              <HashLink to="#modely">
                <li>Model Y</li>
              </HashLink>
              <HashLink to="#models">
                <li>Model S</li>
              </HashLink>
              <HashLink to="#modelx">
                <li>Model X</li>
              </HashLink>
              <HashLink to="#solar-panels">
                <li>Solar Panels</li>
              </HashLink>
              <HashLink to="#solar-roof">
                <li>Solar Roof</li>
              </HashLink>
            </ul>
          </div>
          <div className="home-buttons" onClick={()=>setToggleMenu(false)}>
            {auth && <Link 
            to="/cart" 
            className={cart.length >= 1 && JSON.stringify(cart) !== "[{}]" ? 'cart active' : 'cart'}
            >
              <BsCart2 className={navbar ? 'shop-cart active' : 'shop-cart'}/>
              <p>{cart.length}</p>
            </Link>}
            {!auth && <p className='myAccount' onClick={handleRoute}>Login</p>}
            {auth && <p className={navbar ? 'home-login active' : 'home-login'} onClick={logOut}>Logout</p>}
          </div>
        </div>
    </div>
  )
}

export default React.memo(Navbar)
