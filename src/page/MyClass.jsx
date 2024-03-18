import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../hooks/authHooks';

const MyClass = () => {
      const [lesson, setLesson] = useState([])
      const [currentVideoUrl, setCurrentVideoUrl] = useState('');
      const { id } = useParams();
      const { user } = useAuthContext();

      const fetchLesson = async () => {
            try {
                  const response = await axios.get(`https://be-belajaraja.vercel.app/api/lesson/getbycourse/${id}`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  })
                  setLesson(response.data)
            } catch (error) {
                  console.log(error)
            }
      }

      useEffect(() => {
            fetchLesson()
      }, [])

      const handleLessonClick = (videoUrl) => {
            setCurrentVideoUrl(videoUrl);
      }

      return (
            <>
                  <div className="sm:flex justify-center pt-20 gap-5 p-4 h-screen">
                        <div className="w-full max-w-3xl">
                              <div className="h-auto w-full  rounded-lg">
                                    <ReactPlayer url={currentVideoUrl} width={700} />
                              </div>

                        </div>
                        <div className="w-full max-w-xl">
                              <div className="h-auto border rounded-lg w-full p-4">
                                    <div className="grid grid-cols-1">
                                          {
                                                lesson.map((lesson) => (
                                                      <button key={lesson.id} className="h-auto border rounded-xl mb-4 p-4 w-full hover:shadow" onClick={() => handleLessonClick(lesson.video_url)}>
                                                            <div className="flex sm:space-x-5">
                                                                  <div className='mt-1.5'>
                                                                        <i className="fa-light fa-video"></i>
                                                                  </div>
                                                                  <div className='space-y-1'>
                                                                        <span className='text-sm'>{lesson.title}</span>
                                                                        <span className='block text-start text-sm font-medium text-gray-400'>04.00</span>
                                                                  </div>
                                                            </div>
                                                      </button>
                                                ))
                                          }
                                    </div>
                              </div>
                        </div>
                  </div >
            </>
      )
}
export default MyClass;
