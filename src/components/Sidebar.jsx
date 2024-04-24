import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
const Sidebars = () => {
      const { logout } = useLogout();
      return (
            <>
                  <aside
                        id="logo-sidebar"
                        className="fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform -translate-x-full bg-white sm:translate-x-0"
                        aria-label="Sidebar"
                  >
                        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                              <ul className="space-y-2">
                                    <li>
                                          <Link
                                                to="/mentor/dashboard"
                                                className="flex items-center p-2 hover:text-white transition dark:text-white hover:bg-blue-300 rounded-lg hover:shadow-lg dark:hover:bg-gray-700 group"
                                          >
                                                <i className="fa-light fa-house text-xl "></i>
                                                <span className="ms-3">Dashboard</span>
                                          </Link>
                                    </li>

                                    <li>
                                          <Link
                                                to="/mentor/course"
                                                className="flex items-center p-2 hover:text-white transition dark:text-white hover:bg-blue-300 rounded-lg hover:shadow-lg dark:hover:bg-gray-700 group"
                                          >
                                                <i className="fa-light fa-video text-xl"></i>
                                                <span className="flex-1 ms-3 ">Course</span>
                                          </Link>
                                    </li>


                                    <li className="w-full">
                                          <button type="button" onClick={logout}
                                                className="flex w-full items-center p-2 hover:text-white transition dark:text-white hover:bg-blue-300 rounded-lg hover:shadow-lg dark:hover:bg-gray-700 group"
                                          >
                                                <div>
                                                      <i className="fa-light fa-right-from-bracket text-xl"></i>
                                                      <span className="flex-1 ms-3">Logout</span>
                                                </div>
                                          </button>
                                    </li>
                              </ul>
                        </div>
                  </aside>
            </>
      );
};

export default Sidebars;
