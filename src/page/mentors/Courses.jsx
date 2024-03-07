import { Table, Button } from 'flowbite-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Courses = () => {
      const [courses, setCourses] = useState([]);
      const navigate = useNavigate();

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
            }
      };

      const handleDelete = async (id) => {
            try {
                  const token = localStorage.getItem('token');
                  console.log('Token:', token);
                  const url = `https://be-belajaraja.vercel.app/api/course/delete/${id}`;
                  const response = await axios.delete(url, {
                        headers: {
                              Authorization: `Bearer ${token}`,
                        },
                  });
                  console.log('Data deleted successfully:', response.data);
                  // Refresh data setelah penghapusan
                  fetchData();
            } catch (error) {
                  console.error('Error delete data:', error);
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
                  <div className='mt-20'>
                        <div className='mb-5'>
                              <Button onClick={handleClickCreate} color='blue'>Create</Button>
                        </div>
                        <div className="overflow-x-auto">
                              <Table striped>
                                    <Table.Head >
                                          <Table.HeadCell className='bg-gray-800 text-white'>Title</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-800 text-white'>Description</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-800 text-white'>Content</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-800 text-white'>Price</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-800 text-white'>
                                                <span className="sr-only">Edit</span>
                                                <span className="sr-only">Delete</span>
                                          </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                          {
                                                courses.map((courses) => (
                                                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={courses.id}>
                                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                  {courses.title}
                                                            </Table.Cell>
                                                            <Table.Cell>{courses.description}</Table.Cell>
                                                            <Table.Cell>{courses.content}</Table.Cell>
                                                            <Table.Cell>{courses.price}</Table.Cell>
                                                            <Table.Cell className='flex'>
                                                                  <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                                        Edit
                                                                  </button>
                                                                  <button
                                                                        type='button'
                                                                        onClick={() => handleDelete(courses.id)}
                                                                        className="font-medium ms-5 text-cyan-600 hover:underline dark:text-cyan-500"
                                                                  >
                                                                        Delete
                                                                  </button>
                                                            </Table.Cell>
                                                      </Table.Row>
                                                ))
                                          }

                                    </Table.Body>
                              </Table>
                        </div>
                  </div>
            </>
      )
}
export default Courses