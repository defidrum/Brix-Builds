import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
