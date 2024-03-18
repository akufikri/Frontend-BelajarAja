import { Card } from 'flowbite-react';
const Benefits = () => {
    return (
        <>
            <div className="flex justify-center h-[50vh]">
                <div className="max-w-7xl w-full sm:p-0 p-4">
                    <div className='my-9'>
                        <h1 className='text-2xl font-semibold text-gray-700 text-center'>Benefits</h1>
                        <p className='text-center text-sm text-gray-500 my-3'>Keuntungan yang anda bisa dapatkan jika anda bergabung dengan kami 😁</p>
                    </div>
                    <div className="flex gap-4 col-span-4 mt-5">
                        <Card className="max-w-sm shadow-none  border transition h-56 w-full">
                            <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <i className="fa-light fa-clock-three"></i>
                            </div>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                Akses pembelajaran <span className='font-semibold'>Gratis</span>, selama <span className='font-semibold'>24 Jam</span> untuk anda!
                            </p>
                        </Card>
                        <Card className="max-w-sm shadow-none  border transition h-56 w-full">
                            <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <i className="fa-light fa-video"></i>
                            </div>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                Video pembelajaran yang <span className='font-semibold'>mudah di pahami</span>, dan <span className='font-semibold'>singkat</span>
                            </p>
                        </Card>
                        <Card className="max-w-sm shadow-none  border transition h-56 w-full">
                            <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <i className="fa-light fa-users"></i>
                            </div>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                Mentor yang <span className='font-semibold'>Terpercaya</span>, dan <span className='font-semibold'>Ter uji</span> untuk anda!
                            </p>
                        </Card>
                        <Card className="max-w-sm shadow-none  border transition h-56 w-full">
                            <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <i className="fa-light fa-trophy"></i>
                            </div>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                                Jelajahi <span className='font-semibold'>fitur kuis</span> untuk mendalami pemahaman Anda tentang <span className='font-semibold'>materi</span>
                            </p>
                        </Card>

                    </div>
                </div>
            </div>


        </>
    )
}
export default Benefits