import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Scrollbar from './components/Scrollbar'
import UserOptions from './components/UserOptions'

const App = () => {
  return (
    <main className='main-wrapper'>
      <Scrollbar />
      <div className='main-container'>
        <div className='header-wrapper'>
          <Header />
        </div>
        <section className='landing-wrapper'>
          <div className='landing-container'>
            <h1>app</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate, est amet quaerat molestias nihil pariatur ab? Ullam neque inventore et 
              libero voluptatibus enim, recusandae a maiores voluptatum fugiat incidunt.
            </p>
          </div>
        </section>
        <UserOptions />
        <div className='footer-wrapper'>
          <Footer />
        </div>
      </div>
    </main>
  )
}

export default App