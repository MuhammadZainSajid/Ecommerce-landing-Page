import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { MensPage } from './MensPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/MensPage" element={<MensPage />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
