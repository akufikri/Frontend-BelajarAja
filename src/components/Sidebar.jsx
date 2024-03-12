import { Link } from "react-router-dom";
import logo from '../assets/logo-2.png'
const Sidebars = () => {
      return (
            <>
                  <div className="h-screen bg-gray-100 border-r w-72 fixed z-50">
                        <div className="px-6 pt-5 flex gap-4">
                              <div className="bg-white h-10 mt-1 w-10 rounded-lg border">
                                    <img className="h-9 w-9" src={logo} alt="" />
                              </div>
                              <div className="">
                                    <span className="text-lg font-medium">BelajarAja</span>
                                    <span className="block text-sm">WIB : 14.00</span>
                              </div>
                        </div>
                        {/* menu */}
                        <hr className="mt-5 mb-4" />
                        <div className="px-5 w-full">
                              <ul className="space-y-4 w-full">
                                    <li>
                                          <Link to='/mentor/dashboard' className="group block w-full text-xl text-gray-800 hover:text-black transition">
                                                <div className="flex items-center space-x-4 hover:bg-white hover:shadow-md p-2 rounded-md transition">
                                                      <i className="fa-regular fa-gauge"></i>
                                                      <span className="text-base">Dashboard</span>
                                                </div>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link to='/statistic' className="group block w-full text-xl text-gray-800 hover:text-black transition">
                                                <div className="flex items-center space-x-4 hover:bg-white hover:shadow-md p-2 rounded-md transition">
                                                      <i className="fa-regular fa-chart-simple"></i>
                                                      <span className="text-base">Statistic</span>
                                                </div>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link to='/mentor/course' className="group block w-full text-xl text-gray-800 hover:text-black transition">
                                                <div className="flex items-center space-x-4 hover:bg-white hover:shadow-md p-2 rounded-md transition">
                                                      <i className="fa-regular fa-video"></i>
                                                      <span className="text-base">Course</span>
                                                </div>
                                          </Link>
                                    </li>

                                    <div className="pt-5 pb-5">
                                          <span className="uppercase text-gray-500">Account</span>
                                    </div>
                                    <li>
                                          <Link to='/settings' className="group block w-full text-xl text-gray-800 hover:text-black transition">
                                                <div className="flex items-center space-x-4 hover:bg-white hover:shadow-md p-2 rounded-md transition">
                                                      <i className="fa-regular fa-gear"></i>
                                                      <span className="text-base">Settings</span>
                                                </div>
                                          </Link>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </>
      );
}

export default Sidebars;
