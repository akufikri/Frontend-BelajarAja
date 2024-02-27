import { Card, Button, Rating, TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Course = () => {
      const [courses, setCourses] = useState([]);
      const [loading, setLoading] = useState(true);
      const [searchQuery, setSearchQuery] = useState('');

      const fetchData = async () => {
            try {
                  const response = await axios.get('https://be-belajaraja.vercel.app/api/course/get');
                  setCourses(response.data);
            } catch (error) {
                  console.error('Error fetching data:', error);
            } finally {
                  setLoading(false);
            }
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
                                    <h1 className='font-medium'>Total Course ({filteredCourses.length})</h1>
                              </div>
                              {loading ? (
                                    <div className="h-screen bg-white">
                                          <div className="flex justify-center items-center h-full">
                                                <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
                                          </div>
                                    </div>
                              ) : (
                                    <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                                          {filteredCourses.length === 0 ? (
                                                <p>No results found for the given search query.</p>
                                          ) : (
                                                filteredCourses.map((course) => (
                                                      <Card key={course.id} className="max-w-sm">
                                                            <img
                                                                  className='rounded-xl'
                                                                  width={500}
                                                                  height={500}
                                                                  src="https://fakeimg.pl/600x400"
                                                                  alt="image 1"
                                                            />
                                                            <div className="flex justify-between">
                                                                  <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                                                        {course.title}
                                                                  </h5>
                                                            </div>
                                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                                  {course.description.length > 100 ? `${course.description.slice(0, 100)}...` : course.description}
                                                            </p>
                                                            <div className="flex gap-3 justify-between">
                                                                  <Button className='px-5' color='blue'> <i className="fa-regular fa-play"></i> <span className='ms-2'>Learn</span></Button>
                                                                  <Rating>
                                                                        <Rating.Star />
                                                                        <Rating.Star />
                                                                        <Rating.Star />
                                                                        <Rating.Star />
                                                                  </Rating>
                                                            </div>
                                                      </Card>
                                                ))
                                          )}
                                    </div>
                              )}
                        </div>
                  </div>
            </>
      );
}

export default Course;
