import React from 'react'
import './FourthBanner.css'
import FirstButton from '../../Reusuables/FirstButton/Button'

function FourthBanner() {
  return (
    <div className='fourthbanner' id='modelx'>
        <h1>Model X</h1>
        <a href="https://www.google.com">Schedule a Test Drive</a>
        <FirstButton/>
    </div>
  )
}

export default React.memo(FourthBanner)