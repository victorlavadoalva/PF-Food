import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/landing.component';

function App() {
  return (
    <div className="App">
      <h1>Henry Food</h1>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App

