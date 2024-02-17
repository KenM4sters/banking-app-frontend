import React, { useEffect } from 'react'
import gsap from "gsap";

const DevReview = ({toggleDevIcon}) => { 

  useEffect(() => {
    gsap.to(".dev-review-wrapper", { opacity: 0, scale: 0})
  }, [])

  return (

    <div className="dev-review-wrapper close-dev-review">
    <div className="dev-review-container">
      <h6 className="dev-review-close" onClick={() => {toggleDevIcon(false)}}>close</h6>
      <h1 className="dev-review-header">Dev Review</h1>
      <div className="dev-review-body">
        <h3 className='dev-review-body-header header-positive'> What went well </h3>
        <ul className="dev-review-summary">
          <li>Integrating Axios to communicate with a Spring backend.</li>
          <li>General use of core React hooks</li>
          <li>Using GSAP to animate DOM elements</li>
          <li>User authentication</li>
          <li>Frontend UI - could use some tweaks, but generally quite unique and interesting</li>
        </ul>
        <h3 className='dev-review-body-header header-negative'> Areas to improve on </h3>
        <ul className="dev-review-summary">
          <li>Organising Stylesheets - debating on trying out SASS</li>
          <li>fix Toastify to actually work...</li>
          <li>A system to add new cards and make transactions on an individual basis to them</li>
          <li>Allow users to report a problem</li>
          <li>Add an object to the DB that stores the user's transactions so they can be recalled between sessions</li>
        </ul>
        <h3 className='dev-review-body-header header-neutral'> Final thoughts </h3>
        <p>
          Besides a lack of more advanced features, the key take-away from this project is a need to find a more
          appropraite way of styling DOM elements. Naming conventions are inconsistent, some of which are 
          too vague, and the layout is at best a rough structure of header-body-footer stylings. 
        </p>
          <p>Even so, I think using SASS would be at least worth a shot for future frontend applications. </p>
      </div>
    </div>
  </div>
  )
}

export default DevReview