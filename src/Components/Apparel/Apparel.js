import React, {useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import menWears from "../Apparel/wears/men"
import womenWears from "../Apparel/wears/women"
import kidWears from "../Apparel/wears/kids"
import './apparel.css'


const Apparel = () => {
    const { name } = useParams();
    const navigate = useNavigate();
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
    useEffect(() => {
        if(!localStorage.getItem("authenticated")){
        navigate("/sign-in")
        }
    }, [navigate])
    return (
    <div className="apparel">
        {name==="women-apparel" ? <h1>Women</h1> 
            : name==="kids-apparel" ? <h1>Kid</h1>
            : <h1>Men</h1>
        }
        <h3>Best Sellers</h3>
        <div className='product_container'>
            {data.map((wear,index)=>{
                return (
                <div className="product_card" key={index+1}>
                    <div className="product_img">
                        <Link to={`/shop/${name}/${wear.id}`}>
                            <img src={wear.image} alt={wear.name}/>
                        </Link>
                    </div>
                    <div className="product_title_details">
                        <Link to={`/shop/${name}/${wear.id}`}>
                            <h5 className='item-name'>{wear.name}</h5>
                        </Link>
                        <h5 className='item-price'>${wear.price}</h5>
                    </div>
                </div>
            )})}
        </div>
        
    </div>
    )
}

export default React.memo(Apparel)