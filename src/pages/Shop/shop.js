import React from 'react'
import ShopBanner from '../../Components/ShopBanner/ShopBanner'
import SeventhBanner from '../../Components/SeventhBanner/SeventhBanner'
import EighthBanner from '../../Components/EighthBanner/EighthBanner'
import NinthBanner from '../../Components/NinthBanner/NinthBanner'
import TenthBanner from '../../Components/TenthBanner/TenthBanner'
import ProductSlide from '../../Components/ProductSlide/ProductSlide'
import Footer from '../../Components/Footer/Footer'

const Shop = () => {
  return (
    <div className='Shop'>
        <ShopBanner/>
        <ProductSlide/>
        <SeventhBanner/>
        <EighthBanner/>
        <NinthBanner/>
        <TenthBanner/>
        <Footer/>
        {/* <ProductSlide/> */}
    </div>
  )
}

export default Shop