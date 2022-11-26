import React from 'react'
import './MenApparel.css'
import wears from './MenData'
// import ShopNavbar from '../ShopNavbar/ShopNavbar'
// import { Link } from 'react-router-dom'

const MenApparel = () => {
  return (
    <div className="menApparel">
        <h1>Men</h1>
        <p>Best Sellers</p>
        <div className='men-container'>
          {wears.map((men,index)=>{
          return(
            <div className="card">
              <img src={men.image} alt="img" key={index+1}/>
              <div className="Menapparel-card-container-content">
                <p className='item-name'>{men.name}</p>
                <p className='item-price'>{men.price}</p>
              </div>
            </div>
            
          )
          })}
        </div>
      
    </div>
  )
}

export default MenApparel