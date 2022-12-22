import React, { useState } from 'react'
import scrollRef from 'react'
// import Meal from './Meal'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import gallery01 from '../../assets/Desktop-ModelY.jpg'
import gallery02 from '../../assets/Homepage-Model-S-Desktop-LHD.jpg'
import gallery03 from '../../assets/Desktop-ModelY.jpg'
import gallery04 from '../../assets/tesla-g123fac81e_1920.jpg'
import gallery05 from '../../assets/Desktop-ModelY.jpg'
import './ProductSlide.css'
// import './Images.css'
import { Images } from 'react-bootstrap-icons';
// import spoon from '../../assets/spoon.png'


const images = [gallery01, gallery02, gallery03, gallery04, gallery05]
// const text = ["Men's Raven Lightweight Zip Up Bomber Jacket", "Men's Raven Lightweight Zip Up Bomber Jacket"]




function Photo() {
  
  const [first, setFirst] = useState (0);
  const [second, setSecond] = useState (1);
  const [third, setThird] = useState (2);
  const [fourth, setFourth] = useState (3);
  const meal1 = images[first]
  const meal2 = images[second]
  const meal3 = images[third]
  const meal4 = images[fourth]

  const checkNumber = (number) =>{
    if (number < 0  ){
      return images.length-1;
    }
    if (number > images.length -1){
      return 0;
    }
    return number;
  }

  const nextMeal =() =>{
   setFirst(checkNumber(first+1)) 
   setSecond(checkNumber(second+1)) 
   setThird(checkNumber(third+1)) 
   setFourth(checkNumber(fourth+1)) 
   
  }

  const prevMeal = ()=>{
    setFirst(checkNumber(first-1)) 
    setSecond(checkNumber(second-1)) 
    setThird(checkNumber(third-1)) 
    setFourth(checkNumber(fourth-1)) 
  }
  
  return (
    <div className='photo' id="gallery">
        <div className="app__gallery-images">
          {Images.map}
          <div className="app__gallery-images_container" ref={scrollRef}>
            <img src={meal1} alt="firstProduct"/>
            <img src={meal2} alt="secondProduct" className='secondProduct'/>
            <img src={meal3} alt="thirdProduct"/>
            <img src={meal4} alt="fourthProduct"/>
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={prevMeal}/>
            <div className="button">
              <button className='shop-now'>Shop Now</button>
            </div>
            <BsArrowRightShort className="gallery__arrow-icon" onClick={nextMeal}/>
          </div>
        </div>
    </div>
  )
}

export default Photo