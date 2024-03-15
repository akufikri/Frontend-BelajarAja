import { Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuthContext } from '../../hooks/authHooks';

const Lessons = () => {
      const [lesson, setLesson] = useState([])
      const navigate = useNavigate();
      const { user } = useAuthContext();

      const fetchLesson = async () => {
            try {
                  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}lesson/get`, {
                        headers: {
                              Authorization: `Bearer ${user.token}`,
                        },
                  })
                  setLesson(response.data)
            } catch (error) {
                  console.error('Error fetching data:', error);
            }
      }

      const handleCreate = () => {
            navigate('/mentor/lesson/create')
      }

      useEffect(() => {
            fetchLesson()
      }, [])
      return (
            <>
                  <div className="mt-10">
                        <div className='mb-5 flex gap-4'>
                              <Button onClick={handleCreate} color='dark' size="sm"><i className="fa-regular fa-circle-plus me-3"></i>  <span>Create</span></Button>
                              <Button color='light' size="sm" ><i className="fa-regular fa-clipboard me-3"></i> <span>Quiz</span></Button>
                        </div>
                        <div className="overflow-x-auto">
                              <Table hoverable>
                                    <Table.Head>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>No</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Title</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Video</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Description</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>Sequence</Table.HeadCell>
                                          <Table.HeadCell className='bg-gray-900 text-white font-normal '>
                                                <span className="sr-only">Edit</span>
                                          </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                          {
                                                lesson.map((lesson, index) => (
                                                      <Table.Row key={lesson.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                            <Table.Cell>{index + 1}</Table.Cell>
                                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                  {lesson.title}
                                                            </Table.Cell>
                                                            <Table.Cell>{lesson.video_url}</Table.Cell>
                                                            <Table.Cell> {lesson.description.length > 70 ? `${lesson.description.slice(0, 70)}...` : lesson.description}</Table.Cell>
                                                            <Table.Cell>{lesson.sequence}</Table.Cell>
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
export default Lessons