import { Button, Accordion, Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/authHooks';
import ReactPlayer from 'react-player/youtube';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// Fungsi untuk mengonversi durasi video menjadi format yang lebih mudah dibaca
const formatDuration = (durationInSeconds) => {
      const hours = Math.floor(durationInSeconds / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);
      const seconds = durationInSeconds % 60;

      if (hours > 0) {
            return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      } else if (minutes > 0) {
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      } else {
            return `${seconds} detik`;
      }
};

const Lesson = () => {
      const { id } = useParams();
      const [cover, setCover] = useState('');
      const { user } = useAuthContext();
      const [lesson, setLesson] = useState([]);
      const navigate = useNavigate();
      const [playerWidth, setPlayerWidth] = useState(988);
      const [videoDurations, setVideoDurations] = useState({}); // State untuk menyimpan durasi video

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

      const handleResize = () => {
            const screenWidth = window.innerWidth;
            const newWidth = Math.min(988, Math.floor(screenWidth * 0.9));
            setPlayerWidth(newWidth);
      };
      const redirectEditLesson = (lessonId) => {
            navigate(`/mentor/lesson/edit/${lessonId}`);
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
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => {
                  window.removeEventListener('resize', handleResize);
            };
      }, [id, user]);

      const handleDelete = async (lessonId) => {
            try {
                  await axios.delete(`https://be-belajaraja.vercel.app/api/lesson/delete/${lessonId}`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  });
                  fetchDataCourse();
                  fetchDataLesson();

                  setTimeout(() => {
                        window.location.href = `/mentor/lesson/${id}`
                  }, 6000);
                  toast.success('Lesson berhasil dihapus!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                  });


            } catch (error) {
                  console.error(error);
                  toast.error('Terjadi kesalahan saat mengirimkan permintaan.', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                  });
            }
      };



      const handleRedirectCreate = () => {
            navigate(`/mentor/lesson/create/${id}`);
      };

      const handleDuration = (duration, index) => {
            const formattedDuration = formatDuration(duration);
            setVideoDurations(prevState => ({ ...prevState, [index]: formattedDuration })); // Mengupdate state dengan durasi yang diformat
      };

      return (
            <>
                  <Card className='border-l-8 border-l-blue-500 border-t-0 border-b-0 border-r-0'>
                        <div className="block max-w-5xl mx-auto w-full">
                              <div className="bg-gray-400 h-56 rounded-lg  ">
                                    <img src={cover} alt={cover} className='object-cover h-full w-full rounded-lg' />
                              </div>
                              <div className='my-7'>
                                    <Button color='light' onClick={handleRedirectCreate}>CREATE</Button>
                              </div>
                              <div>
                                    {lesson.length === 0 && <h1 className='text-center'>Tidak ada video yang tersedia!</h1>}
                              </div>

                              <div>
                                    <Accordion collapseAll>
                                          {lesson.map((lessonItem, index) => (
                                                <Accordion.Panel key={lessonItem.id}>
                                                      <Accordion.Title><i className="fa-light fa-video me-3"></i> {lessonItem.title} | {lessonItem.sequence} </Accordion.Title>
                                                      <Accordion.Content>
                                                            <div className="flex justify-between">
                                                                  <div className="block">
                                                                        <h1>Preview</h1>
                                                                        <span>Durasi: {videoDurations[index]}</span> {/* Menampilkan durasi video */}
                                                                  </div>
                                                                  <div className="flex gap-2">
                                                                        <Button onClick={() => redirectEditLesson(lessonItem._id)} color='light'>
                                                                              <i className='fa-regular fa-pencil me-2'></i>
                                                                              EDIT
                                                                        </Button>

                                                                        <Button color='dark' onClick={() => handleDelete(lessonItem._id)}>
                                                                              <i className='fa-regular fa-trash me-2'></i>
                                                                              DELETE
                                                                        </Button>
                                                                  </div>
                                                            </div>
                                                            <div className="my-7">
                                                                  <div className="bg-gray-500 h-auto overflow-auto">
                                                                        <ReactPlayer
                                                                              url={lessonItem.video_url}
                                                                              width={playerWidth}
                                                                              alt='Thumbnail'
                                                                              style={{ borderRadius: '0.25rem' }}
                                                                              onDuration={(duration) => handleDuration(duration, index)} // Menangani perubahan durasi video
                                                                        />
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
                  </Card>
                  <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition:Bounce />
            </>
      );
};

export default Lesson;
