import { Card, Button } from 'flowbite-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/authHooks';

const DetailCourse = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const { user } = useAuthContext();
      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await axios.get(`https://be-belajaraja.vercel.app/api/course/get/${id}`, {
                              headers: {
                                    'Authorization': `Bearer ${user.token}`
                              }
                        });
                        setTitle(response.data.title);
                        setDescription(response.data.description);
                  } catch (error) {
                        console.error(error);
                  }
            };

            if (user) {
                  fetchData();
            }
      }, [id, user]);

      return (
            <>
                  <div className="pt-16 h-screen ">
                        <div className="flex justify-center">
                              <div className="max-w-7xl w-full">
                                    <div className="flex mt-5 justify-between gap-7 p-4">
                                          <div className="max-w-5xl w-full">
                                                <div>
                                                      <img className='rounded-2xl w-full' src="https://fakeimg.pl/700x300" alt="" />
                                                </div>
                                                <div className='mt-4'>
                                                      <h1 className='text-3xl mb-3 font-semibold text-gray-600'>{title}</h1>
                                                      <span className='text-sm text-gray-500'>{description.length > 150 ? `${description.slice(0, 150)}...` : description}</span>
                                                </div>
                                                <div className='mt-24'>
                                                      {/* list class */}
                                                      <div className='text-center'>
                                                            <div className='grid grid-cols-1 my-6'>
                                                                  <Button className="px-5 sm:hidden block" >
                                                                        <i className="fa-regular fa-play"></i> <span className="ms-2">Learn Now</span>
                                                                  </Button>
                                                            </div>
                                                            <div className="bg-blue-200 w-36 mx-auto h-10 rounded-lg">
                                                                  <h1 className='font-medium text-blue-500 pt-2'>Material List</h1>
                                                            </div>
                                                      </div>

                                                      <button className='mt-20 w-full'>
                                                            <div className='bg-blue-200 mb-5 w-full h-16 rounded-lg px-7 py-3 flex gap-4 justify-between'>
                                                                  <div className="h-8 w-8 bg-blue-500 rounded-full text-center">
                                                                        <i className="fa-regular fa-play text-blue-200 pt-2"></i>
                                                                  </div>
                                                                  <div>
                                                                        <h1 className='text-blue-800 mt-1.5 font-medium text-sm'>Course 1 : Lorem ipsum.</h1>
                                                                  </div>
                                                                  <div className='flex gap-4'>
                                                                        <div>
                                                                              <i className="fa-regular fa-lock text-blue-900 mt-2"></i>
                                                                        </div>
                                                                        <div className='mt-1.5'>
                                                                              <span className='text-sm '>10:00</span>
                                                                        </div>
                                                                  </div>
                                                            </div>

                                                      </button>
                                                </div>
                                          </div>
                                          <div className="max-w-md w-full sm:block hidden">
                                                <Card
                                                      className="max-w-sm rounded-xl border shadow-none"
                                                      renderImage={() => (
                                                            <img
                                                                  className="rounded-t-xl"
                                                                  width={500}
                                                                  height={500}
                                                                  src="https://fakeimg.pl/600x400"
                                                                  alt="image 1"
                                                            />
                                                      )}
                                                >
                                                      <div className="flex justify-between">
                                                            <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                                            <span className="bg-gray-500 text-sm px-5 rounded-2xl pt-0.5 text-white">1 Hours</span>
                                                      </div>
                                                      <p className="font-normal text-gray-700 dark:text-gray-400">
                                                            {description.length > 150 ? `${description.slice(0, 150)}...` : description}
                                                      </p>
                                                      <div className="grid">
                                                            <Button className="px-5" >
                                                                  <i className="fa-regular fa-play"></i> <span className="ms-2">Learn Now</span>
                                                            </Button>
                                                      </div>
                                                </Card>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default DetailCourse;
