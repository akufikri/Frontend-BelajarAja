import { Card } from 'flowbite-react';
const Benefits = () => {
    return (
        <>
            <div className="flex justify-center mt-32">
                <div className="max-w-5xl w-full">
                    <div className='my-7'>
                        <h1 className='text-[48px] font-medium'>Benefits</h1>
                        <div className='flex justify-between'>
                            <div className='w-9/12'>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore ipsam. Dolore exercitationem aperiam sequi, sint dolorum asperiores. Nisi?</span>
                            </div>
                            <button className='bg-blue-50 px-6 rounded-md'>View all</button>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                01
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, harum.
                            </p>
                        </Card>
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                02
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, harum.
                            </p>
                        </Card>
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                03
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, harum.
                            </p>
                        </Card>
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                04
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, harum.
                            </p>
                        </Card>
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                05
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, harum.
                            </p>
                        </Card>
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                06
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, harum.
                            </p>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Benefits