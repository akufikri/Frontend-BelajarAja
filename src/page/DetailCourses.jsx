import { Button, Progress } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/authHooks';
import ReactPlayer from 'react-player/youtube';

const DetailCourses = () => {
      const { id } = useParams();
      const [lesson, setLesson] = useState([]);
      const { user, logout } = useAuthContext(); // Dapatkan fungsi logout dari useAuthContext
      const [lessonItem, setLessonItem] = useState(null); // State untuk menyimpan data lesson yang sedang diputar
      const [progress, setProgress] = useState(0); // State untuk menyimpan nilai progress
      const [isPlaying, setIsPlaying] = useState(false); // State untuk melacak status pemutaran video
      const navigate = useNavigate();

      const fetchDataLesson = async () => {
            try {
                  const response = await axios.get(`https://be-belajaraja.vercel.app/api/lesson/getbycourse/${id}`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  });
                  setLesson(response.data);
                  // Menyimpan data lesson pertama ke dalam state lessonItem
                  if (response.data.length > 0) {
                        setLessonItem(response.data[0]);
                  }
            } catch (error) {
                  console.error(error);
            }
      };

      const changeVideo = (lesson) => {
            setLessonItem(lesson);
            // Atur nilai progress ke 0 saat mengganti video
            setProgress(0);
      };

      const redirectBack = () => {
            navigate(`/kelas/${id}`)
      }

      const handleProgress = (state) => {
            // Update nilai progress saat ada perubahan progress video
            if (isPlaying) {
                  setProgress(state.played);
                  // Simpan nilai progress dalam bentuk persen ke penyimpanan lokal
                  localStorage.setItem(`progress_${id}`, `${state.played * 100}%`);
            }
      };

      useEffect(() => {
            if (user) {
                  fetchDataLesson();
            }
            // Cek apakah ada nilai progress yang tersimpan saat komponen dimuat
            const savedProgress = localStorage.getItem(`progress_${id}`);
            if (savedProgress) {
                  // Konversi nilai progress dari persen ke desimal untuk digunakan dalam ReactPlayer
                  setProgress(parseFloat(savedProgress) / 100);
            }
      }, [id, user]);

      useEffect(() => {
            return () => {
                  // Bersihkan nilai progres dari penyimpanan lokal saat komponen unmount
                  localStorage.removeItem(`progress_${id}`);
            };
      }, [id]); // Efek akan dipanggil saat id berubah

      useEffect(() => {
            if (!user) {
                  // Bersihkan nilai progres dari penyimpanan lokal saat pengguna logout
                  localStorage.removeItem(`progress_${id}`);
            }
      }, [user, id]); // Efek akan dipanggil saat user berubah atau saat id berubah

      return (
            <>
                  <div className="h-[90vh] pt-20">
                        <div className="fixed ms-20">
                              <button onClick={redirectBack} className='w-10 h-10 bg-gray-800 text-white rounded-full'><i className="fa-regular fa-arrow-left"></i></button>
                        </div>
                        <div className="sm:flex gap-5 justify-center sm:p-0 p-2">
                              <div className='w-full max-w-2xl'>
                                    <div className="h-80 w-full max-w-2xl bg-gray-600 rounded-lg">
                                          {lessonItem && (
                                                <ReactPlayer
                                                      url={lessonItem.video_url}
                                                      width='100%'
                                                      height='100%'
                                                      style={{ borderRadius: '0.25rem' }}
                                                      playing={isPlaying}
                                                      onPlay={() => setIsPlaying(true)}
                                                      onPause={() => setIsPlaying(false)}
                                                      onProgress={handleProgress}
                                                />
                                          )}
                                    </div>

                                    <div>
                                          {lessonItem && (
                                                <div>
                                                      <h1 className='text-2xl mt-4 font-medium'>{lessonItem.title}.</h1>
                                                      <Progress
                                                            progress={Math.round(progress * 100)}
                                                            progressLabelPosition="inside"
                                                            textLabelPosition="outside"
                                                            size="2xl"
                                                            labelProgress
                                                            color='dark'
                                                      />
                                                      <p className='mt-2 text-sm text-gray-800'>{lessonItem.description}</p>
                                                </div>
                                          )}


                                    </div>

                              </div>
                              <div className="sm:max-w-md w-full sm:mt-0 mt-5">
                                    <div className="border p-4 rounded-lg ">
                                          <div className="grid">
                                                {
                                                      lesson.map((lesson) => (
                                                            <Button
                                                                  key={lesson.id}
                                                                  color='light'
                                                                  className='w-full mb-5'
                                                                  onClick={() => changeVideo(lesson)} // Menetapkan fungsi changeVideo sebagai handler klik
                                                            >
                                                                  <div className="flex w-full gap-4">
                                                                        <div className=''>
                                                                              <i className="fa-regular fa-play"></i>
                                                                        </div>
                                                                        <span>{lesson.title} | {lesson.sequence}</span>
                                                                  </div>
                                                            </Button>
                                                      ))
                                                }
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default DetailCourses;
