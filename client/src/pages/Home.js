import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Nav from '../components/Nav';
import Ski from '../components/Ski';
import Bike from '../components/Bike';
import Run from '../components/Run';
import Footer from '../components/footer';
// import MountainBike from './components/mountain-bike';
import Hero from '../components/Hero';

function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    //set state to go from false to true
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <main>
          <Nav toggle={toggle} />
          {isOpen ? < Sidebar toggle={toggle} /> : ''}
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/ski" element={<Ski />} />
            <Route path="/mountain-bike" element={<Bike />} />
            <Route path="/trail-run" element={<Run />} />
          </Routes>
      </main>
      <Footer /> 
    </div>
  );
}

export default Home;
