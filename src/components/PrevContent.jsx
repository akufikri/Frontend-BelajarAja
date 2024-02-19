import { Card, Button, Rating } from 'flowbite-react';

const PreviewContent = () => {
    return (
        <>
            <div className='container mt-5 mx-auto flex flex-col items-center px-3'>
                <div className="max-w-6xl w-full">
                    <div>
                        <h1 className='text-2xl font-bold text-center mt-20 mb-5'>Rekomendasi untuk anda!</h1>
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                        <Card
                            className="max-w-sm p-4"
                            renderImage={() => (
                                <img className='rounded-xl'
                                    width={500}
                                    height={500}
                                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                                    alt="image 1"
                                />
                            )}
                        >
                            <div className="flex justify-between">
                                <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
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
                            className="max-w-sm p-4"
                            renderImage={() => (
                                <img className='rounded-xl'
                                    width={500}
                                    height={500}
                                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                                    alt="image 1"
                                />
                            )}
                        >
                            <div className="flex justify-between">
                                <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
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
                            className="max-w-sm p-4"
                            renderImage={() => (
                                <img className='rounded-xl'
                                    width={500}
                                    height={500}
                                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                                    alt="image 1"
                                />
                            )}
                        >
                            <div className="flex justify-between">
                                <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
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

                    <div className="flex justify-center mt-5">
                        <Button color='blue'>Tampilkan semua!</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreviewContent;
