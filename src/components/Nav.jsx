import { Button, Navbar, Dropdown, Avatar } from 'flowbite-react'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/authHooks';
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-2.png'

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
                  <Navbar rounded className='fixed w-full z-30 sm:px-32'>
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
                                                <a href='/register' className='pt-2.5 text-sm font-normal'>Register</a>
                                                <Button onClick={handleLoginClick} color='blue' className='rounded-8 text-xs font-normal py-0'>Login</Button>
                                          </>
                                    )
                              }
                              <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse className='me-auto mx-5'>
                              <Navbar.Link as={Link} to='/' active={location.pathname === '/'}>
                                    Home
                              </Navbar.Link>
                              <Navbar.Link as={Link} to='/course' active={location.pathname === '/course'} >Course</Navbar.Link>
                              <Navbar.Link href="#">Category</Navbar.Link>
                              {
                                    user && (
                                          <>
                                                <Navbar.Link href="#">Teach Now</Navbar.Link>
                                          </>
                                    )
                              }
                        </Navbar.Collapse>
                  </Navbar ></>
      )
}
export default Nav