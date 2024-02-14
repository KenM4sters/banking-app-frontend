import React from 'react'
import { LockClosedIcon } from '@heroicons/react/16/solid'

const Navbar = () => {
  return (
    <div className='nav-link-wrapper'>
      <div className='nav-link-container'>
          <span className='nav-link home-link active'>
            Home
          </span>
          <span className='nav-link account-link inactive'>
            Account
            <LockClosedIcon className='lock-icon account-lock' width={100} height={30} />
          </span>
      </div>
    </div>
  )
}

export default Navbar