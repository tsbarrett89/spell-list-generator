import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import UserLogin from './components/users/UserLogin';

function App() {
  return (
    <div className="App">
      <h1>Does this work?</h1>
      
      <Routes>
        <Route path='/' element={<UserLogin />} />
      </Routes>
      
    </div>
  );
}

export default App;