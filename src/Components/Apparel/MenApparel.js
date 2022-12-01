import React from 'react'
import { Link } from 'react-router-dom'
// import './MenApparel.css'
import './menShop.css'
import wears from './MenData'
// import ShopNavbar from '../ShopNavbar/ShopNavbar'
// import { Link } from 'react-router-dom'

const MenApparel = () => {
  return (
    <div className="menApparel">
        <h1>Men</h1>
        <h3>Best Sellers</h3>
        <div className='men-container'>
          {/* {wears.map((men,index)=>{
          return(
            <div className="card">
              <img src={men.image} alt="img" key={index+1}/>
              <div className="Menapparel-card-container-content">
                <p className='item-name'>{men.name}</p>
                <p className='item-price'>{men.price}</p>
              </div>
            </div>
            
          )
          })} */}
          {wears.map((men,index)=>{
              return (
                <div className="product_card" key={index+1}>
                    <div className="product_img">
                        <Link to={`/shop/men-apparel/${men.id}`}>
                            <img src={men.image} alt={men.name}/>
                        </Link>
                    </div>
                    <div className="product_title_details">
                        <Link to={`/shop/men-apparel/${men.id}`}>
                            <h5 className='item-name'>{men.name}</h5>
                        </Link>
                        <h5 className='item-price'>{men.price}</h5>
                    </div>
                </div>
          )})}
        </div>
      
    </div>
  )
}

export default MenApparel