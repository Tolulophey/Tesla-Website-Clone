import React, {useState, useEffect, useContext} from 'react'
import menWears from "../../Components/Apparel/wears/men"
import { useNavigate } from 'react-router-dom'
import womenWears from "../../Components//Apparel/wears/women"
import kidWears from "../../Components//Apparel/wears/kids"
import './cart.css'
import {CartContext} from "../../App"
import {AiFillDelete} from 'react-icons/ai'

const Cart = () => {
    const CartItem = useContext(CartContext);
    const navigate = useNavigate();
    const [price, setPrice] = useState(0);
    const {myCart, handleChange, handleRemove} = CartItem;
    useEffect(()=>{
        if(!localStorage.getItem("authenticated")){
             navigate("/sign-in")
        }
    }, [navigate])
    useEffect(() => {
        let ans = 0;
        if(JSON.stringify(myCart) !== "[]" || JSON.stringify(myCart) !== "[{}]"){
            myCart.map((item) => (ans += item.quantity * item.price));
        }
        setPrice(ans);
    }, [myCart,handleRemove])
    
    return (
        <div className='cart'>
            <div className='cart-title'>
             <h1>Cart</h1>
            </div>
            <div className='cart-items'>  
                {JSON.stringify(myCart) === "[]" || JSON.stringify(myCart) === "[{}]" ? 
                <p>Nothing in Cart</p> : 
                myCart.map((item, index)=>{
                    return (
                        <div className="cart-item" key={index+1}>
                            <div className="cart-item-img">
                                <img 
                                src={item.apparel === "men-apparel"? menWears[item.id-1].image
                                        : item.apparel === "women-apparel" ? womenWears[item.id-1].image
                                            : kidWears[item.id-1].image} 
                                alt="img"
                                />
                            </div>
                            <div className="cart-item-details">
                                <p>{item.name}</p>
                                <div className="cart-item-price">
                                    <div className='price-change-btn'>
                                        <button onClick={() => handleChange(item, -1)} className="decrement">-</button>
                                        <button className='item-price'>${item.price}</button>
                                        <button onClick={() => handleChange(item, 1)} className="increment">+</button>
                                    </div>
                                    <div className='item-total'>
                                        <span className='total-price'>${item.price * item.quantity}</span>
                                        <AiFillDelete className='remove-btn' onClick={() => handleRemove(item.id)}/>
                                    </div>
                                </div>
                            </div>
                    </div>
                    )}
                )}
            </div>
            <div className="total">
                <span>Total Price of your Cart</span>
                <span> ${price}</span>
            </div>
        </div>
       
  )
}

export default Cart

