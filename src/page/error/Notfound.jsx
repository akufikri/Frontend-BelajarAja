import React from 'react'

export default function Notfound() {
      return (
            <>
                  <div className='fixed w-full'>
                        <div className="flex h-screen justify-center items-center">
                              <div className="max-w-5xl w-full text-center">
                                    <h1 className='text-5xl mb-5 font-medium'>Page Not Found</h1>
                                    <span className=''>please back to <a href="/" className='hover:underline'>home</a></span>
                              </div>
                        </div>
                  </div>
            </>
      )
}
