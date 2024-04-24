import { Banner, Toast } from "flowbite-react";
import CardDashboard from "../../components/CardDashboard"

const Dashboard = () => {
      return (
            <>
                  <Banner>
                        <div className="flex rounded-md w-full justify-between mb-10 border-blue-200 bg-blue-500 p-4 dark:border-gray-600 dark:bg-gray-700">
                              <div className="mx-auto flex items-center">
                                    <p className="flex items-center text-sm font-normal text-white dark:text-white">
                                          <span className="[&_p]:inline">
                                                Selamat datang di <span className="font-bold text-yellow-100">BelajarAja</span> v.1.0.0

                                          </span>
                                    </p>
                              </div>
                              <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-white dark:text-white">
                                    <i className="fa-regular fa-xmark "></i>
                              </Banner.CollapseButton>
                        </div>
                  </Banner>
                  {/* card dashboard */}
                  <CardDashboard />
                  {/* card dashboard */}
            </>
      )
}
export default Dashboard