import React, {useContext, useEffect} from 'react'
import ShopNavbar from '../../Components/ShopNavbar/ShopNavbar'
import Apparel from '../../Components/Apparel/Apparel'
import Footer from '../../Components/Footer/Footer';
import {NavContext} from "../../App"


const ApparelPage = () => {
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
    <div className='menApparelpage'>
        <ShopNavbar navbar={navbar} changeBackground = {changeBackground}/>
        <Apparel />
        <Footer/>
    </div>
  )
}


export default ApparelPage
