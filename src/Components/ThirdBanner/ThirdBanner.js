import React from 'react'
import { Link } from 'react-router-dom'
import './ThirdBanner.css'
import FirstButton from '../../Reusuables/FirstButton/Button'

function ThirdBanner() {
  return (
    <div className='thirdbanner' id='models'>
        <h1>Model S</h1>
        <Link to="#">Schedule a Test Drive</Link>
        <FirstButton/>
    </div>
  )
}

export default ThirdBanner