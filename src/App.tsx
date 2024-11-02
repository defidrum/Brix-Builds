import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "../src/components/Home/Home"
import Search from 'components/Search/Search';
import Contact from 'components/Contact'

const App: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
  );
}

export default App;
