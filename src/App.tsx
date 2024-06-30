import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from "../src/components/Home/Home"
import Explore from 'components/Explore/Explore';
import Profile from 'components/Profile/Profile';

const App: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/profile" element={<Profile/>}/>
      </Routes>
  );
}

export default App;
