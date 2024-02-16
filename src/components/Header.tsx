import React from 'react'
import { UserCircleIcon } from '@heroicons/react/16/solid'

const Header = ({toggleForm, userEnabled}) => {
  return (
    <div className='header-wrapper'>
      <div className='header-container'>
        {userEnabled ? <UserCircleIcon  className='user-icon' /> : <button onClick={() => {toggleForm(true)}} className='btn login-btn'>Login</button> } 
      </div>
    </div>
  )
}

export default Header