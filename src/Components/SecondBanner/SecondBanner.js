import React from 'react'
import './SecondBanner.css'
import FirstButton from '../../Reusuables/FirstButton/Button'

function SecondBanner() {
  return (
    <div className='secondbanner'>
        <h1>Model Y</h1>
        <a href="https://www.google.com">Schedule a Test Drive</a>
        <FirstButton/>
    </div>
  )
}

export default SecondBanner