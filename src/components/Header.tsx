import React from 'react'

const Header = ({toggleForm}) => {
  return (
    <div className='header-wrapper'>
      <div className='header-container'>
        <button onClick={() => {toggleForm(true)}} className='btn login-btn'>Login</button>
      </div>
    </div>
  )
}

export default Header