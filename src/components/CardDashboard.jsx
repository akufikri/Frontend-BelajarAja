const CardDashboard = () => {
      return (
            <>
                  <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
                        <div className="h-44 bg-lime-100 rounded-2xl p-5">
                              <div>
                                    <h1 className="text-7xl text-gray-800 mb-5">0</h1>
                                    <span className="text-sm text-gray-500">Total User Join Course</span>
                              </div>
                        </div>
                        <div className="h-44 bg-slate-200  rounded-2xl p-5">
                              <div>
                                    <h1 className="text-7xl text-gray-800 mb-5">0</h1>
                                    <span className="text-sm text-gray-500">Total course</span>
                              </div>
                        </div>
                        <div className="h-44 bg-cyan-200  rounded-2xl p-5">
                              <div>
                                    <h1 className="text-7xl text-gray-800 mb-5">0</h1>
                                    <span className="text-sm text-gray-500">Total leasons</span>
                              </div>
                        </div>
                        <div className="h-44 bg-violet-200  rounded-2xl p-5">
                              <div>
                                    <h1 className="text-7xl text-gray-800 mb-5">0</h1>
                                    <span className="text-sm text-gray-500">Total profit</span>
                              </div>
                        </div>
                  </div>
            </>
      )
}
export default CardDashboard