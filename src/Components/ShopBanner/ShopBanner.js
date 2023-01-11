import React, {useContext} from 'react'
import ShopNavbar from '../ShopNavbar/ShopNavbar'
import './ShopBanner.css'
import {NavContext} from "../../App"
// import {BsChevronDown} from 'react-icons/bs'
// import SecondButton from '../../Reusuables/SecondButton/Button'
// import {motion} from 'framer-motion'

function Banner() {
  const {navbar,setNavbar} = useContext(NavContext);
  // const [banner, setBanner] = useState (false);

  // const fadeTitle = () =>{
  //   if(window.scrollY >=300){
  //     setBanner(true)
  //   }else{
  //     setBanner(false);
  //   }
  // }
  const changeBackground =() =>{
    if(!navbar){
      setNavbar(true)
    }
  }

  
  // window.addEventListener('scroll', fadeTitle);

  return (
    <div className='Shopbanner' onLoad={setNavbar(true)}>
       <ShopNavbar navbar={navbar} changeBackground = {changeBackground}/>
       <div className="shop-banner-info">
            <h1>Wall Connector</h1>
            <p>The most convienient way to charge at home</p>
            <button className='shop-now'>Shop Now</button>
            {/* <BsChevronDown animate={{rotate: [0,50,0,0]}} transition={{repeat:Infinity,duration:3.5}} className='arrow-down'/> */}
       </div>
    </div>
  )
}

export default Banner