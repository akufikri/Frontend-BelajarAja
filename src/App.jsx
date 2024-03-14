import Nav from './components/Nav';
import { Route, Routes, Navigate } from 'react-router-dom';
import Beranda from './page/Homepage';
import Register from './page/SignUp';
import Login from './page/Login';
import Course from './page/Courses';
import DetailCourse from './page/detail/DetailCourse';
import './App.css'
import AccountSettings from './page/AccountSettings';
import Nofound from './page/error/Nofound';
import { useAuthContext } from './hooks/authHooks';
import Sidebars from './components/Sidebar';
import Courses from './page/mentors/Courses';
import CreateCourse from './page/mentors/CreateCourse';
import RegisterMentor from './page/RegisterMentor';
import Dashboard from './page/mentors/Dashboard';
import Breadcrumbs from './components/Breadcrumbs';
import NavMentor from './components/NavMentor';
import { Analytics } from "@vercel/analytics/react"


export default function App() {
  const { user } = useAuthContext()
  return (
    <div className='h-full'>
      <Analytics>
        <Routes>
          <Route path="/" element={
            <>
              <Nav />
              <Beranda />

            </>
          } ></Route>
          <Route path='/kelas' element={
            <>
              <Nav />
              <Course />
            </>
          }></Route>
          <Route path='/kelas/:id' element={
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
          <Route path='/mengajar/register' element={
            <>
              <Nav />
              <RegisterMentor />
            </>
          }>
          </Route>

          {/* Mentor Route */}
          <Route path='/mentor/dashboard' element={
            <>
              {user && <Sidebars />}
              {user && <NavMentor />}
              <div className={`p-4 ${user ? 'sm:ml-72 pt-20' : ''} h-screen bg-gray-100`}>
                <Breadcrumbs />
                {!user ? <Login /> : <Dashboard />}
              </div>
            </>
          }>
          </Route>

          <Route path='/mentor/course' element={
            <>
              {user && <Sidebars />}
              {user && <NavMentor />}
              <div className={`p-4 ${user ? 'sm:ml-72 pt-20' : ''} h-screen bg-gray-100`}>
                <Breadcrumbs />
                {!user ? <Login /> : <Courses />}
              </div>
            </>
          }>
          </Route>
          <Route path='/mentor/course/create' element={
            <>
              {user && <Sidebars />}
              {user && <NavMentor />}
              <div className={`p-4 ${user ? 'sm:ml-72 pt-20' : ''} h-screen bg-gray-100`}>
                <Breadcrumbs />
                {!user ? <Login /> : <CreateCourse />}
              </div>
            </>
          }>
          </Route>

          {/* Mentor Route */}
          <Route path='*' element={<Nofound />}></Route>
        </Routes>
      </Analytics>
    </div>
  );
}
