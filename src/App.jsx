import React from 'react';
import Nav from './components/Nav';
import { Router, Route, Routes } from 'react-router-dom';
import Beranda from './page/Beranda';
import Footers from './components/Footer';
import Register from './page/Register';

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footers />
    </div>
  );
}
