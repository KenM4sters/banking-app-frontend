import React, { useEffect, useState } from 'react'

const Scrollbar = () => {
  // set state for scroll counter
  const [scrollCounter, setScrollCounter] = useState({scrollX: 0, scrollY: 0});
  function updateScrollCounter() {
    setScrollCounter({ scrollX: window.scrollX, scrollY: window.scrollY});
    checkScrollPos();
  }

  // run updateScrollCounter() on the first render and whenever the user scrolls
  useEffect(() => {
    updateScrollCounter();
  }, [])
  window.addEventListener('scroll', updateScrollCounter);

  // getting the #root dom element to check its size and calulate the scroll counter as 
  // a percentage of this value.
  const root: HTMLElement = document?.querySelector('#root');


  // stopping the user from over scrolling if the scroll positions is either 0 or the height of the viewport
  const body: HTMLElement = document?.querySelector('.body')

  const checkScrollPos = () => {
    if(scrollCounter.scrollY < 0 || scrollCounter.scrollY > (window.innerHeight / 2)) {
      // body.style.overflow = 'hidden';
    }
    else {
      body.style.overflow = 'auto';
    }
  }

  return (
    <div className='scroll-bar'>
      {Math.floor((scrollCounter.scrollY / window.innerHeight / 2) * 100).toString().concat("%")}
    </div>
  )
}

export default Scrollbar