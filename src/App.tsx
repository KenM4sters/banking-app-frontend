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
  const [homeInView, setHomeInView] = useState(true);
  const [formState, setFormstate] = useState(false);
  const [userEnabled, setUserEnabled] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    name: "",
    password: ""
  });

  // Set the form and homeInView states on the first render.
  useEffect(() => {
    setFormstate(true);
    setHomeInView(true);
  })

  // As the user is filling out the form, we need to update the formValues which
  // will eventually be passed to the POST request to set up a user account.
  const updateFormValues = (e) => {
    // using the ...spread operator to break up an object.
    setFormValues({ ...formValues, [e.target.name]: e.target.value});
  }

  // function to call getGames from api/mappings.tsx which sends a GET request to the server.
  // Currently returns a list of game titles
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // get the data from the GET request.
      const {data} = await getGames({page: 0, size: 4})      
      data?.content ? setUserEnabled(true) : null; 
      toggleForm(false);
      
    } catch (e) {
      console.log(e); 
    }
  }

  // if the form has the close-form class, then remove it and add display-form
  const displayForm = () => {
    if(form?.classList?.contains('close-form')) {
      form?.classList?.remove('close-form');
    }
    form?.classList?.add('display-form');
    setFormstate(true)
  }

  // if the form has the display-form class, then remove it and add close-form
  const closeForm = () => {
    if(form?.classList?.contains('display-form')) {
      form?.classList?.remove('display-form');
    }
    form?.classList?.add('close-form');
    setFormstate(false)
  }


  // function to toggle whether the form should be open or not
  const toggleForm = (show: boolean) => {show ? displayForm() : closeForm()};


  // if userEnabled is true, then remove the lock icon on the account button but setting
  // it's display to hidden.
  if(userEnabled == true) {
    document.querySelector('.lock-icon')?.classList?.add('hide'); 
  }


  // Adding an removing active/inactive classes when this funciton is called.
  // Those classes add different styling properties to indicatie whether it's active or not.
  const toggleHomeInView = (inView: boolean) => {
    if(inView) {
      homeButton?.classList.add('active');
      homeButton?.classList.remove('inactive');
      accountButton?.classList.remove('active');
      accountButton?.classList.add('inactive');
    } 
    else if(!inView && userEnabled){
      accountButton?.classList.add('active');
      accountButton?.classList.remove('inactive');
      homeButton?.classList.remove('active');
      homeButton?.classList.add('inactive');
    }
  }


  return (
    <>
      <main className='main-wrapper'>
        <Scrollbar />
        <div className='main-container'>
          <Header toggleForm={toggleForm} />
          <Navbar toggleView={toggleHomeInView} />
          <section className='landing-wrapper'>
            <div className='landing-container'>
              <h1 className='landing-title'>BANKING APP</h1>
              <p className='landing-para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate, est amet quaerat molestias nihil pariatur ab? Ullam neque inventore et 
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
              <XCircleIcon style={{cursor: 'pointer'}} onClick={() => {toggleForm(false)}} width={20} height={20}/>
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