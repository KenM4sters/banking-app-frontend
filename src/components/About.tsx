import React from 'react'

const About = () => {
  return (
    <div className='getting-started-wrapper'>
      <div className='getting-started-container'>
        <h1 className='getting-started-header'> Getting Started</h1>
        <div className='getting-started-list-container'>
          <ul className='getting-started-list'>
            <li className='getting-started-list-item'><span> 1. </span>Create an account with us.</li>
            <li className='getting-started-list-item'><span> 2. </span>Navigate to the "Account" section.</li>
            <li className='getting-started-list-item'><span> 3. </span>Setup your first debit card.</li>
            <li className='getting-started-list-item'><span> 4. </span>Navigate to the 'transactions' section of 'Accounts' to  make as many transactions as you like!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About