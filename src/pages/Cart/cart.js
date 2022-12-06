import React, {useState, useEffect, useContext} from 'react'
import menWears from "../../Components/Apparel/wears/men"
import womenWears from "../../Components//Apparel/wears/women"
import kidWears from "../../Components//Apparel/wears/kids"
import './cart.css'
import {CartContext} from "../../App"

const Cart = () => {
    const CartItem = useContext(CartContext);
    const [price, setPrice] = useState(0);
    const {cart,setCart, handleChange, handleRemove} = CartItem;
    useEffect(() => {
        let ans = 0;
        if(cart[0].id !== undefined){
            cart.map((item) => (ans += item.quantity * item.price));
        }
        setPrice(ans);
    }, [setCart,cart,handleRemove])
    
    return (
        <article>
            <h1>Cart</h1>
            <div>
                {cart[0].image === undefined  ? 
                <p>Nothing in Cart</p> : 
                cart.map((item, index)=>{
                    return (
                        <div className="cart-box" key={index+1}>
                            <div className="cart-img">
                                <img 
                                src={item.apparel === "men-apparel"? menWears[item.id-1].image
                                        : item.apparel === "women-apparel" ? womenWears[item.id-1].image
                                            : kidWears[item.id-1].image} 
                                alt="img"
                                />
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <button onClick={() => handleChange(item, 1)}>+</button>
                                <button>${item.price}</button>
                                <button onClick={() => handleChange(item, -1)}>-</button>
                            </div>
                            <div>
                                <span>${item.price}</span>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                    </div>
                    )}
                )}
                <div className="total">
                    <span>Total Price of your Cart</span>
                    <span> ${price}</span>
                </div>
            </div>
        </article>
  )
}

export default Cart

