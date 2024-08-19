import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Games from './assets/pages/Games';
import Programs from './assets/pages/Programs';
import Films from './assets/pages/Films';
import Kids from './assets/pages/Kids';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/games" element={<Programs />} />
        <Route path="/films" element={<Films />} />
        <Route path="/forkids" element={<Kids />} />
      </Routes>
    </Router>
  );
};

export default App;
