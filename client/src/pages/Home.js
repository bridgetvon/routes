import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Nav from '../components/Nav';
import Ski from '../components/Ski';
import Bike from '../components/Bike';
import Run from '../components/Run';
import Footer from '../components/footer';
import SocialFeed from '../components/SocialFeed';
import Hero from '../components/Hero';
import Chats from '../components/Chats';
import Contact from './Contact';
import Profile from './Profile';
import OnePost from '../components/OnePost';
import TinderCards from '../components/TinderCards';


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
            <Route path="/social" element={<SocialFeed />} />
            <Route path="/chat" element={<Chats />} />
            <Route path="/contact" element={<Contact />} />
            <Route path=":username" element={<Profile />} />
            <Route path=":thoughts" element={<OnePost />} />
            <Route path="/cards" element={<TinderCards />} />
          </Routes>
      </main>
      <Footer /> 
    </div>
  );
}

export default Home;
