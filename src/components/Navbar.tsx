import React from 'react'
import { LockClosedIcon } from '@heroicons/react/16/solid'

const Navbar = ({toggleView}) => {
  return (
    <div className='nav-link-wrapper'>
      <div className='nav-link-container'>
          <span onClick={() => {toggleView(true)}} className='nav-link home-link active'>
            Home
          </span>
          <span onClick={() => {toggleView(false)}} style={{}} className='nav-link account-link inactive'>
            Account
            <LockClosedIcon className='lock-icon account-lock' />
          </span>
      </div>
    </div>
  )
}

export default Navbar