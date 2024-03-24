import Nav from './components/Nav';
import { Route, Routes, Navigate } from 'react-router-dom';
import Beranda from './page/Homepage';
import Register from './page/SignUp';
import Login from './page/Login';
import Course from './page/Courses';
import DetailCourse from './page/DetailCourse';
import './App.css'
import AccountSettings from './page/AccountSettings';
import Notfound from './page/error/Notfound';
import { useAuthContext } from './hooks/authHooks';
import Sidebars from './components/Sidebar';
import Courses from './page/mentors/Courses';
import CreateCourse from './page/mentors/CreateCourse';
import RegisterMentor from './page/RegisterMentor';
import Dashboard from './page/mentors/Dashboard';
import Breadcrumbs from './components/Breadcrumbs';
import NavMentor from './components/NavMentor';
import EditCourse from './page/mentors/EditCourse';
import Lessons from './page/mentors/Lessons';
import CreateLesson from './page/mentors/CreateLesson';
import DetailCourses from './page/DetailCourses';
import Footers from './components/Footer';
import EditLesson from './page/mentors/EditLesson';


export default function App() {
  const { user } = useAuthContext()
  return (
    <div className='h-full'>

      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <Beranda />
            <Footers />
          </>
        } ></Route>
        <Route path='/kelas' element={
          <>
            <Nav />
            <Course />
            <Footers />
          </>
        }></Route>
        <Route path='/kelas/:id' element={
          <>
            <Nav />
            <DetailCourse />

          </>
        }></Route>
        <Route path='/kelas/:id/kelas' element={
          <>
            <Nav />
            <DetailCourses />
            <Footers />
          </>
        }>
        </Route>
        <Route path='/user/settings' element={
          <>
            <Nav />
            <AccountSettings />
            <Footers />
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
            <div className={`p-4 ${user ? 'sm:ml-64 pt-20' : ''} `}>
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
            <div className={`p-4 ${user ? 'sm:ml-64 pt-20' : ''} `}>
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
            <div className={`p-4 ${user ? 'sm:ml-64 pt-20' : ''} `}>
              <Breadcrumbs />
              {!user ? <Login /> : <CreateCourse />}
            </div>
          </>
        }>
        </Route>

        <Route path='/mentor/course/edit/:id' element={
          <>
            {user && <Sidebars />}
            {user && <NavMentor />}
            <div className={`p-4 ${user ? 'sm:ml-64 pt-20' : ''} `}>
              <Breadcrumbs />
              {!user ? <Login /> : <EditCourse />}
            </div>
          </>
        }></Route>
        <Route path='/mentor/lesson/:id' element={
          <>
            {user && <Sidebars />}
            {user && <NavMentor />}
            <div className={`p-4 ${user ? 'sm:ml-64 pt-20' : ''} `}>
              <Breadcrumbs />
              {!user ? <Login /> : <Lessons />}
            </div>
          </>
        }></Route>
        <Route path='/mentor/lesson/create/:id' element={
          <>
            {user && <Sidebars />}
            {user && <NavMentor />}
            <div className={`p-4 ${user ? 'sm:ml-64 pt-20' : ''} `}>
              <Breadcrumbs />
              {!user ? <Login /> : <CreateLesson />}
            </div>
          </>
        }></Route>
        <Route path='/mentor/lesson/edit/:id' element={
          <>
            {user && <Sidebars />}
            {user && <NavMentor />}
            <div className={`p-4 ${user ? 'sm:ml-64 pt-20' : ''} `}>
              <Breadcrumbs />
              {!user ? <Login /> : <EditLesson />}
            </div>
          </>
        }></Route>


        {/* Mentor Route */}
        <Route path='*' element={<Notfound />}></Route>
      </Routes>

    </div>
  );
}
