import React from 'react'
import ShopNavbar from '../../Components/ShopNavbar/ShopNavbar'
import WomenApparel from '../../Components/WomenApparel/WomenApparel'
import Footer from '../../Components/Footer/Footer';

const menApparel = () => {
  return (
    <div className='menApparelpage'>
        <ShopNavbar/>
        <WomenApparel/>
        <Footer/>
    </div>
  )
}

export default menApparel