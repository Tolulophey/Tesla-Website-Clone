import React from 'react'
import './SixthBanner.css'
import accessories from '../../assets/dd739764-bcaa-4263-9488-8c73bc9fb046.jpg'

function SixthBanner() {
  return (
    <div className='sixthbanner' id='solar-roof'>
        <h1>Accessories</h1>
        <img src={accessories} alt="accessories" className='accessories'/>
       <button className='shop-now'>Shop Now</button>
    </div>
  )
}

export default React.memo(SixthBanner)