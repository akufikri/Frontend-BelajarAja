import { Card, Button, Avatar } from 'flowbite-react';
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

                        // Hitung total durasi dari semua video lesson
                        // const totalDuration = lessonResponse.data.reduce((total, lesson) => {
                        //       return total + lesson.duration;
                        // }, 0);
                        // setTotalDuration(totalDuration);

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

      // async function getYouTubeVideoDuration(videoId) {
      //       try {
      //             // Kirim permintaan ke API YouTube Data
      //             const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      //                   params: {
      //                         id: videoId,
      //                         part: 'contentDetails',
      //                         key: 'AIzaSyBkndGcHmVRayFN034wq78m1BVF-zmJz20'
      //                   }
      //             });

      //             // Mengekstrak durasi video dari respons JSON
      //             const duration = response.data.items[0].contentDetails.duration;

      //             // Kembalikan durasi video dalam format yang sesuai
      //             return duration;
      //       } catch (error) {
      //             console.error('Error fetching YouTube video duration:', error);
      //             return null;
      //       }
      // }

      // // Contoh penggunaan fungsi
      // const videoId = 'VIDEO_ID_YOUTUBE'; // Ganti dengan ID video YouTube yang sesuai

      // getYouTubeVideoDuration(videoId)
      //       .then(duration => {
      //             console.log('Durasi video:', duration);
      //             // Tampilkan durasi video di aplikasi Anda
      //       })
      //       .catch(error => {
      //             console.error('Error:', error);
      //       });

      return (
            <>
                  <div className='sm:h-[90vh] pt-28 absolute w-full z-20'>
                        <div className="sm:flex w-full justify-center gap-8">
                              <div className='w-full max-w-3xl sm:p-0 p-3'>
                                    <div className="max-w-xl mb-5">
                                          <h1 className='text-6xl font-semibold mb-7 text-gray-800'>{title}</h1>

                                    </div>
                                    <div className="my-8  sm:p-0 p-3">

                                          <div className="flex gap-5">
                                                <Avatar rounded />
                                                <div className='mt-auto'>
                                                      <span className='font-semibold text-gray-400'>By {mentor}</span>
                                                      <span className='text-sm text-gray-600 block'>{mentorEmail}</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className=' sm:p-0 p-3'>
                                          <div className={`h-auto bg-gray-500 rounded-2xl shadow-md ${cover ? '' : 'h-56'}`}>
                                                {cover ? (
                                                      <img className='rounded-2xl w-full' src={cover} alt="" />
                                                ) : (
                                                      <img src='https://fakeimg.pl/1000x400' className='rounded-2xl' />
                                                )}
                                          </div>

                                    </div>
                                    <div className="my-12  sm:p-0 p-3">
                                          <h1 className='text-2xl font-semibold mb-2'>Tentang Kelas</h1>
                                          <span className='text-gray-500 font-normal'>{description}</span>
                                    </div>
                              </div>
                              <div className='w-full max-w-sm'>
                                    <Card className="max-w-sm border-0 shadow-xl rounded-2xl">
                                          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {formatPrice(price)}
                                          </h5>
                                          <p className="font-normal text-gray-700 dark:text-gray-400">
                                                {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                                          </p>
                                          <Button onClick={handleClickMyCourses} className='shadow' color='light'><i className="fa-regular fa-play">{" "}</i><span className="ms-2">Learn</span></Button>
                                          <div className="mt-5 flex justify-between mb-7">
                                                <ul className='space-y-3'>
                                                      <li className='font-medium'> <i className="fa-regular fa-chart-line me-2"></i> <span>Level</span> </li>
                                                      {/* <li className='font-medium'> <i className="fa-regular fa-timer me-2"></i> <span>Durasi</span> </li> */}
                                                      <li className='font-medium'> <i className="fa-regular fa-video me-2"></i> <span>Total Video</span> </li>
                                                </ul>
                                                <ul className='space-y-3 text-end'>
                                                      <li>Menengah</li>
                                                      {/* <li>{formatDuration(totalDuration)}</li> */}
                                                      <li>{totalVideos}</li> {/* Display total number of videos */}
                                                </ul>
                                          </div>
                                    </Card>
                              </div>
                        </div>
                  </div>
                  {/* attachment */}
                  <div className="absolute top-0 z-10">
                        <div className="h-56 w-56 bg-yellow-200 rounded-br-full"></div>

                  </div>
                  {/* attachment */}
            </>
      );
};

export default DetailCourse;
