import { Card, Button, Rating } from 'flowbite-react';
const PreviewCourse = () => {
      return (
            <>
                  <div className="flex justify-center mt-20 sm:p-0 p-4">
                        <div className="max-w-5xl w-full">
                              <div className='my-7'>
                                    <h1 className='sm:text-[48px] text-2xl font-medium'>Our Courses</h1>
                                    <div className='flex justify-between'>
                                          <div className='w-9/12 pt-5'>
                                                <span className='sm:text-sm text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore ipsam. </span>
                                          </div>
                                          <div className='sm:mt-0 mt-5'>
                                                <button className='bg-blue-50 px-7 rounded-md sm:text-sm text-xs py-2'>View all</button>
                                          </div>
                                    </div>

                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                    <Card
                                          className="max-w-max p-4 shadow-none border-0 bg-blue-50"
                                          renderImage={() => (
                                                <img className='rounded-xl'
                                                      width={500}
                                                      height={500}
                                                      src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                      alt="https://unsplash.com/photos/man-in-black-jacket-wearing-white-face-mask-IBKyH0V3rew"
                                                />
                                          )}
                                    >
                                          <div className="flex justify-between">
                                                <h5 className="text-md font-medium tracking-tight text-gray-900 dark:text-white">
                                                      Laravel Tutorial
                                                </h5>
                                                <span className='bg-gray-500 text-sm px-5 rounded-2xl pt-0.5 text-white'>1 Hours</span>
                                          </div>
                                          <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.....
                                          </p>
                                          <div className="flex gap-3 justify-between">
                                                <Button className='px-5' color='blue'> <i className="fa-regular fa-play"></i> <span className='ms-2'>Learn</span></Button>
                                                <Rating>
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                </Rating>
                                          </div>
                                    </Card>
                                    <Card
                                          className="max-w-max p-4 shadow-none border-0 bg-blue-50"
                                          renderImage={() => (
                                                <img className='rounded-xl'
                                                      width={500}
                                                      height={500}
                                                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                      alt="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                />
                                          )}
                                    >
                                          <div className="flex justify-between">
                                                <h5 className="text-md font-medium tracking-tight text-gray-900 dark:text-white">
                                                      UI/UX For Beginners
                                                </h5>
                                                <span className='bg-gray-500 text-sm px-5 rounded-2xl pt-0.5 text-white'>1 Hours</span>
                                          </div>
                                          <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.....
                                          </p>
                                          <div className="flex gap-3 justify-between">
                                                <Button className='px-5' color='blue'> <i className="fa-regular fa-play"></i> <span className='ms-2'>Learn</span></Button>
                                                <Rating>
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                </Rating>
                                          </div>
                                    </Card>
                                    <Card
                                          className="max-w-max p-4 shadow-none border-0 bg-blue-50"
                                          renderImage={() => (
                                                <img className='rounded-xl'
                                                      width={500}
                                                      height={500}
                                                      src="https://fakeimg.pl/600x400/ffffff/301616"
                                                      alt="image 1"
                                                />
                                          )}
                                    >
                                          <div className="flex justify-between">
                                                <h5 className="text-md font-medium tracking-tight text-gray-900 dark:text-white">
                                                      Laravel Tutorial
                                                </h5>
                                                <span className='bg-gray-500 text-sm px-5 rounded-2xl pt-0.5 text-white'>1 Hours</span>
                                          </div>
                                          <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.....
                                          </p>
                                          <div className="flex gap-3 justify-between">
                                                <Button className='px-5' color='blue'> <i className="fa-regular fa-play"></i> <span className='ms-2'>Learn</span></Button>
                                                <Rating>
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                </Rating>
                                          </div>
                                    </Card>
                                    <Card
                                          className="max-w-max p-4 shadow-none border-0 bg-blue-50"
                                          renderImage={() => (
                                                <img className='rounded-xl'
                                                      width={500}
                                                      height={500}
                                                      src="https://fakeimg.pl/600x400/ffffff/301616"
                                                      alt="image 1"
                                                />
                                          )}
                                    >
                                          <div className="flex justify-between">
                                                <h5 className="text-md font-medium tracking-tight text-gray-900 dark:text-white">
                                                      Laravel Tutorial
                                                </h5>
                                                <span className='bg-gray-500 text-sm px-5 rounded-2xl pt-0.5 text-white'>1 Hours</span>
                                          </div>
                                          <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.....
                                          </p>
                                          <div className="flex gap-3 justify-between">
                                                <Button className='px-5' color='blue'> <i className="fa-regular fa-play"></i> <span className='ms-2'>Learn</span></Button>
                                                <Rating>
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                </Rating>
                                          </div>
                                    </Card>
                                    <Card
                                          className="max-w-max p-4 shadow-none border-0 bg-blue-50"
                                          renderImage={() => (
                                                <img className='rounded-xl'
                                                      width={500}
                                                      height={500}
                                                      src="https://fakeimg.pl/600x400/ffffff/301616"
                                                      alt="image 1"
                                                />
                                          )}
                                    >
                                          <div className="flex justify-between">
                                                <h5 className="text-md font-medium tracking-tight text-gray-900 dark:text-white">
                                                      Laravel Tutorial
                                                </h5>
                                                <span className='bg-gray-500 text-sm px-5 rounded-2xl pt-0.5 text-white'>1 Hours</span>
                                          </div>
                                          <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.....
                                          </p>
                                          <div className="flex gap-3 justify-between">
                                                <Button className='px-5' color='blue'> <i className="fa-regular fa-play"></i> <span className='ms-2'>Learn</span></Button>
                                                <Rating>
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                </Rating>
                                          </div>
                                    </Card>
                                    <Card
                                          className="max-w-max p-4 shadow-none border-0 bg-blue-50"
                                          renderImage={() => (
                                                <img className='rounded-xl'
                                                      width={500}
                                                      height={500}
                                                      src="https://fakeimg.pl/600x400/ffffff/301616"
                                                      alt="image 1"
                                                />
                                          )}
                                    >
                                          <div className="flex justify-between">
                                                <h5 className="text-md font-medium tracking-tight text-gray-900 dark:text-white">
                                                      Laravel Tutorial
                                                </h5>
                                                <span className='bg-gray-500 text-sm px-5 rounded-2xl pt-0.5 text-white'>1 Hours</span>
                                          </div>
                                          <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.....
                                          </p>
                                          <div className="flex gap-3 justify-between">
                                                <Button className='px-5' color='blue'> <i className="fa-regular fa-play"></i> <span className='ms-2'>Learn</span></Button>
                                                <Rating>
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                      <Rating.Star />
                                                </Rating>
                                          </div>
                                    </Card>
                              </div>
                        </div>
                  </div>
            </>
      )
}
export default PreviewCourse