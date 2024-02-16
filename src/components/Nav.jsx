import { Button, Navbar } from 'flowbite-react'

const Nav = () => {
      return (
            <>
                  <Navbar rounded className='fixed w-full z-30'>
                        <Navbar.Brand href="/">
                              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">belajarAja</span>
                        </Navbar.Brand>
                        <div className="flex md:order-2">
                              <Button color='blue'>Masuk</Button>
                              <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse>
                              <Navbar.Link href="#" active>
                                    Home
                              </Navbar.Link>
                              <Navbar.Link href="#">About</Navbar.Link>
                              <Navbar.Link href="#">Kelas</Navbar.Link>

                        </Navbar.Collapse>
                  </Navbar></>
      )
}
export default Nav