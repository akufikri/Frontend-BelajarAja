import { Card, Button, TextInput, Spinner, Avatar, Badge } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/authHooks';

const Course = () => {
      const [courses, setCourses] = useState([]);
      const [loading, setLoading] = useState(true);
      const [searchQuery, setSearchQuery] = useState('');
      const navigate = useNavigate();
      const { user } = useAuthContext();

      const fetchData = async () => {
            try {
                  const token = localStorage.getItem('token');
                  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}course/get`, {
                        headers: {
                              Authorization: `Bearer ${token}`,
                        },
                  });
                  setCourses(response.data);
            } catch (error) {
                  console.error('Error fetching data:', error);
            } finally {
                  setLoading(false);
            }
      };

      const handleDetailCourse = (id) => {
            if (!user) {
                  return navigate('/login')
            }
            navigate(`/kelas/${id}`);
      };

      useEffect(() => {
            fetchData();
      }, []);

      const filteredCourses = courses.filter((course) => {
            const titleMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
            const descriptionMatch = course.description.toLowerCase().includes(searchQuery.toLowerCase());
            return titleMatch || descriptionMatch;
      });

      return (
            <div className='container mx-auto flex flex-col items-center px-3 pt-20 h-[80vh]'>
                  <div className="max-w-6xl w-full">
                        <div className='my-5'>
                              <TextInput
                                    id="email4"
                                    type="email"
                                    icon={HiSearch}
                                    placeholder="Search for courses..."
                                    required
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                              />
                        </div>

                        {loading ? (
                              <div className="h-96 ">
                                    <div className="flex justify-center items-center h-96">
                                          <div className="flex gap-4">
                                                <Spinner aria-label="Default status example" className='text-2xl' />Loading content
                                          </div>
                                    </div>
                              </div>
                        ) : (
                              <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
                                    {filteredCourses.length === 0 ? (
                                          <div className='absolute right-0 left-0 top-96'>
                                                <h1 className='text-3xl text-center font-semibold'>No results found..</h1>
                                          </div>
                                    ) : (filteredCourses.map((course) => (
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
                                          </div>))
                                    )}
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default Course;
