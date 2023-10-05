import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import ForgetPasswordPage from './Components/ForgetPasswordPage'
import SignUpPage from './Components/SignUpPage'
import LandingPage from './Components/LandingPage'
import HomePage from './Components/HomePage'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='Login' Component={Login}/>
      <Route path='forget-password' Component={ForgetPasswordPage}/>
      <Route path='register' Component={SignUpPage}/>
      <Route path='/' Component={LandingPage}/>
      <Route path='home' Component={HomePage}/>
      <Route path='aboutus' Component={AboutUs}/>
      <Route path='contactus' Component={ContactUs}/>
    </Routes>
    </>
  )
}

export default App


