import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';

const App = () => {
  return (
    <>
  <div className='bg-zinc-900'>
    <Navbar/>
  <LandingPage/>
  <Marquee/>
  </div>
    </>
  )
}

export default App;