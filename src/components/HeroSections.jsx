import React from 'react';
import { Button } from 'flowbite-react'

const HeroSection = () => {
      return (
            <section className="py-12 md:py-20"> {/* Section Container */}
                  <div className="container mx-auto flex flex-col items-center px-4"> {/* Content Container */}
                        <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-8"> {/* Responsive Layout */}
                              <div className="w-full md:w-1/2">
                                    <h1 className="text-3xl font-bold text-center md:text-left mb-4">
                                          Selamat datang di BelajarAja.id
                                    </h1>
                                    <p className="text-gray-700 text-center md:text-left">
                                          Temukan beragam materi dan kursus berkualitas untuk meningkatkan skill dan pengetahuanmu.
                                    </p>
                                    <div className="mt-6 flex justify-center md:justify-start">
                                          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded">
                                                Mulai Belajar
                                          </button> */}
                                          <Button color='blue' className=' transition hover:-rotate-2 shadow'>Mulai belajar</Button>
                                    </div>
                              </div>
                              <div className="w-full md:w-1/2 relative">
                                    <img
                                          src="https://placehold.co/600x400"
                                          alt="Your Product"
                                          className="rounded-md -rotate-3 shadow-md"
                                    />
                                    <img
                                          src="https://placehold.co/550x350" // Slightly smaller image
                                          alt="Your Product (stacked)"
                                          className="rounded-md absolute top-8 left-6 -rotate-1 shadow-md"
                                    />
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default HeroSection;
