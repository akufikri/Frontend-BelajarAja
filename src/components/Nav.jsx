import { Button, Navbar } from 'flowbite-react'
import { useLogout } from '../hooks/useLogout';

const Nav = () => {
      const { logout } = useLogout()

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
                              <Button onClick={handleRegisterClick} color='blue' className='rounded-xl px-4'>Daftar</Button>
                              <a href='/login' className='pt-2'>Masuk</a>
                              <Button onClick={handleClickLogout}>Keluar</Button>
                              <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse>
                              <Navbar.Link href="/" active>
                                    Home
                              </Navbar.Link>
                              <Navbar.Link href="#">About</Navbar.Link>
                              <Navbar.Link href="#">Kelas</Navbar.Link>
                        </Navbar.Collapse>
                  </Navbar ></>
      )
}
export default Nav