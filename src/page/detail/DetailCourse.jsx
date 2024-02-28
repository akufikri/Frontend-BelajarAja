import { Card, Button } from 'flowbite-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/authHooks';

const DetailCourse = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const { user } = useAuthContext();
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
                  } catch (error) {
                        console.error(error);
                  }
            };

            if (user) {
                  fetchData();
            }
      }, [id, user]);

      return (
            <>
                  <div className="pt-16 h-screen">
                        <div className="bg-gray-800 w-full h-80 p-5 flex justify-center">
                              <div className="max-w-5xl w-full pt-10">
                                    <h1 className="text-4xl text-gray-200 font-medium">{title}</h1>
                                    <span className="text-gray-400 mt-2 block overflow-wrap break-word">
                                          {description}
                                    </span>
                              </div>
                        </div>
                        <div className="absolute top-28 right-0 px-24">
                              <Card
                                    className="max-w-sm p-4"
                                    renderImage={() => (
                                          <img
                                                className="rounded-xl"
                                                width={500}
                                                height={500}
                                                src="https://fakeimg.pl/600x400"
                                                alt="image 1"
                                          />
                                    )}
                              >
                                    <div className="flex justify-between">
                                          <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                          <span className="bg-gray-500 text-sm px-5 rounded-2xl pt-0.5 text-white">1 Hours</span>
                                    </div>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.....
                                    </p>
                                    <div className="grid">
                                          <Button className="px-5" color="blue">
                                                <i className="fa-regular fa-play"></i> <span className="ms-2">Belajar Sekarang</span>
                                          </Button>
                                    </div>
                              </Card>
                        </div>
                  </div>
            </>
      );
};

export default DetailCourse;
