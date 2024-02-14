import React from 'react'
import { quick_links } from '../Utils/Utils'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-slogan'>
        <h1> Serving your banking needs </h1>
      </div>
      <div className='footer-quick-links-wrapper'>
        <ul className='quick-links'>
          {quick_links.map((data, index) => (
            <a key={index} href={data.link}> {data.name} </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer