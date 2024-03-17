import { Button, Avatar } from 'flowbite-react';
const MyClass = () => {
      return (
            <>
                  <div className="sm:flex justify-center pt-20 gap-5 p-4">
                        <div className="w-full max-w-3xl">
                              <div className="h-96 w-full bg-gray-500 rounded-lg">

                                    <iframe className='w-full h-full rounded-lg' src="https://youtu.be/9s_MuekH8L0?si=FQFSVANHFFoR-_3s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                              </div>
                              <div className="mt-6">
                                    <div>
                                          <h1 className="text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                                    </div>
                                    <div className="my-5">
                                          <div className="h-auto rounded-lg p-4">
                                                <div className="flex w-full justify-between">
                                                      <div className="flex gap-4">
                                                            <div>
                                                                  <button className='rounded-full bg-gray-200 h-10 w-10 me-2'><i className="fa-light fa-thumbs-up"></i></button>
                                                                  <span>Suka</span>
                                                            </div>
                                                            <div>
                                                                  <button className='rounded-full bg-gray-200 h-10 w-10 me-2'><i className="fa-light fa-thumbs-down"></i></button>
                                                                  <span>Tidak</span>
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <Button color='success'><span>Share</span> <i className="fa-light fa-share ms-2"></i></Button>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div>
                                          <span className="font-medium text-base">Deskripsi video</span>
                                          <p className="text-sm mt-2 leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore similique nisi modi quis maiores deserunt fugiat nesciunt, cum officiis fuga ab consequuntur iure corrupti quisquam voluptas in quam accusamus ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo excepturi, nobis at, atque odio a voluptatem ea corrupti fugit non sit consectetur tenetur! Soluta dolorum quae accusamus voluptatem eveniet? </p>
                                    </div>
                                    {/* <div className="mt-10">
                                          <div className="w-full h-20 rounded-lg border px-9 py-3">
                                                <div className='ms-auto absolute'>
                                                      <Avatar rounded size="md" />
                                                </div>
                                          </div>
                                    </div> */}
                              </div>
                        </div>
                        <div className="w-full max-w-xl">
                              <div className="h-auto border rounded-lg w-full p-4">
                                    <div className="grid grid-cols-1">
                                          <button className="h-auto border rounded-xl mb-4 p-4 w-full hover:shadow">
                                                <div className="flex sm:space-x-5">
                                                      <div className='mt-1.5'>
                                                            <i className="fa-light fa-video"></i>
                                                      </div>
                                                      <div className='space-y-1'>
                                                            <span className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                                                            <span className='block text-start text-sm font-medium text-gray-400'>04.00</span>
                                                      </div>
                                                </div>
                                          </button>
                                          <button className="h-auto border rounded-xl mb-4 p-4 w-full hover:shadow">
                                                <div className="flex space-x-5">
                                                      <div className='mt-1.5'>
                                                            <i className="fa-light fa-book-sparkles"></i>
                                                      </div>
                                                      <div className='space-y-1'>
                                                            <span className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                                                            <span className='block text-start text-sm font-medium text-gray-400'><i className="fa-light fa-lock-keyhole"></i> Terkunci</span>
                                                      </div>
                                                </div>
                                          </button>

                                    </div>
                              </div>
                        </div>
                  </div >
            </>
      )
}
export default MyClass