import React from 'react';
import './App.css';

import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Home from './component/Home';


function App() {
  return (
    <>    
    <Navbar />
    <Routes>      
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    
    
    </>
  );
}

export default App;
