import React from 'react'
import { options } from '../Utils/Utils'
import { CreditCardIcon } from '@heroicons/react/16/solid'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

const UserOptions = ({toggleView}) => {

  useGSAP(() => {
    gsap.to(".main-container", {x: 0});
  })

  return (
    <div className='user-options-wrapper'>
      <h3 className='user-options-title'>Quick links</h3>
      <ul className='user-options-container'>
        {options.map((data, index) => (
          <div key={index} onClick={() => {toggleView(false)}} className='user-option'>
            <div className='user-option-details'>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </div>
            <span className='user-options-icon-container'>
              <CreditCardIcon width={50} height={50} color='black'/>  
            </span>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default UserOptions