import React from 'react'
import ShopNavbar from '../../Components/ShopNavbar/ShopNavbar'
import ShopItem from '../../Components/shopItem/ShopItem'
import Footer from '../../Components/Footer/Footer'

const ShopItemPage = () => {
  return (
    <div className='product'>
      <ShopNavbar />
      <ShopItem />
      <Footer/>
    </div>
  )
}

export default ShopItemPage