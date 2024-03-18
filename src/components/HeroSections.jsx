import { useState } from 'react';
import { Button } from 'flowbite-react';
import { motion as framerMotion } from 'framer-motion';
import mybg from '../assets/bg-1.png';

const HeroSection = () => {
      const [isLoading, setIsLoading] = useState(true);

      const handleImageLoad = () => {
            setIsLoading(false);
      };

      const handleClick = () => {
            window.location.href = '/kelas';
      };

      return (
            <>
                  <div className='h-[77vh] flex items-center justify-center'>
                        <div className="max-w-7xl flex w-full justify-between ms:p-0 p-4">
                              <div className='w-full sm:mt-10'>
                                    <h1 className='sm:text-6xl text-3xl sm:leading-[4.2rem] font-semibold text-gray-700'>Belajar Lebih Menyenangkan di <span className='text-[#FFC236]'>B</span><span className='text-[#0074BC]'>elajar</span><span className='text-[#FFC236]'>A</span><span className='text-[#0074BC]'>ja</span></h1>
                                    <div className='my-5'>
                                          <span className='text-gray-500 '>
                                                Ayo, mari kita eksplorasi dan tingkatkan beragam keterampilan bersama kami. Temukan ratusan video pembelajaran di sini. dan <span className='font-semibold'>Geratis.</span>
                                          </span>
                                    </div>
                                    <framerMotion.div whileTap={{ scale: 0.98, rotate: 0, borderRadius: "100%" }}>
                                          <Button onClick={handleClick} className='uppercase shadow-sm transition rounded-lg py-2' color='blue'><i className="fa-regular fa-play me-2"></i>  Belajar sekarang</Button>
                                    </framerMotion.div>
                              </div>
                              <div className='w-full sm:block hidden'>
                                    <div className="h-96 w-full rounded-lg relative overflow-hidden">
                                          <img
                                                src={mybg}
                                                alt=""
                                                className={`w-full h-full object-cover ${isLoading ? 'filter blur-md' : ''}`}
                                                onLoad={handleImageLoad}
                                          />
                                          {isLoading && (
                                                <div className="absolute inset-0 bg-white opacity-50 flex items-center justify-center">
                                                      {/* Tambahkan ikon loader di sini */}
                                                </div>
                                          )}
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default HeroSection;
