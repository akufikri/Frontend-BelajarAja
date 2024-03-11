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
                  const response = await axios.get('https://be-belajaraja.vercel.app/api/course/get', {
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
            <>
                  <div className='container mx-auto flex flex-col items-center px-3 pt-20'>
                        <div className="max-w-6xl w-full ">
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
                                    <div className="grid sm:grid-cols-3 grid-cols-2 gap-6">
                                          {filteredCourses.length === 0 ? (
                                                <p>No results found for the given search query.</p>
                                          ) : (
                                                filteredCourses.map((course) => (
                                                      <div key={course.id}>

                                                            <Card
                                                                  className="max-w-sm rounded-2xl border-0 mb-2"
                                                                  renderImage={() => {
                                                                        const imageUrl = `https://be-belajaraja.vercel.app/uploads/${course.cover}`;
                                                                        const hasImage = Boolean(course.cover);

                                                                        return (
                                                                              <img
                                                                                    className={`rounded-t-xl ${hasImage ? 'h-auto' : 'h-56'}`}
                                                                                    src={hasImage ? imageUrl : 'https://fakeimg.pl/600x400'} // Ganti URL placeholder sesuai kebutuhan
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
                                                      </div>


                                                ))
                                          )}
                                    </div>
                              )}
                        </div>
                  </div >
            </>
      );
}

export default Course;