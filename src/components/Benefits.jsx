import { Card } from 'flowbite-react';
const Benefits = () => {
    return (
        <>
            <div className="flex justify-center mt-32 h-[100vh]">
                <div className="max-w-6xl w-full sm:p-0 p-4">
                    <div className='my-7'>
                        <h1 className='text-4xl font-medium text-gray-700'>Benefits</h1>
                        <div className='flex justify-between'>
                            <div className='w-9/12 pt-5'>
                                <span className='sm:text-sm text-xs text-gray-600 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore ipsam. </span>
                            </div>

                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                01
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Card>
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                02
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Card>
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                03
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Card>
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                04
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Card>
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                05
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Card>
                        <Card href="#" className="max-w-sm shadow-none border-0 bg-blue-50 h-80">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                06
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                <span className='font-semibold block'>Lorem ipsum dolor sit amet.</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Card>

                    </div>
                </div>
            </div>


        </>
    )
}
export default Benefits