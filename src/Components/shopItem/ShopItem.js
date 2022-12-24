import React from 'react'
import { useState, useEffect, useContext} from 'react';
import { Link, useParams , useNavigate} from "react-router-dom";
import menWears from "../Apparel/wears/men"
import womenWears from "../Apparel/wears/women"
import kidWears from "../Apparel/wears/kids"
import "./shopitem.css"
import {CartContext} from "../../App"

function ShopItem() {
    const cartItem = useContext(CartContext);
    // const {cart, setCart} = cartItem
    const cart = cartItem.cart
    const setCart = cartItem.setCart
    const { id, name } = useParams();
    const [quantity, setQuantity] = useState(1)
    let data
    switch (name) {
      case "women-apparel":
          data = womenWears
          break;
      case "kids-apparel":
          data = kidWears
          break;
      default:
          data = menWears
          break
    }
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("authenticated")){
        navigate("/sign-in")
        }
    }, [navigate])
    useEffect(() => {
        setQuantity(1)
    }, [id])
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
    const increaseQuantity = ()=> {
        setQuantity(quantity+1)
    }
    const decreaseQuantity = ()=> {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }
    const addToCart = () => {
        const exist = cart.find((wear) => wear.id === item.id && wear.apparel === name);
        if(JSON.stringify(cart) === "[{}]" || JSON.stringify(cart) === "[]"){
            setCart([{ ...item, apparel: name, quantity: quantity }])
        } else if (exist) {
        setCart(
            cart.map((wear) =>
            wear.id === item.id ? { ...exist, quantity: quantity} : item
            )
        )
        } else {
        setCart([...cart, { ...item, apparel: name, quantity: quantity }]);
        }
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    // console.log(JSON.parse(localStorage.getItem("cart")))
    // console.log(cart)
    return (
        <div className='shop_item'>
            <div className="shop_product">
                <div className="left">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="right">
                    <h2>{item.name}</h2>
                    <h3>${item.price}</h3>
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
                    <button 
                    className="add"
                    onClick={addToCart}
                    >Add to Cart</button>
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
                                        <Link to={`/shop/${name}/${data[random].id}`}>
                                            <img src={data[random].image} alt={data[random].name}/>
                                        </Link>
                                    </div>
                                    <div className="product_title_details">
                                        <Link to={`/shop/${name}/${data[random].id}`}>
                                            <h5 className='item-name'>{data[random].name}</h5>
                                        </Link>
                                        <h5 className='item-price'>${data[random].price}</h5>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
        </div>

  )
}

export default ShopItem