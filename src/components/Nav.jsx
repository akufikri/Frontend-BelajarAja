import { Button, Navbar, Dropdown, Avatar } from 'flowbite-react'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/authHooks';
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-2.png'
import { motion as framerMotion } from 'framer-motion'

const Nav = () => {
      const { logout } = useLogout()
      const { user } = useAuthContext()
      const location = useLocation();
      const handleLoginClick = () => {
            window.location.href = '/login';
      };

      const handleClickLogout = () => {
            logout()
            window.location.href = '/'
      }
      const handleClickSettings = () => {
            window.location.href = '/user/settings';
      }
      return (
            <>
                  <Navbar rounded className='fixed w-full z-30 sm:px-32 shadow-sm h-16'>
                        <Navbar.Brand href="/">
                              {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">belajarAja</span> */}
                              <img className='w-8 bg-gray-100 rounded-md' src={logo} alt="" />
                        </Navbar.Brand>
                        <div className="flex md:order-4 gap-7">
                              {user && (
                                    <>
                                          <Dropdown label="" renderTrigger={() => <div>
                                                <Avatar rounded />
                                          </div>}>
                                                <Dropdown.Header>
                                                      <span className="block truncate text-sm font-medium">{user.email}</span>
                                                </Dropdown.Header>
                                                <Dropdown.Item onClick={handleClickSettings}>Settings</Dropdown.Item>
                                                <Dropdown.Item>My Course</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item onClick={handleClickLogout}>SignOut</Dropdown.Item>
                                          </Dropdown>
                                    </>
                              )}
                              {
                                    !user && (
                                          <>
                                                <a href='/signup' className='pt-2.5 text-sm font-normal'>Signup</a>

                                                <framerMotion.div whileTap={{ scale: 0.9, rotate: 0, borderRadius: "100%" }}>
                                                      <Button onClick={handleLoginClick} color='blue' className='rounded-full px-6 transition text-xs font-normal py-0'>Login</Button>
                                                </framerMotion.div>
                                          </>
                                    )
                              }
                              <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse className='sm:me-auto sm:mx-5 bg-white w-full'>
                              <Navbar.Link as={Link} to='/' active={location.pathname === '/'}>
                                    Beranda
                              </Navbar.Link>
                              <Navbar.Link as={Link} to='/kelas' active={location.pathname === '/course'} >Kelas</Navbar.Link>
                              <Navbar.Link href="#">Kategori</Navbar.Link>
                              {
                                    !user ? <Navbar.Link as={Link} to="/mengajar/register" active={location.pathname === '/mengajar/register'}>Mengajar</Navbar.Link> : <Navbar.Link as={Link} to='/mentor/dashboard' active={location.pathname === '/mentor/dashboard`'}>Mengajar</Navbar.Link>
                              }

                        </Navbar.Collapse>
                  </Navbar ></>
      )
}
export default Nav