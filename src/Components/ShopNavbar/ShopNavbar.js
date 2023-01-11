import React,{useState, useContext, useEffect} from 'react'
import './ShopNavbar.css'
import logo2 from '../../assets/tesla-logo-png-201.png'
import logo from '../../assets/tesla-logo-png-20.png'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {BsCart2} from 'react-icons/bs'
import {Link, useNavigate} from "react-router-dom"
import {CartContext} from "../../App"

function ShopNavbar({changeBackground, navbar}) {
  const navigate = useNavigate()
  let auth = JSON.parse(localStorage.getItem("authenticated"))
  const {cart} = useContext(CartContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const logOut =() =>{
    localStorage.clear()
    navigate("/sign-in")
  }
  const goShop =() =>{
    if(window.location.pathname !== "/shop"){
      navigate("/shop")
    }
  }
  const goHome =() =>{
    if(window.location.pathname !== "/"){
      navigate("/")
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
  }, [changeBackground])
  return (
    <div className={
      navbar && toggleMenu ? 'navbar show active' :
        !navbar && toggleMenu ? "navbar show" :
          navbar && !toggleMenu ? "navbar active": 'navbar'
    }>
      <div className="top">
        <div className="logo">
            <img src={logo} alt="navbar_logo" className='site-logo' onClick={goHome}/>
            <img src={logo2} alt="navbar_logo" className="site-logo2" onClick={goHome}/>
            <div className={navbar ? 'divide active' : 'divide'}></div>
            <p className={navbar ? 'shop active' : 'shop'} onClick={goShop}>Shop</p>
        </div>
        <div className="hamburger-menu">
          <GiHamburgerMenu cursor="pointer" fontSize={27} className="hamburger"  onClick={() => setToggleMenu(!toggleMenu)}/>
          <AiOutlineClose cursor="pointer" fontSize={27} className="close" onClick={()=>setToggleMenu(false)}/>
        </div>
      </div>
      <div className="bottom">
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
        <div className="buttons" onClick={()=>setToggleMenu(false)}>
            <Link 
            to="/cart" 
            className={cart.length >= 1 && JSON.stringify(cart) !== "[{}]" ? 'cart active' : 'cart'}
            >
              <BsCart2 className={navbar ? 'shop-cart active' : 'shop-cart'}/>
              <p>{cart.length}</p>
            </Link>
            {auth && <p onClick={logOut} className={navbar ? 'shoplogin active' : 'shoplogin'}> Logout</p>}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ShopNavbar)