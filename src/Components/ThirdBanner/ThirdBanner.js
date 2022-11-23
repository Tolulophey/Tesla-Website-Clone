import React from 'react'
import './ThirdBanner.css'
import FirstButton from '../../Reusuables/FirstButton/Button'

function ThirdBanner() {
  return (
    <div className='thirdbanner'>
        <h1>Model S</h1>
        <a href="https://www.google.com">Schedule a Test Drive</a>
        <FirstButton/>
    </div>
  )
}

export default ThirdBanner