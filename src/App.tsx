import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Scrollbar from './components/Scrollbar'
import UserOptions from './components/UserOptions'
import { XCircleIcon } from '@heroicons/react/16/solid'
import { getGames, loginUser, saveUser } from './components/api/Mappings'
import Navbar from './components/Navbar'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import Account from './components/Account'
import About from './components/About'
import Landing from './components/Landing'
import { User } from './Utils/types'


const App = () => {

  const form: HTMLElement = document?.querySelector('.login-form');
  const homeButton: HTMLElement = document?.querySelector('.home-link');
  const accountButton: HTMLElement = document?.querySelector('.account-link');
  const [homeInView, setHomeInView] = useState(true);
  const [homeInPreviousView, setHomeInPreviousView] = useState(true);
  const [formState, setFormstate] = useState(false);
  const [data, setData] = useState({} as User);
  const [userEnabled, setUserEnabled] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  } as User);

  // Set the form and homeInView states on the first render.
  useEffect(() => {
    setFormstate(true);    
  }, [])

  // As the user is filling out the form, we need to update the formValues which
  // will eventually be passed to the POST request to set up a user account.
  const updateFormValues = (e):void => {
    // using the ...spread operator to break up an object.
    setFormValues({ ...formValues, [e.target.name]: e.target.value});
  }

  // function to call getGames from api/mappings.tsx which sends a GET request to the server.
  // Currently returns a list of game titles
  const handleLogin = async (e):Promise<void> => {
    e.preventDefault();
    try {      
      const userDetails = await loginUser(formValues);
      if(userDetails.data.length == 0) {
        const res = await saveUser(formValues);
        console.log('created user');
      }
      userDetails.data.enable == true ? setUserEnabled(true) : setUserEnabled(false);
      console.log(userDetails);
      setData(userDetails.data);
      toggleForm(false);
    } catch (e) {
      console.log(e); 
    }
  }

  // if the form has the close-form class, then remove it and add display-form
  const displayForm = ():void => {
    if(form?.classList?.contains('close-form')) {
      form?.classList?.remove('close-form');
    }
    form?.classList?.add('display-form');
    setFormstate(true)
  }

  // if the form has the display-form class, then remove it and add close-form
  const closeForm = ():void => {
    if(form?.classList?.contains('display-form')) {
      form?.classList?.remove('display-form');
    }
    form?.classList?.add('close-form');
    setFormstate(false)
  }


  // function to toggle whether the form should be open or not
  const toggleForm = (show: boolean):void => {show ? displayForm() : closeForm()};


  // if userEnabled is true, then remove the lock icon on the account button but setting
  // it's display to hidden.
  if(userEnabled == true) {
    document.querySelector('.lock-icon')?.classList?.add('hide'); 
  }


  // Adding an removing active/inactive classes when this funciton is called.
  // Those classes add different styling properties to indicatie whether it's active or not.
  const toggleHomeInView = (lookToHome: boolean):void => {
    if(lookToHome) {
      homeButton?.classList.add('active');
      homeButton?.classList.remove('inactive');
      accountButton?.classList.remove('active');
      accountButton?.classList.add('inactive');
      console.log(homeInView, homeInPreviousView);
      homeInPreviousView == true && homeInView == true ? null : moveMainContainer(false);
    } 
    else if(!lookToHome && userEnabled){
      accountButton?.classList.add('active');
      accountButton?.classList.remove('inactive');
      homeButton?.classList.remove('active');
      homeButton?.classList.add('inactive');
      console.log(homeInView, homeInPreviousView);
      
      homeInView == true ? moveMainContainer(true) : null;
    }
  }


  const moveMainContainer = (left: boolean):void => {
      if(left) {
        setHomeInPreviousView(homeInView);
        gsap.to('.main-container', {x: -1600});
        gsap.to('.account-view-wrapper', {x: 0});
        console.log('moving left');
        setHomeInView(false);
        
      } else if(!left) {
        setHomeInPreviousView(homeInView);
        gsap.to('.main-container', {x: 0});
        gsap.to('.account-view-wrapper', {x: 1512});
        console.log('moving right');
        setHomeInView(true);
      }
  }

  return (
    <>
      <main className='main-wrapper'>
        <Scrollbar />
        <Navbar toggleView={toggleHomeInView} />
        <Account data={data} />
        <div className='main-container'>
          <Header toggleForm={toggleForm} userEnabled={userEnabled} />
          <Landing />
          <UserOptions toggleView={toggleHomeInView} />
          <About />
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
                  <label>Email:</label>
                  <input type="text" id="email" name="email" required value={formValues.email} onChange={updateFormValues} />
              </div>
              <div className="input-group">
                  <label>Password:</label>
                  <input type="password" id="password" name="password" required value={formValues.password} onChange={updateFormValues} />
              </div>
              <button type="submit" className='form-button'>Login</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App