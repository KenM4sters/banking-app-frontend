import React, { useEffect, useState } from 'react'

const Scrollbar = () => {
  // set state for scroll counter
  const [scrollCounter, setScrollCounter] = useState({scrollX: 0, scrollY: 0});
  function updateScrollCounter() {
    setScrollCounter({ scrollX: window.scrollX, scrollY: window.scrollY});
  }

  // run updateScrollCounter() on the first render and whenever the user scrolls
  useEffect(() => {
    updateScrollCounter();
  }, [])
  window.addEventListener('scroll', updateScrollCounter);

  // getting the #root dom element to check its size and calulate the scroll counter as 
  // a percentage of this value.
  const root = document.querySelector('#root');

  return (
    <div className='scroll-bar'>{scrollCounter.scrollY}</div>
  )
}

export default Scrollbar