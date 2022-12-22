import React,{useState, useContext, useEffect} from 'react'
import './ShopNavbar.css'
import logo2 from '../../assets/tesla-logo-png-201.png'
import logo from '../../assets/tesla-logo-png-20.png'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {BsCart2} from 'react-icons/bs'
import {Link, useNavigate} from "react-router-dom"
// import { SlArrowDown } from "react-icons/sl";
import {CartContext} from "../../App"

function ShopNavbar({changeBackground, navbar}) {
  const navigate = useNavigate()
  const cartItem = useContext(CartContext);
  const cart = cartItem.cart
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const logOut =() =>{
    localStorage.removeItem("authenticated")
    navigate("/sign-in")
  }
  const goShop =() =>{
    if(window.location.pathname !== "/shop"){
      navigate("/shop")
    }
  }
  const goHome =() =>{
    if(window.location.pathname !== "/shop"){
      navigate("/shop")
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
  }, [navbar, changeBackground])
  return (
    <div class={navbar ? 'navbar active' : 'navbar'}>
        <div className="logo">
            <img src={logo} alt="navbar_logo" className='site-logo' onClick={goHome}/>
            <img src={logo2} alt="navbar_logo" className="site-logo2" onClick={goHome}/>
            <div className={navbar ? 'divide active' : 'divide'}></div>
            <p className={navbar ? 'shop active' : 'shop'} onClick={goShop}>Shop</p>
        </div>
        <div className={navbar ? 'shopnavbar-links active' : 'shopnavbar-links'}>
          <ul onClick={()=>setToggleMenu(false)}>
            <Link to="/shop/men-apparel">
              <li>Men Apparel</li>
            </Link>
            <Link to="/shop/women-apparel">
              <li>Women Apparel</li>
            </Link>
            <Link to="/shop/kids-apparel">
              <li>Kids Apparel</li>
            </Link>
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
            <p to="/sign-in" onClick={logOut} className={navbar ? 'shoplogin active' : 'shoplogin'}> Logout</p>
        </div>
        <div className="hamburger-menu">
        <GiHamburgerMenu cursor="pointer" color="#000" fontSize={27}  onClick={() => setToggleMenu(!toggleMenu)} className="hamburger"/>
        <AiOutlineClose color="#fff" cursor="pointer" fontSize={27} className="overlay-close" onClick={()=>setToggleMenu(false)}/>
        </div>
    </div>
  )
}

export default ShopNavbar

/* <div className={navbar ? 'navbar_smallscreen active' : 'navbar_smallscreen'}>
<GiHamburgerMenu cursor="pointer" color="#000" fontSize={27}  onClick={() => setToggleMenu(!toggleMenu)} className="hamburger"/>
{
toggleMenu && (
<div className="smallscreen-overlay">
  <AiOutlineClose color="#fff" cursor="pointer" fontSize={27} className="overlay-close" onClick={setToggleMenu(false)}/>
  <ul className='smallscreen-links' onClick={setToggleMenu(false)}>
    <li className='opensans'><a href="#home">Charging</a></li>
    <li className='opensans'><a href="#about">Vehicle Accessories</a></li>
    <li className='opensans'><a href="#menu">Apparel</a></li>
    <li className='opensans'><a href="#gallery">Lifestyle</a></li>
    <li className='opensans' onClick={logOut}>Logout</li>
</ul>
</div>
)}

</div> */
