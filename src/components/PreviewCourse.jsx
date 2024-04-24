import { Card, Button, Avatar } from 'flowbite-react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/authHooks';
import { useNavigate } from 'react-router-dom'

const PreviewCourse = () => {
      const [course, setCourse] = useState([]);
      const navigate = useNavigate();
      const { user } = useAuthContext();
      const handleButton = () => {
            window.location.href = '/kelas'
      }
      const handleDetailCourse = (id) => {

            if (!user) {
                  return navigate('/login')
            }
            navigate(`/kelas/${id}`);
      };
      const fetchData = async () => {
            try {
                  const response = await axios.get('https://be-belajaraja.vercel.app/api/course/get');
                  setCourse(response.data)
            } catch (error) {
                  console.error('Error fetching data:', error);
            }
      }
      useEffect(() => {
            fetchData();
      }, [])
      return (
            <>
                  {/* kursus gratis */}
                  <div className='max-w-7xl mx-auto sm:p-0 p-4'>
                        <div className='my-9 mt-96 sm:mt-0'>
                              <h1 className='font-semibold text-2xl text-gray-700 text-center'>Mungkin anda tertarik</h1>

                        </div>
                        <div className="grid sm:grid-cols-4 grid-cols-1 gap-3">
                              {
                                    course.map((course) => (
                                          <div key={course.id}>
                                                <Card
                                                      className="w-full rounded-2xl border-0 shadow-md" // Adjusted styling for consistency
                                                      renderImage={() => (
                                                            <figure className='relative'>
                                                                  {/* <Badge >Free</Badge> */}
                                                                  <img
                                                                        className='rounded-md sm:h-full w-full shadow-sm'
                                                                        src={course.cover} // Ganti URL placeholder sesuai kebutuhan
                                                                        alt={course.title}
                                                                  />
                                                                  {course.price === 0 && (
                                                                        <div className="absolute top-0 right-0 left-0 justify-end flex p-2">
                                                                              <span className='bg-blue-200 px-8 rounded-md text-blue-500'>GRATIS!</span>
                                                                        </div>
                                                                  )}
                                                            </figure>
                                                      )}
                                                >
                                                      <a onClick={() => handleDetailCourse(course._id)} className="sm:text-lg text-sm font-medium text-gray-900 dark:text-white hover:underline cursor-pointer">{course.title}</a>
                                                      <p className="font-normal text-xs text-gray-700 dark:text-gray-400">{course.description.length > 100 ? `${course.description.slice(0, 100)}...` : course.description}</p>
                                                      <div className='me-auto mt-3'>
                                                            <div className="flex gap-5">
                                                                  <Avatar rounded />
                                                                  <div className='mt-auto'>
                                                                        <span className='font-semibold text-gray-400'>By {course.mentor.username}</span>
                                                                        <span className='text-sm text-gray-600 block'>{course.mentor.email}</span>
                                                                  </div>
                                                            </div>
                                                      </div>

                                                </Card>
                                          </div>
                                    ))
                              }


                        </div>
                        <div className="my-5">
                              <Button onClick={handleButton} className='mx-auto rounded-lg' color='light'>Lebih banyak</Button>
                        </div>
                  </div>
            </>
      )
}
export default PreviewCourse