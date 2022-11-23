import React from 'react'
import ShopBanner from '../../Components/ShopBanner/ShopBanner'
import SeventhBanner from '../../Components/SeventhBanner/SeventhBanner'
import EighthBanner from '../../Components/EighthBanner/EighthBanner'
import NinthBanner from '../../Components/NinthBanner/NinthBanner'

const Shop = () => {
  return (
    <div className='Shop'>
        <ShopBanner/>
        <SeventhBanner/>
        <EighthBanner/>
        <NinthBanner/>
    </div>
  )
}

export default Shop