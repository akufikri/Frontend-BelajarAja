import React from 'react';
const HeroSection = () => {
      return (
            <section className="h-screen pt-36"> {/* Section Container */}
                  <div className="container mx-auto flex flex-col items-center px-4"> {/* Content Container */}
                        <div className="max-w-5xl w-full items-center gap-8"> {/* Responsive Layout */}
                              <div className="bg-white pt-5 w-[854px] justify-between shadow-md rounded-lg h-[100px] mx-auto px-5 flex gap-5">
                                    <div className='bg-blue-500 w-[62px] h-[62px] rounded-lg flex items-center justify-center'>
                                          <i className="fa-solid fa-bolt text-3xl text-[#FFC236]"></i>
                                    </div>
                                    <div>
                                          <h1 className='text-[48px] font-medium'><span className='text-blue-500'>Unlock </span>Your Creative Potential</h1>
                                    </div>
                              </div>
                              <div className='text-center '>
                                    <h1 className='text-[38px] mt-5'>with Online Courses in Various Fields.</h1>
                                    <span className='text-[18px] font-normal'>
                                          Learn from Industry Experts and Enhance Your Skills.
                                    </span>
                              </div>

                              <div className="flex justify-center mt-6 gap-3">
                                    <div>
                                          <button className='bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-md'>Explore Course</button>
                                    </div>
                                    <div>
                                          <button className='bg-gray-50 hover:bg-gray-100 shadow text-black px-5 py-3 rounded-md'>View Pricing</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default HeroSection;
