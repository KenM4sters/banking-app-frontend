import { useGSAP } from '@gsap/react';
import React, { useEffect, useState } from 'react'
import gsap from "gsap";

const Landing = () => {
  const [slogan, setSlogan] = useState("");

  var sloganArray = ["Easy", "Simple", "Fast", "Helpful"];

  const toggleSlogan = () => {
    gsap.to(".dynamic-slogan", {scale: 0});  
  }

  useEffect(() => {
  }, [])
  

  return (
    <section className='landing-wrapper'>
    <div className='landing-container'>
      <h1 onClick={() => {toggleSlogan()}} className='landing-title'>BANKING APP</h1>
      <h3  className='dynamic-slogan'>{slogan}</h3>
      <p className='landing-para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate, est amet quaerat molestias nihil pariatur ab? Ullam neque inventore et 
        libero voluptatibus enim, recusandae a maiores voluptatum fugiat incidunt.
      </p>
    </div>
  </section>
  )
}

export default Landing