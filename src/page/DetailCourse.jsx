import { Card, Button, Avatar, Badge } from 'flowbite-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/authHooks';

const formatPrice = (price) => {
      const formattedPrice = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
      }).format(price);

      return formattedPrice;
};

// const formatDuration = (totalMinutes) => {
//       const hours = Math.floor(totalMinutes / 60);
//       const minutes = totalMinutes % 60;
//       return `${hours} Jam ${minutes} Menit`;
// };

const DetailCourse = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const { user } = useAuthContext();
      const [cover, setCover] = useState();
      const [price, setPrice] = useState(0);
      const [mentor, setMentor] = useState('');
      const [mentorEmail, setMentorEmail] = useState('');
      const [totalVideos, setTotalVideos] = useState(0);
      // const [totalDuration, setTotalDuration] = useState(0); 

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await axios.get(`https://be-belajaraja.vercel.app/api/course/get/${id}`, {
                              headers: {
                                    'Authorization': `Bearer ${user.token}`
                              }
                        });
                        setTitle(response.data.title);
                        setDescription(response.data.description);
                        setCover(response.data.cover);
                        setPrice(response.data.price);
                        setMentor(response.data.mentor.username);
                        setMentorEmail(response.data.mentor.email);

                        const lessonResponse = await axios.get(`https://be-belajaraja.vercel.app/api/lesson/getbycourse/${id}`, {
                              headers: {
                                    'Authorization': `Bearer ${user.token}`
                              }
                        });



                        setTotalVideos(lessonResponse.data.length);
                  } catch (error) {
                        console.error(error);
                  }
            };

            if (user) {
                  fetchData();
            }
      }, [id, user]);

      const handleClickMyCourses = () => {
            navigate(`/kelas/${id}/kelas`);
      }


      return (
            <>
                  <div className='sm:h-[90vh] pt-28 absolute w-full z-20'>
                        <div className="sm:flex w-full justify-center gap-8">
                              <div className='w-full max-w-5xl sm:p-0 p-3'>
                                    <div className=' sm:p-0 p-3'>
                                          <div className={`h-auto bg-gray-500 rounded-2xl shadow-md ${cover ? '' : 'h-56'}`}>
                                                {cover ? (
                                                      <img className='rounded-2xl w-full' src={cover} alt="" />
                                                ) : (
                                                      <img src='https://fakeimg.pl/1200x600' className='rounded-2xl' />
                                                )}
                                          </div>
                                    </div>
                                    <div className="my-5 flex items-center justify-between">
                                          <h1 className='text-3xl font-semibold text-gray-800'>{title}</h1>
                                          {/* Kondisi untuk menampilkan harga atau "FREE CLASS" */}
                                          {price === 0 ? (
                                                <h1 className='px-10 text-2xl bg-blue-100 py-1 rounded-md font-medium'>FREE CLASS</h1>
                                          ) : (
                                                <h1 className='px-10 text-2xl bg-blue-100 py-1 rounded-md font-medium'>RP.{price}</h1>
                                          )}
                                    </div>
                                    <div className="border-t border-b flex items-center justify-between">
                                          <div className="my-8  sm:p-0 p-3">
                                                <div className="flex gap-5">
                                                      <Avatar rounded />
                                                      <div className='mt-auto'>
                                                            <span className='font-semibold text-gray-400'>By {mentor}</span>
                                                            <span className='text-sm text-gray-600 block'>{mentorEmail}</span>
                                                      </div>
                                                </div>
                                          </div>
                                          <div>
                                                <Button color='blue' onClick={handleClickMyCourses} className='flex items-center'><i className="fa-regular fa-play me-3"></i> <span>LEARN COURSE</span></Button>
                                          </div>
                                    </div>
                                    <div className="my-4 sm:p-0 p-3">
                                          <h1 className='text-2xl font-semibold mb-2'>Tentang Kelas</h1>
                                          <span className='text-gray-500 font-normal'>{description}</span>
                                    </div>
                                    <hr />
                                    <div className=''>

                                    </div>
                              </div>

                        </div>
                  </div>
            </>
      );
};

export default DetailCourse;
