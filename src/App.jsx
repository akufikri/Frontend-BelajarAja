import React from 'react';
import Nav from './components/Nav';
import { Route, Routes, Navigate } from 'react-router-dom';
import Beranda from './page/Homepage';
import Footers from './components/Footer';
import Register from './page/Register';
import Login from './page/Login';
import Course from './page/Courses';
import DetailCourse from './page/detail/DetailCourse';
import './App.css'
import AccountSettings from './page/AccountSettings';
import Nofound from './page/error/Nofound';
import { useAuthContext } from './hooks/authHooks';

export default function App() {
  const { user } = useAuthContext()
  return (
    <div>

      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <Beranda />
            <Footers />
          </>
        } ></Route>
        <Route path='/course' element={
          <>
            <Nav />
            <Course />
            <Footers />
          </>
        }></Route>
        <Route path='/course/:id' element={
          <>
            <Nav />
            <DetailCourse />
            <Footers />
          </>
        }></Route>
        <Route path='/user/settings' element={
          <>
            <Nav />
            <AccountSettings />
            <Footers />
          </>
        }></Route>
        <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />}></Route>
        <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}></Route>
        <Route path='*' element={<Nofound />}></Route>
      </Routes>

    </div>
  );
}
