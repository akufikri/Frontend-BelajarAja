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
                  <div className='mt-10'>
                        <div className='mb-5'>
                              <Button onClick={handleClickCreate} color='blue'>Create</Button>
                        </div>
                        <div className="overflow-x-auto">
                              <Table striped>
                                    <Table.Head>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>No</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Title</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Description</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Cover</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Price</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>
                                                <span className="sr-only">Edit</span>
                                          </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                          {
                                                courses.map((courses) => (
                                                      <Table.Row key={courses.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                            <Table.Cell>1</Table.Cell>
                                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                  {courses.title}
                                                            </Table.Cell>
                                                            <Table.Cell>Sliver</Table.Cell>
                                                            <Table.Cell>Laptop</Table.Cell>
                                                            <Table.Cell>$2999</Table.Cell>
                                                            <Table.Cell>
                                                                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                                        Edit
                                                                  </a>
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