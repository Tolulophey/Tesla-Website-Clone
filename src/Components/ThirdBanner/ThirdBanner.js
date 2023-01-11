import React from 'react'
import { Link } from 'react-router-dom'
import './ThirdBanner.css'
import FirstButton from '../../Reusuables/FirstButton/Button'
import useElementOnScreen from '../../hooks/useElementOnScreen'

function ThirdBanner() {
  const [scrollRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  })
  return (
    <div ref={scrollRef} className={isVisible? 'thirdbanner fade' : 'thirdbanner'} id='models'>
        <h1>Model S</h1>
        <Link to="#">Schedule a Test Drive</Link>
        <FirstButton/>
    </div>
  )
}

export default React.memo(ThirdBanner)