import { Navbar, Avatar, Dropdown } from 'flowbite-react';
import logo from '../assets/logo-2.png'
import { useLogout } from '../hooks/useLogout';
const NavMentor = () => {
      const { logout } = useLogout()
      const handleClickLogout = () => {
            logout()
            window.location.href = '/'
      }
      return (
            <>
                  <Navbar rounded className='fixed w-full z-50 bg-gray-100 border-b'>
                        <Navbar.Brand href="https://flowbite-react.com">
                              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                              <div className="grid">
                                    <span className="text-xl font-semibold dark:text-white">BelajarAja</span>
                                    <span className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                              </div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                              <Dropdown
                                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                                    arrowIcon={false}
                                    inline
                              >
                                    <Dropdown.Header>
                                          <span className="block text-sm">Bonnie Green</span>
                                          <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                                    </Dropdown.Header>
                                    {/* <Dropdown.Item>Dashboard</Dropdown.Item>
                                    <Dropdown.Item>Settings</Dropdown.Item>
                                    <Dropdown.Item>Earnings</Dropdown.Item> */}
                                    {/* <Dropdown.Divider /> */}
                                    <Dropdown.Item onClick={handleClickLogout}>Keluar</Dropdown.Item>
                              </Dropdown>
                        </Navbar.Collapse>
                  </Navbar>
            </>
      )
}
export default NavMentor 