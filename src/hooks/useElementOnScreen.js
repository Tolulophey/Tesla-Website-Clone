import { useState, useRef, useEffect } from 'react'

function useElementOnScreen(options=null) {
    const scrollRef = useRef(null)
    const [isVisible, setIsVisible] = useState (false);
    useEffect(() => {
    const callbackFunction = (banners)=>{
      const [banner] = banners
      setIsVisible(banner.isIntersecting)
    }
    let ref = scrollRef.current
    const observer = new IntersectionObserver(callbackFunction, options)
    if(scrollRef.current) {
    observer.observe(scrollRef.current)
    }
    return () => {
        if(ref) {
        observer.unobserve(ref)
        }
    }
    }, [options])

    return [scrollRef, isVisible]
}

export default useElementOnScreen