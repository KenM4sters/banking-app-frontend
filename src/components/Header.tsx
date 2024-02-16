import React from 'react'
import { UserCircleIcon } from '@heroicons/react/16/solid'

const Header = ({toggleForm, userEnabled, resetUser, toggleView}) => {

  const signOutUser = (lookToHome: boolean) => {
    toggleView(lookToHome);
    resetUser();
    console.log(userEnabled);
  }

  return (
    <div className='header-wrapper'>
      <div className='header-container'>
        {userEnabled ? 
        <div>
          <UserCircleIcon  className='user-icon' />
          <span className='btn login-btn' onClick={() => {signOutUser(true)}}>Sign Out</span> 
        </div> : 
          <button onClick={() => {toggleForm(true)}} className='btn login-btn'>Login</button> 
        } 
      </div>
    </div>
  )
}

export default Header