import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Scrollbar from './components/Scrollbar'

const App = () => {
  return (
    <main className='main-wrapper'>
      <div className='main-container'>
        <div className='header-wrapper'>
          <Header />
        </div>
        <section>
          
        </section>
        <div className='footer-wrapper'>
          <Footer />
        </div>
      </div>
      <Scrollbar />
    </main>
  )
}

export default App