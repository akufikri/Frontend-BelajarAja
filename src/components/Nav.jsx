import { Button, Navbar, Dropdown, Avatar } from 'flowbite-react'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/authHooks';
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
      const { logout } = useLogout()
      const { user } = useAuthContext()
      const location = useLocation();
      const handleRegisterClick = () => {
            window.location.href = '/register';
      };

      const handleClickLogout = () => {
            logout()
      }
      return (
            <>
                  <Navbar rounded className='fixed w-full z-30'>
                        <Navbar.Brand href="/">
                              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">belajarAja</span>
                        </Navbar.Brand>
                        <div className="flex md:order-2 gap-4">
                              {user && (
                                    <>
                                          <Dropdown label="" renderTrigger={() => <div>
                                                <Avatar rounded />
                                          </div>}>
                                                <Dropdown.Header>
                                                      <span className="block truncate text-sm font-medium">{user.email}</span>
                                                </Dropdown.Header>
                                                <Dropdown.Item>Dashboard</Dropdown.Item>
                                                <Dropdown.Item>Settings</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item onClick={handleClickLogout}>Keluar</Dropdown.Item>
                                          </Dropdown>
                                    </>
                              )}
                              {
                                    !user && (
                                          <>
                                                <Button onClick={handleRegisterClick} color='blue' className='rounded-xl px-4'>Daftar</Button>
                                                <a href='/login' className='pt-2'>Masuk</a>
                                          </>
                                    )
                              }
                              <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse>
                              <Navbar.Link as={Link} to='/' active={location.pathname === '/'}>
                                    Home
                              </Navbar.Link>
                              <Navbar.Link as={Link} to='/course' active={location.pathname === '/course'} >Course</Navbar.Link>
                              <Navbar.Link href="#">Category</Navbar.Link>
                        </Navbar.Collapse>
                  </Navbar ></>
      )
}
export default Nav