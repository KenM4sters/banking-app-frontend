import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Scrollbar from './components/Scrollbar'
import UserOptions from './components/UserOptions'
import { XCircleIcon } from '@heroicons/react/16/solid'
import { getGames } from './components/api/Mappings'
import Navbar from './components/Navbar'


const App = () => {

  const form: HTMLElement = document?.querySelector('.login-form');
  const homeButton: HTMLElement = document?.querySelector('.home-link');
  const accountButton: HTMLElement = document?.querySelector('.account-link');
  const [activeView, setActiveView] = useState(homeButton);
  const [formState, setFormstate] = useState(false);
  const [userEnabled, setUserEnabled] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    name: "",
    password: ""
  });

  useEffect(() => {
    setFormstate(true);
    setActiveView(homeButton);
  })

  const updateFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value});
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const {data} = await getGames({page: 0, size: 4})      
      data?.content ? setUserEnabled(true) : null; 
      
    } catch (e) {
      console.log(e); 
    }
  }

  const displayForm = () => {
    if(form?.classList?.contains('close-form')) {
      form?.classList?.remove('close-form');
    }
    form?.classList?.add('display-form');
    setFormstate(true)
  }

  const closeForm = () => {
    if(form?.classList?.contains('display-form')) {
      form?.classList?.remove('display-form');
    }
    form?.classList?.add('close-form');
    setFormstate(false)
  }

  const toggleForm = (show: boolean) => {show ? displayForm() : closeForm()};

  if(userEnabled == true) {
    document.querySelector('.lock-icon')?.classList?.add('hide');  
  }


  return (
    <>
      <main className='main-wrapper'>
        <Scrollbar />
        <div className='main-container'>
          <Header toggleForm={toggleForm} />
          <Navbar />
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
        {/* Login Form */}
        <div className="login-container">
          <form className="login-form close-form" onSubmit={handleLogin}>
              <XCircleIcon onClick={() => {toggleForm(false)}} width={20} height={20}/>
              <h2>Login</h2>
              <div className="input-group">
                  <label>Username:</label>
                  <input type="text" id="username" name="username" required value={formValues.username} onChange={updateFormValues} />
              </div>
              <div className="input-group">
                  <label>Password:</label>
                  <input type="password" id="password" name="password" required value={formValues.password} onChange={updateFormValues} />
              </div>
              <button type="submit">Login</button>
          </form>
        </div>
      </main>

    </>
  )
}

export default App