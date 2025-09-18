import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';

const App = () => {
  return (
    <>
  <div className='bg-[#121212]'>
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <About/>
  
  </div>
    </>
  )
}

export default App;