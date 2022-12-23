import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Banner.css'
import {BsChevronDown} from 'react-icons/bs'
import FirstButton from '../../Reusuables/FirstButton/Button'
// import {motion} from 'framer-motion'

function Banner() {

  // const [banner, setBanner] = useState (false);

  // const fadeTitle = () =>{
  //   if(window.scrollY >=300){
  //     setBanner(true)
  //   }else{
  //     setBanner(false);
  //   }
  // }

  // window.addEventListener('scroll', fadeTitle);

  return (
    <div className='Banner' id='model3'>
       <Navbar/>
       <div className="banner-info">
            <h1>Model 3</h1>
            <Link to="#">Schedule a Test Drive</Link>
            <FirstButton/>
            <BsChevronDown animate={{rotate: [0,50,0,0]}} transition={{repeat:Infinity,duration:3.5}} className='arrow-down'/>
       </div>
    </div>
  )
}

export default Banner