

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import icons from '../assets/logo-2.png'

const Sidebars = () => {
      return (
            <Sidebar aria-label="Sidebar with logo branding example" className='h-screen  max-w-64 w-full'>
                  <Sidebar.Logo href="#" img={icons} imgAlt="BelajarAja">
                        Flowbite
                  </Sidebar.Logo>
                  <Sidebar.Items>
                        <Sidebar.ItemGroup>
                              <Sidebar.Item href="/user/dashboard" icon={HiChartPie}>
                                    Dashboard
                              </Sidebar.Item>
                              <Sidebar.Item href="#" icon={HiViewBoards}>
                                    Your Course
                              </Sidebar.Item>
                              {/* <Sidebar.Item href="#" icon={HiInbox}>
                                    Inbox
                              </Sidebar.Item>
                              <Sidebar.Item href="#" icon={HiUser}>
                                    Users
                              </Sidebar.Item>
                              <Sidebar.Item href="#" icon={HiShoppingBag}>
                                    Products
                              </Sidebar.Item>
                              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                    Sign In
                              </Sidebar.Item> */}
                              <Sidebar.Item href="#" icon={HiTable}>
                                    Sign Up
                              </Sidebar.Item>
                        </Sidebar.ItemGroup>
                  </Sidebar.Items>
            </Sidebar>
      );
}

export default Sidebars
