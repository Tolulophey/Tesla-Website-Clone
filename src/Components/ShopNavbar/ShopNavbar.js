import React,{useState, useContext, useEffect} from 'react'
import './ShopNavbar.css'
import logo2 from '../../assets/tesla-logo-png-201.png'
import logo from '../../assets/tesla-logo-png-20.png'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {BsCart2} from 'react-icons/bs'
import {Link} from "react-router-dom"
// import { SlArrowDown } from "react-icons/sl";
import {CartContext} from "../../App"



function ShopNavbar() {
  const cartItem = useContext(CartContext);
  const cart = cartItem.cart
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNabvar] = useState(false);

  const showMenu = () => setToggleMenu(!toggleMenu)
  

  // const showMenu = () => setToggleMenu(!toggleMenu)

  const changeBackground =(e) =>{
    var currentScroll = window.scrollY
    if(currentScroll > 0){
        setNabvar(true)
    } else{
      setNabvar(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, [navbar])
  return (
    <div class={navbar ? 'navbar active' : 'navbar'}>
        <div className="logo">
            <img src={logo} alt="navbar_logo" className='site-logo'/>
            <img src={logo2} alt="navbar_logo" className="site-logo2"/>
            <div className={navbar ? 'divide active' : 'divide'}></div>
            <p className={navbar ? 'shop active' : 'shop'}>Shop</p>
        </div>
        <div className={navbar ? 'shopnavbar-links active' : 'shopnavbar-links'}>
          <ul>
            <li>Charging</li>
            <li>Vehicle Accessories</li>
            <li>Apparel</li>
            <li>Lifestyle</li>
          </ul>
        </div>
        <div className="buttons">
            <Link 
            to="/cart" 
            className={cart.length >= 1 && cart[0] !== {} ? 'cart active' : 'cart'}
            >
              <BsCart2 className={navbar ? 'shop-cart active' : 'shop-cart'}/>
              <p>{cart.length}</p>
            </Link>
            {/* <Link to="sign-in" className='account'>Account</Link> */}
            <Link to="/sign-in" className={navbar ? 'shoplogin active' : 'shoplogin'}> Logout</Link>
        </div>

        <div className={navbar ? 'navbar_smallscreen active' : 'navbar_smallscreen'}>
        <GiHamburgerMenu cursor="pointer" color="#fff" fontSize={27}  onClick={showMenu} className="hamburger"/>
        {
        toggleMenu && (
        <div className="smallscreen-overlay">
          <AiOutlineClose color="#fff" cursor="pointer" fontSize={27} className="overlay-close" onClick={showMenu}/>
          <ul className='smallscreen-links' onClick={showMenu}>
            <li className='opensans'><a href="#home">Charging</a></li>
            <li className='opensans'><a href="#about">Vehicle Accessories</a></li>
            <li className='opensans'><a href="#menu">Apparel</a></li>
            <li className='opensans'><a href="#gallery">Lifestyle</a></li>
            <li className='opensans'><a href="#contact">Contact</a></li>
            
        </ul>
        </div>
        )}
        
      </div>
    </div>
  )
}

export default ShopNavbar
