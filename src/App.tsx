import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Scrollbar from './components/Scrollbar'
import UserOptions from './components/UserOptions'
import { XCircleIcon } from '@heroicons/react/16/solid'
import { loginUser, saveUser, updateUser } from './components/api/Mappings'
import Navbar from './components/Navbar'
import gsap from "gsap"
import Account from './components/Account'
import About from './components/About'
import Landing from './components/Landing'
import { User } from './Utils/types'
import { toastInfo, toastSuccess } from './Utils/Toast'
import { AxiosResponse } from 'axios'
import { ToastContainer, toast } from 'react-toastify'


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
    name: "",
    email: "",
    password: "",
    cardBalance: 0
  } as User);

  // Set the form and homeInView states on the first render.
  useEffect(() => {
    setFormstate(true);
    if(userEnabled == true) {
      document.querySelector('.lock-icon')?.classList?.add('hide'); 
    } else {
      document.querySelector('.lock-icon')?.classList?.remove('hide'); 
    } 
  }, [userEnabled])

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
      console.log(userDetails);
      if(typeof userDetails.data == 'string') {
        const res = await saveUser(formValues);
        console.log(res);
        toastSuccess('user created! Please Verify your account and return to login.');
        toggleForm(false);
      } else {
        userDetails.data.enable == true ? setUserEnabled(true) : setUserEnabled(false);
        setData(userDetails.data);
        toggleForm(false);
        toast('logged in!');
      }
      
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
      homeInPreviousView == true && homeInView == true ? null : moveMainContainer(false);
    } 
    else if(!lookToHome && userEnabled){
      accountButton?.classList.add('active');
      accountButton?.classList.remove('inactive');
      homeButton?.classList.remove('active');
      homeButton?.classList.add('inactive');
      
      homeInView == true ? moveMainContainer(true) : null;
    } 
  }


  const moveMainContainer = (left: boolean):void => {
      if(left) {
        setHomeInPreviousView(homeInView);
        gsap.to('.main-container', {x: -1600});
        gsap.to('.account-view-wrapper', {x: 0});
        setHomeInView(false);
        
      } else if(!left) {
        setHomeInPreviousView(homeInView);
        gsap.to('.main-container', {x: 0});
        gsap.to('.account-view-wrapper', {x: 1512});
        setHomeInView(true);
      } 
  }

  const resetUser = () => {
    setUserEnabled(false);   
  }

  const updateUserBalance = async(email: string, transactionValue: number): Promise<void> => {
    const updatedUser: AxiosResponse = await updateUser(email, transactionValue);
    const newData = await loginUser(data)
    console.log(transactionValue);
    
    
    setData(newData.data);
    toastSuccess('User updated!');
  }

  return (
    <>
      <main className='main-wrapper'>
        <Scrollbar />
        <Navbar toggleView={toggleHomeInView} />
        <Header toggleView={toggleHomeInView} toggleForm={toggleForm} userEnabled={userEnabled} resetUser={resetUser}/>
        <Account data={data} updateUserBalance={updateUserBalance} />
        <div className='main-container'>
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
                  <label>Name:</label>
                  <input type="text" id="name" name="name" required value={formValues.name} onChange={updateFormValues} />
              </div>
              <div className="input-group">
                  <label>Email:</label>
                  <input type="email" id="email" name="email" required value={formValues.email} onChange={updateFormValues} />
              </div>
              <div className="input-group">
                  <label>Password:</label>
                  <input type="password" id="password" name="password" required value={formValues.password} onChange={updateFormValues} />
              </div>
              <button type="submit" className='form-button'>Login</button>
              <p>**If no user exists with the sumbitted email adress, we'll create an account for you.</p>
          </form>
        </div>
      </main>
    </>
  )
}

export default App