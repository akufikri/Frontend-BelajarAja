import { Button } from 'flowbite-react'
import { motion as framerMotion } from 'framer-motion'

const HeroSection = () => {
      const handleClick = () => {
            window.location.href = '/kelas'
      }
      return (
            <>
                  <div className='h-[91vh] flex items-center justify-center'>
                        <div className="max-w-6xl flex w-full justify-between ms:p-0 p-4">
                              <div className='w-full mt-auto'>
                                    <h1 className='sm:text-4xl text-3xl leading-snug'>Belajar Lebih Menyenangkan dengan BelajarAja.id</h1>
                                    <div className='my-5'>
                                          <span className='text-gray-500'>
                                                Jadikan Setiap Pelajaran Petualangan yang Tak Terlupakan!
                                          </span>
                                    </div>
                                    <framerMotion.div whileTap={{ scale: 0.98, rotate: 0, borderRadius: "100%" }}>
                                          <Button onClick={handleClick} className='uppercase shadow-sm transition rounded-full py-0' color='blue'>Belajar sekarang</Button>
                                    </framerMotion.div>
                              </div>
                              <div className='w-full sm:block hidden'>
                                    <div className="h-64 bg-gray-500 w-full rounded-lg">
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Attachment  */}
                  <div className='absolute top-0'>
                        <div className="sm:h-56 h-32 sm:w-60 w-52 bg-blue-500 rounded-r-full">

                        </div>
                  </div>
                  <div className='absolute sm:-bottom-20 bottom-1 right-0'>
                        <div className="sm:h-56 h-20 w-56 bg-yellow-200 rounded-l-full"></div>
                  </div>
                  <div className='sm:absolute hidden bottom-20 left-56 sm:flex gap-4'>
                        <div className="h-10 w-10 bg-blue-500 rounded-full animate-bounce delay-500"></div>
                        <div className="h-8 w-8 bg-yellow-200 rounded-full mt-auto animate-bounce"></div>
                        <div className="h-8 w-8 bg-yellow-300 rounded-full mt-auto animate-bounce"></div>
                  </div>
                  {/*  */}
            </>
      );
};

export default HeroSection;
