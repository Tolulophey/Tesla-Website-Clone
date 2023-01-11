import React, { useState } from 'react'
// import scrollRef from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import gallery01 from '../../assets/Desktop-ModelY.jpg'
import gallery02 from '../../assets/Homepage-Model-S-Desktop-LHD.jpg'
import gallery03 from '../../assets/Desktop-ModelY.jpg'
import gallery04 from '../../assets/tesla-g123fac81e_1920.jpg'
import gallery05 from '../../assets/Desktop-ModelY.jpg'
import './ProductSlide.css'
import { Images } from 'react-bootstrap-icons';


const images = [gallery01, gallery02, gallery03, gallery04, gallery05]


function Photo() {
  
  const [first, setFirst] = useState (0);
  const [second, setSecond] = useState (1);
  const [third, setThird] = useState (2);
  const photo1 = images[first]
  const photo2 = images[second]
  const photo3 = images[third]

  const checkNumber = (number) =>{
    if (number < 0  ){
      return images.length-1;
    }
    if (number > images.length -1){
      return 0;
    }
    return number;
  }

  const nextPhoto = () =>{
   setFirst(checkNumber(first+1)) 
   setSecond(checkNumber(second+1)) 
   setThird(checkNumber(third+1)) 
  }

  const prevPhoto = ()=>{
    setFirst(checkNumber(first-1)) 
    setSecond(checkNumber(second-1)) 
    setThird(checkNumber(third-1)) 
  }
  
  return (
    <div className='photo' id="gallery">
        <div className="app__gallery-images">
          {Images.map}
          {/* <div className="app__gallery-images_container" ref={scrollRef}> */}
          <div className="app__gallery-images_container">
            <img src={photo1} alt="firstProduct"/>
            <img src={photo2} alt="secondProduct" className='secondProduct'/>
            <img src={photo3} alt="thirdProduct"/>
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={prevPhoto}/>
            <div className="button">
              <button className='shop-now'>Shop Now</button>
            </div>
            <BsArrowRightShort className="gallery__arrow-icon" onClick={nextPhoto}/>
          </div>
        </div>
    </div>
  )
}

export default React.memo(Photo)