import React, {useEffect,useContext} from 'react'
import Footer from '../../Components/Footer/Footer'
import ShopNavbar from '../../Components/ShopNavbar/ShopNavbar'
import Cart from './cart'
import {NavContext} from "../../App"


function CartPage() {
    const {navbar,setNavbar} = useContext(NavContext);
    const changeBackground =() =>{
        if(window.scrollY > 0){
            setNavbar(true)
        } else{
        setNavbar(false);
        }
    }
    useEffect(() => {
        window.addEventListener("load", ()=>{
        if(!navbar){
            setNavbar(true)
        }
        })
        return () => {
        window.removeEventListener("load", ()=>{
        if(!navbar){
            setNavbar(true)
        }
        })}
    }, [navbar,setNavbar])

    return (
    <div className='cartPage'>
        <ShopNavbar navbar={navbar} changeBackground = {changeBackground}/>
        <Cart/>
        <Footer/>
    </div>
    )
    }

export default CartPage