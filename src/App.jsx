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
import Sidebars from './components/Sidebar';
import Courses from './page/mentors/Courses';
import CreateCourse from './page/mentors/CreateCourse';

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
        <Route path='/technow' element={
          <>
            {/* <Nav /> */}
            <Sidebars />
            <TechNow />
          </>
        }>
        </Route>
        <Route path='/mentor/course' element={
          <>
            <Sidebars />
            <div className='p-4 sm:ml-64 h-screen'>
              <Courses />
            </div>
          </>
        }>
        </Route>
        <Route path='/mentor/course/create' element={
          <>
            <Sidebars />
            <div className='p-4 sm:ml-64 h-screen'>
              <CreateCourse />
            </div>
          </>
        }>
        </Route>
        <Route path='*' element={<Nofound />}></Route>
      </Routes>
    </div>
  );
}
