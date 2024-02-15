import { useGSAP } from '@gsap/react';
import React, { useEffect, useState } from 'react'
import gsap from "gsap";

const Landing = () => {
  const [slogan, setSlogan] = useState("Awesome");

  var sloganArray: Array<string> = ["Easy", "Simple", "Fast", "Helpful"];
  var i: number = 0;

  const toggleSlogan = () => {
    gsap.to(".dynamic-slogan", {scale: 0});
    window.setTimeout(() => {
      document.querySelector(".dynamic-slogan").innerHTML = sloganArray[i]  
      gsap.to(".dynamic-slogan", {scale: 1, transformOrigin: 'bottom'});
      if(i == sloganArray.length - 1) {
        i = 0
      } else {
        i++;
      }
      window.setTimeout(() => {toggleSlogan()}, 5000);
    }, 1000)
  }

  useEffect(() => {
    toggleSlogan();
  }, [])
  

  return (
    <section className='landing-wrapper'>
    <div className='landing-container'>
      <h1 className='landing-title'>BANKING APP</h1>
      <h3 className='dynamic-slogan'>{slogan}</h3>
      <p className='landing-para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate, est amet quaerat molestias nihil pariatur ab? Ullam neque inventore et 
        libero voluptatibus enim, recusandae a maiores voluptatum fugiat incidunt.
      </p>
    </div>
  </section>
  )
}

export default Landing