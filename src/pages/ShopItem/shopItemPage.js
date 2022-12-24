import React, {useContext, useEffect} from 'react'
import ShopNavbar from '../../Components/ShopNavbar/ShopNavbar'
import ShopItem from '../../Components/shopItem/ShopItem'
import Footer from '../../Components/Footer/Footer'
import {NavContext} from "../../App"


const ShopItemPage = () => {
  const {navbar,setNavbar} = useContext(NavContext);
  const changeBackground =() =>{
    if(window.scrollY > 0){
        setNavbar(true)
    } else{
      setNavbar(false);
    }
  }
  useEffect(() => {
    window.addEventListener("load", ()=>{
      if(!navbar){
        setNavbar(true)
      }
    })
    return () => {
      window.removeEventListener("load", ()=>{
      if(!navbar){
        setNavbar(true)
      }
    })}
  }, [navbar,setNavbar])


  return (
    <div className='product'>
      <ShopNavbar navbar={navbar} changeBackground = {changeBackground} />
      <ShopItem />
      <Footer/>
    </div>
  )
}

export default ShopItemPage