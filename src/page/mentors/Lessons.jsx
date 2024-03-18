import { Button, Accordion } from 'flowbite-react'; // Sesuaikan impor ini dengan package Accordion yang Anda gunakan
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../hooks/authHooks';
import ReactPlayer from 'react-player/youtube';
import { useNavigate } from 'react-router-dom';

const Lesson = () => {
      const { id } = useParams();
      const [cover, setCover] = useState('');
      const { user } = useAuthContext();
      const [lesson, setLesson] = useState([]);
      const [lessonToDelete, setLessonToDelete] = useState(null);
      const navigate = useNavigate();

      const fetchDataCourse = async () => {
            try {
                  const response = await axios.get(`https://be-belajaraja.vercel.app/api/course/get/${id}`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`
                        }
                  });
                  setCover(response.data.cover);
            } catch (error) {
                  console.error(error);
            }
      };

      const fetchDataLesson = async () => {
            try {
                  const response = await axios.get(`https://be-belajaraja.vercel.app/api/lesson/getbycourse/${id}`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  });
                  setLesson(response.data);
            } catch (error) {
                  console.error(error);
            }
      };

      useEffect(() => {
            if (user) {
                  fetchDataCourse();
                  fetchDataLesson();
            }
      }, [id, user]);

      const handleDeleteLesson = async (lessonId) => {
            try {
                  // Pastikan lessonId tidak undefined sebelum melakukan penghapusan
                  if (!lessonId) {
                        console.error('ID pelajaran tidak valid.');
                        return;
                  }

                  const response = await axios.delete(`https://be-belajaraja.vercel.app/api/lesson/delete/${lessonId}`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  });

                  if (response.status === 200) {
                        fetchDataLesson();
                  } else {
                        console.error('Error deleting lesson:', response.data.error);
                  }
            } catch (error) {
                  console.error('Error deleting lesson:', error.message);
            } finally {
                  setLessonToDelete(null);
            }
      };

      const handleRedirectCreate = () => {
            navigate(`/mentor/lesson/create/${id}`);
      };

      return (
            <>
                  <div className="block max-w-5xl mx-auto">
                        <div className="bg-gray-400 h-56 rounded-lg  ">
                              <img src={cover} alt="" className='object-cover h-full w-full rounded-lg' />
                        </div>
                        <div className='my-7'>
                              <Button color='light' onClick={handleRedirectCreate}>CREATE</Button>
                        </div>

                        <div>
                              {/* Tambahkan kondisi untuk menampilkan pesan jika tidak ada pelajaran */}
                              {lesson.length === 0 && <h1>Tidak ada video yang tersedia!</h1>}
                        </div>

                        <div>
                              <Accordion collapseAll>
                                    {lesson.map((lessonItem) => (
                                          <Accordion.Panel key={lessonItem.id}>
                                                <Accordion.Title><i className="fa-light fa-video me-3"></i> {lessonItem.title} </Accordion.Title>
                                                <Accordion.Content>
                                                      <div className="flex justify-between">
                                                            <h1>Preview</h1>
                                                            <div className="flex gap-2">
                                                                  <Button color='light'>
                                                                        <i className='fa-regular fa-pencil me-2'></i>
                                                                        EDIT
                                                                  </Button>
                                                                  <button onClick={() => setLessonToDelete(lessonItem.id)}>
                                                                        <i className='fa-regular fa-trash me-2'></i>
                                                                        DELETE
                                                                  </button>
                                                            </div>
                                                      </div>
                                                      <div className="my-7">
                                                            <div className="bg-gray-500 h-auto">
                                                                  <ReactPlayer url={lessonItem.video_url} width={988} />
                                                            </div>
                                                            <div className='my-5'>
                                                                  <h1 className='font-semibold uppercase'>{lessonItem.title}</h1>
                                                                  <p className='text-sm'>{lessonItem.description}</p>
                                                            </div>
                                                      </div>
                                                </Accordion.Content>
                                          </Accordion.Panel>
                                    ))}
                              </Accordion>
                        </div>
                  </div>
            </>
      );
};

export default Lesson;
