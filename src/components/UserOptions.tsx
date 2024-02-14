import React from 'react'
import { options } from '../Utils/Utils'
import { CreditCardIcon } from '@heroicons/react/16/solid'

const UserOptions = () => {
  return (
    <div className='user-options-wrapper'>
        <ul className='user-options-container'>
          {options.map((data, index) => (
            <a key={index} href={data.link} className='user-option'>
              <div className='user-option-details'>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
              </div>
              <span className='user-options-icon-container'>
                <CreditCardIcon width={50} height={50} color='black'/>  
              </span>
            </a>
          ))}
        </ul>
    </div>
  )
}

export default UserOptions