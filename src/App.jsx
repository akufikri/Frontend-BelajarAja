import React from 'react';
import Nav from './components/Nav';
import { Route, Routes, Navigate } from 'react-router-dom';
import Beranda from './page/Homepage';
import Footers from './components/Footer';
import Register from './page/SignUp';
import Login from './page/Login';
import Course from './page/Courses';
import DetailCourse from './page/detail/DetailCourse';
import './App.css'
import AccountSettings from './page/AccountSettings';
import Nofound from './page/error/Nofound';
import { useAuthContext } from './hooks/authHooks';
import TechNow from './page/TechNow';

export default function App() {
  const { user } = useAuthContext()
  return (
    <div className='bg-gray-50 h-full'>

      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <Beranda />

          </>
        } ></Route>
        <Route path='/course' element={
          <>
            <Nav />
            <Course />

          </>
        }></Route>
        <Route path='/course/:id' element={
          <>
            <Nav />
            <DetailCourse />

          </>
        }></Route>
        <Route path='/user/settings' element={
          <>
            <Nav />
            <AccountSettings />

          </>
        }></Route>
        <Route path='/technow' element={
          <>
            <Nav />
            <TechNow />

          </>
        }>

        </Route>
        <Route path='/signup' element={
          <>
            <Nav />
            {!user ? <Register /> : <Navigate to='/' />}

          </>
        }></Route>
        <Route path='/login' element={
          <>
            <Nav />
            {!user ? <Login /> : <Navigate to="/" />}

          </>
        }></Route>
        <Route path='*' element={<Nofound />}></Route>
      </Routes>
    </div>
  );
}
