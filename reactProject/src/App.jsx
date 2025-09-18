import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import MoreAbout from './components/MoreAbout';

const App = () => {
  return (
    <>
  <div className='bg-[#121212]'>
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <About/>
    <MoreAbout/>
  
  </div>
    </>
  )
}

export default App;