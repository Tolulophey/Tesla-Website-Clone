import React from 'react'
import ShopNavbar from '../../Components/ShopNavbar/ShopNavbar'
import KidsApparel from '../../Components/KidsApparel/KidsApparel'
import Footer from '../../Components/Footer/Footer';

const menApparel = () => {
  return (
    <div className='menApparelpage'>
        <ShopNavbar/>
        <KidsApparel/>
        <Footer/>
    </div>
  )
}

export default menApparel