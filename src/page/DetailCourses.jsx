import { Button, Tooltip } from "flowbite-react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/authHooks';
import ReactPlayer from 'react-player/youtube';

const DetailCourses = () => {
      const { id } = useParams();
      const [lesson, setLesson] = useState([]);
      const { user } = useAuthContext();
      const [lessonItem, setLessonItem] = useState(null);
      const [isPlaying, setIsPlaying] = useState(false);
      const navigate = useNavigate();

      const fetchDataLesson = async () => {
            try {
                  const response = await axios.get(`https://be-belajaraja.vercel.app/api/lesson/getbycourse/${id}`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  });
                  setLesson(response.data);
                  if (response.data.length > 0) {
                        setLessonItem(response.data[0]);
                  }
            } catch (error) {
                  console.error(error);
            }
      };

      const changeVideo = (lesson) => {
            setLessonItem(lesson);
      };

      const handleBack = () => {
            navigate(`/kelas/${id}`);
      }


      useEffect(() => {
            if (user) {
                  fetchDataLesson();
            }
      }, [id, user]);

      return (
            <>
                  <div className="h-[90vh]">

                        <div className="sm:flex gap-5 justify-center sm:p-0  flex-row-reverse">
                              <div className='w-full p-3'>
                                    <div className="h-[60vh] w-full bg-gray-600 rounded-lg overflow-hidden">
                                          {lessonItem && (
                                                <ReactPlayer
                                                      url={lessonItem.video_url}
                                                      width='100%'
                                                      height='100%'
                                                      style={{ borderRadius: '0.25rem' }}
                                                      playing={isPlaying}
                                                      onPlay={() => setIsPlaying(true)}
                                                      onPause={() => setIsPlaying(false)}
                                                      controls={true}
                                                      className="rounded-lg"
                                                      config={{
                                                            youtube: {
                                                                  playerVars: { showinfo: 1 }
                                                            },

                                                      }}
                                                />
                                          )}
                                    </div>
                                    <div>
                                          {lessonItem && (
                                                <div>
                                                      <h1 className='text-3xl mt-4 font-medium'>{lessonItem.title}.</h1>
                                                      <p className='mt-2 text-sm text-gray-800 max-w-5xl'>{lessonItem.description}</p>
                                                </div>
                                          )}
                                    </div>
                              </div>
                              <div className="sm:max-w-md w-full sm:mt-0 mt-5 h-screen border-r   shadow">
                                    <div className='h-16 px-3 py-2 bg-blue-500 shadow'>
                                          <Tooltip content="Back" placement="bottom" className="z-20">
                                                <Button color='' onClick={handleBack} >
                                                      <i className="fa-regular fa-angles-left text-2xl text-white"></i>
                                                </Button>
                                          </Tooltip>

                                    </div>

                                    <div className='p-3 overflow-y-auto h-[93vh]'>
                                          {lesson.map((lesson) => (
                                                <Button
                                                      key={lesson.id}
                                                      color='light'
                                                      className='w-full mb-2 shadow'
                                                      onClick={() => changeVideo(lesson)}
                                                >
                                                      <div className="flex w-full gap-4 items-center ">
                                                            <div className=''>
                                                                  {lesson.sequence}
                                                            </div>
                                                            <span className='text-start'>{lesson.title}</span>
                                                      </div>
                                                </Button>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default DetailCourses;
