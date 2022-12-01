import React from 'react'
import ShopNavbar from '../../Components/ShopNavbar/ShopNavbar'
import Apparel from '../../Components/Apparel/Apparel'
import Footer from '../../Components/Footer/Footer';

const ApparelPage = () => {
  return (
    <div className='menApparelpage'>
        <ShopNavbar/>
        <Apparel />
        <Footer/>
    </div>
  )
}

export default ApparelPage