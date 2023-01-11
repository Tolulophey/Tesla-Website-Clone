import React from 'react'
import { Link } from 'react-router-dom'
import './SecondBanner.css'
import FirstButton from '../../Reusuables/FirstButton/Button'
import useElementOnScreen from '../../hooks/useElementOnScreen'

function SecondBanner() {
  const [scrollRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  })
  return (
    <div ref={scrollRef} className={isVisible? 'secondbanner fade' :'secondbanner'} id='modely'>
        <h1>Model Y</h1>
        <Link to="#">Schedule a Test Drive</Link>
        <FirstButton/>
    </div>
  )
}

export default React.memo(SecondBanner)