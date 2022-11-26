import React from 'react'
import ShopNavbar from '../../Components/ShopNavbar/ShopNavbar'
import MenApparel from '../../Components/MenApparel/MenApparel'
import Footer from '../../Components/Footer/Footer';

const menApparel = () => {
  return (
    <div className='menApparelpage'>
        <ShopNavbar/>
        <MenApparel/>
        <Footer/>
    </div>
  )
}

export default menApparel