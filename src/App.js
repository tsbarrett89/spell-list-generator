import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import UserLogin from './components/users/UserLogin';
import UserRegistration from './components/users/UserRegistration';
import SpellList from './components/spells/SpellList';

function App() {
  return (
    <div className="App">
      <h1>Does this work?</h1>
      
      <Routes>
        <Route path='/spells' element={<SpellList />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<UserRegistration />} />
      </Routes>
      
    </div>
  );
}

export default App;