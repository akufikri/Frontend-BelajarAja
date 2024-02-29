

import { Sidebar } from 'flowbite-react';
import { HiBookOpen, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import icons from '../assets/logo-2.png'

const Sidebars = () => {
      return (
            <Sidebar aria-label="Sidebar with logo branding example" className='h-screen z-50  max-w-64 w-full border-r fixed'>
                  <Sidebar.Logo href="#" img={icons} imgAlt="BelajarAja">
                        BelajarAja
                  </Sidebar.Logo>
                  <Sidebar.Items>
                        <Sidebar.ItemGroup>
                              <Sidebar.Item href="/user/dashboard" icon={HiChartPie}>
                                    Dashboard
                              </Sidebar.Item>
                              <Sidebar.Item href="/mentor/course" icon={HiBookOpen}>
                                    Courses
                              </Sidebar.Item>
                              {/* <Sidebar.Item href="#" icon={HiTable}>
                                    Sign Up
                              </Sidebar.Item> */}
                        </Sidebar.ItemGroup>
                  </Sidebar.Items>
            </Sidebar>
      );
}

export default Sidebars
