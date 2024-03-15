import { Link } from "react-router-dom";
const Sidebars = () => {

      return (
            <>
                  <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                              <ul className="space-y-2 font-medium">
                                    <li>
                                          <Link to='/mentor/dashboard' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">


                                                <i className="fa-regular fa-gauge text-2xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                                                <span className="ms-3 font-medium text-gray-600">Dashboard</span>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link to='/mentor/statistic' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                                <i className="fa-regular fa-chart-simple text-2xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Statistic</span>

                                          </Link>
                                    </li>
                                    <li>
                                          <Link to='/mentor/course' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                                <i className="fa-regular fa-video text-2xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Course</span>

                                          </Link>
                                    </li>

                              </ul>
                        </div>
                  </aside>
            </>
      );
}

export default Sidebars;
