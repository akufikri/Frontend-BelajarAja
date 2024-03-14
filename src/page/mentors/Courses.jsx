import { Table, Button } from 'flowbite-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/authHooks';

const Courses = () => {
      const [courses, setCourses] = useState([]);
      const navigate = useNavigate();
      const { user } = useAuthContext();
      const fetchData = async () => {
            try {
                  const response = await axios.get(`https://be-belajaraja.vercel.app/api/course/get`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  });
                  setCourses(response.data);
            } catch (error) {
                  console.error('Error fetching data:', error);
            }
      };

      const handleClickCreate = () => {
            navigate('/mentor/course/create');
      };

      useEffect(() => {
            fetchData();
      }, []);

      return (
            <>
                  <div className='mt-10'>
                        <div className='mb-5 flex gap-4'>
                              <Button onClick={handleClickCreate} color='dark' size="sm"><i className="fa-regular fa-circle-plus me-3"></i>  <span>Create</span></Button>
                              <Button onClick={handleClickCreate} color='light' size="sm"><i className="fa-regular fa-video me-3"></i> <span>Leason</span></Button>
                        </div>
                        <div className="overflow-x-auto">
                              <Table striped>
                                    <Table.Head>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>No</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Title</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Cover</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Description</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Price</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>
                                                <span className="sr-only">Edit</span>
                                          </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                          {courses.map((course, index) => (
                                                <Table.Row key={course.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                      <Table.Cell>{index + 1}</Table.Cell>
                                                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                            {course.title}
                                                      </Table.Cell>
                                                      <Table.Cell>
                                                            <img src={course.cover} alt="" className='h-20 rounded-lg' />
                                                      </Table.Cell>
                                                      <Table.Cell>{course.description}</Table.Cell>
                                                      <Table.Cell>{course.price}</Table.Cell>
                                                      <Table.Cell>
                                                            <div className="flex gap-4">
                                                                  <button>
                                                                        <i className="fa-regular fa-trash"></i>
                                                                  </button>
                                                                  <button>
                                                                        <i className="fa-regular fa-pen-to-square"></i>
                                                                  </button>
                                                            </div>
                                                      </Table.Cell>
                                                </Table.Row>
                                          ))}
                                    </Table.Body>
                              </Table>
                        </div>
                  </div>
            </>
      )
};

export default Courses;
