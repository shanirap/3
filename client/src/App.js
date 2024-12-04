import React from 'react';
import ALLTODOS from './components/ALLTODOS';

import { Link, Route, Routes } from 'react-router-dom'

import './App.css';


function App() {
  return (
    <div className="App">
 <div id="navbar">
       <Link  to={'/home'}>Home</Link>
</div>

      <Routes>
        <Route path='/Home' element={<ALLTODOS/>} />
      </Routes>
       
    </div>
  );
}

export default App;
