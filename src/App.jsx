import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import React from 'react';
import './App.css'
import HomeMascotero from './Pages/HomeMascotero';
import HomeProtectora from './Pages/HomeProtectora';

function App() {
  return (
    <Routes>
      <React.Fragment>
      </React.Fragment>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomeMascotero />} />
      <Route path="/homeP" element={<HomeProtectora />} />
    </Routes>
  );
}

export default App;
