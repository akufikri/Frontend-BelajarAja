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
                                          <Card key={course.id}
                                                className="max-w-sm rounded-2xl border shadow-none" // Adjusted styling for consistency
                                                renderImage={() => (
                                                      <div className='p-2'>
                                                            <img
                                                                  className='rounded-xl sm:h-56 w-full shadow-sm'
                                                                  src={course.cover} // Ganti URL placeholder sesuai kebutuhan
                                                                  alt={course.title}
                                                            />
                                                      </div>
                                                )}
                                          >
                                                <h5 className="sm:text-xl text-sm font-medium text-gray-900 dark:text-white">{course.title}</h5>
                                                <p className="font-normal text-sm text-gray-700 dark:text-gray-400">{course.description.length > 50 ? `${course.description.slice(0, 50)}...` : course.description}</p>
                                                <div className='me-auto mb-5 mt-3'>
                                                      <div className="flex gap-5">
                                                            <Avatar rounded />
                                                            <div className='mt-auto'>
                                                                  <span className='font-semibold text-gray-400'>By {course.mentor.username}</span>
                                                                  <span className='text-sm text-gray-600 block'>{course.mentor.email}</span>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="grid">
                                                      <Button onClick={() => handleDetailCourse(course._id)} className='shadow' color='light'>
                                                            <i className="fa-regular fa-play"></i>
                                                            <span className="ms-2">Learn</span>
                                                      </Button>
                                                </div>
                                          </Card>
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