import React from 'react';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Beranda from './page/Beranda';
import Footers from './components/Footer';
import Register from './page/Register';
import Login from './page/Login';
import Course from './page/Kelas';
import DetailCourse from './page/detail/DetailCourse';

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/course' element={<Course />}></Route>
        <Route path='/Course/:id' element={<DetailCourse />}></Route>
      </Routes>
      <Footers />
    </div>
  );
}
