import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "../src/components/Home/Home"
import About from 'components/About/About';
import Services from 'components/Services/Services';
import Contact from 'components/Contact/Contact';
import Header from 'components/Header/Header';

const App: React.FC = () => {
  return (
    <>
    <Header/>
      <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
