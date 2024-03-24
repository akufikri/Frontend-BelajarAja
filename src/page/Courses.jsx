import { Card, Button, TextInput, Spinner, Avatar } from 'flowbite-react';
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
            <div className='container mx-auto flex flex-col items-center px-3 pt-20'>
                  <div className="max-w-8xl w-full">
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
                        <div className='my-3'>
                              <h1 className='font-medium'>Kelas ({filteredCourses.length})</h1>
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
                              <div className="grid sm:grid-cols-4 grid-cols-1 gap-6">
                                    {filteredCourses.length === 0 ? (
                                          <p>No results found for the given search query.</p>
                                    ) : (
                                          filteredCourses.map((course) => (
                                                <div key={course.id}>
                                                      <Card
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
                                                </div>
                                          ))
                                    )}
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default Course;
