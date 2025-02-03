import './App.css';
import React from 'react';
import Navbar from './companent/Navbar';
import { Route, Routes } from 'react-router-dom';
import Register from './companent/Register';
import Katalog from './companent/Katalog';
import Saralangan from './companent/Saralangan';
import Kirish from './companent/Kirish';
import Buy from './companent/Buy';
import Home from './companent/Home';

function App() {
  return (
      <>
      
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/login' element={<Kirish/>}/>
        <Route path='/saralangan' element={<Saralangan/>}/>
        <Route path='/katalog' element={<Katalog/>}/>
      </Routes>
      </>
  );
}

export default App;
