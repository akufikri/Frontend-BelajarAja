import React from 'react'

export default function About() {
      return (
            <div className='h-[90vh] pt-28'>
                  <h1 className='text-center text-5xl mb-20 font-semibold'>Tentang Kami</h1>
                  <div className="max-w-4xl mx-auto flex">
                        <div className="overflow-y-auto space-y-10 h-[80vh]">
                              {/* Tujuan */}
                              <div className='space-y-2'>
                                    <div className="flex items-center gap-2">
                                          <div className="h-10 w-5 bg-blue-200"></div>
                                          <h1 className='text-4xl font-semibold uppercase text-gray-800'>Tujuan</h1>
                                    </div>
                                    <div className="ps-8 max-w-2xl">
                                          <span className='text-sm text-gray-600'>Pembuatan website BelajarAja adalah prioritas utama Tugas Kewirausahaan kami. Kami menggali peluang di masa depan dan merancang platform manajemen konten pembelajaran.</span>
                                    </div>
                              </div>
                              {/* Harapan */}
                              <div className='space-y-2'>
                                    <div className="flex items-center gap-2">
                                          <div className="h-10 w-5 bg-yellow-200"></div>
                                          <h1 className='text-4xl font-semibold uppercase text-gray-800'>Harapan</h1>
                                    </div>
                                    <div className="ps-8 max-w-2xl">
                                          <span className='text-sm text-gray-600'>Semoga dengan adanya platform ini bisa bermanfaat untuk khalayak ramai, mau itu dari instansi resmi atau non resmi, kami sangat menerima feedback dari teman teman semua untuk Projek ini.😁</span>
                                    </div>
                              </div>

                        </div>

                  </div>
            </div>
      )
}
