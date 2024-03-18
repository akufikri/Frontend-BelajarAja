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
                                                className="max-w-sm rounded-2xl border-0 mb-2"
                                                renderImage={() => {

                                                      return (
                                                            <img
                                                                  className='rounded-t-xl h-56'
                                                                  src={course.cover} // Ganti URL placeholder sesuai kebutuhan
                                                                  alt={course.title}
                                                            />
                                                      );
                                                }}
                                          >
                                                <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                                                      {course.title}
                                                </h5>
                                                <div>
                                                      <span className='text-blue-500 text-sm'>Total pelajaran (0)</span>
                                                </div>
                                                <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                                                      {course.description.length > 70 ? `${course.description.slice(0, 70)}...` : course.description}
                                                </p>
                                                <div className="grid">
                                                      <Button onClick={() => handleDetailCourse(course._id)} className='rounded-full shadow' color='blue'><i className="fa-regular fa-play">{" "}</i><span className="ms-2">Learn</span></Button>
                                                </div>
                                                <div className='me-auto'>
                                                      <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded>
                                                            <div className="space-y-1 font-normal dark:text-white">
                                                                  <div>By {course.mentor.username}</div>
                                                            </div>
                                                      </Avatar>
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