import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beranda from './page/Beranda';
import Footers from './components/Footer';

export default function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
        </Routes>
      </Router>
      <Footers />
    </div>
  );
}
