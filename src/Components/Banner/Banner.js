import React from 'react'
import Navbar from '../Navbar/Navbar'
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
    <div className='Banner'>
       <Navbar/>
       <div className="banner-info">
            <h1>Model 3</h1>
            <a href="https://www.google.com">Schedule a Test Drive</a>
            <FirstButton/>
            <BsChevronDown animate={{rotate: [0,50,0,0]}} transition={{repeat:Infinity,duration:3.5}} className='arrow-down'/>
       </div>
    </div>
  )
}

export default Banner