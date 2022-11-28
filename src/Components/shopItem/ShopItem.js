import React from 'react'
import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import data from "../MenApparel/MenData"
import "./shopitem.css"

function ShopItem() {
    const { id } = useParams();
    const randomIndex = []
    let randomNumber = Math.floor(Math.random()*data.length)
    while(randomIndex.length < 3){
        if(!randomIndex.includes(randomNumber) && randomNumber !== Number(id)){
            randomIndex.push(randomNumber)
        }
        randomNumber = Math.floor(Math.random()*data.length)
    }
    const item = data[id-1]
    const sizes = ["s", "m", "l", "xl", "xxl", "3xl"]
    const [quantity, setQuantity] = useState(1)
    const increaseQuantity = ()=> {
        setQuantity(quantity+1)
    }
    const decreaseQuantity = ()=> {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }
    return (
        <div className='shop_item'>
            <div className="shop_product">
                <div className="left">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="right">
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                    <div className="size">
                        <p>size</p>
                        <div className="sizes">
                            {sizes.map((size, index)=>{
                                return <span key={index+1}>{size}</span>
                            })}
                        </div>
                    </div>
                    <div className="quantity">
                        <p>Quantity</p>
                        <div className="change_quantity">
                            <span onClick={decreaseQuantity}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increaseQuantity}>+</span>
                        </div>
                    </div>
                    <button className="add">Add to Cart</button>
                    <div className="description">
                        <p>Description</p>
                        <p className='text'>{item.description}</p>
                        <p>See <a href={item.link}>Size Chart</a> for sizing and fit guidelines</p>
                    </div>
                </div>
            </div>
            <div className="recommended_product">
                <h3>Recommended Products</h3>
                <div className="recommended_products_cards">
                    {randomIndex.map((random, index)=>{
                        return <div className="product_card" key={index+1}>
                                    <div className="product_img">
                                        <Link to={`/shop/men-apparel/${data[random].id}`}>
                                            <img src={data[random].image} alt={data[random].name}/>
                                        </Link>
                                    </div>
                                    <div className="product_title_details">
                                        <Link to={`/shop/men-apparel/${data[random].id}`}>
                                            <h5 className='item-name'>{data[random].name}</h5>
                                        </Link>
                                        <h5 className='item-price'>{data[random].price}</h5>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
        </div>
  )
}

export default ShopItem