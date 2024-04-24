import { Card } from "flowbite-react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useAuthContext } from "../../hooks/authHooks";

const Statistic = () => {
      const [totalVideo, setTotalVideo] = useState(0);
      const [totalQuiz, setTotalQuiz] = useState(0);
      const [totalCourse, setTotalCourse] = useState(0);
      const [totalSubmitter, setTotalSubmitter] = useState(0);
      const { user } = useAuthContext();

      useEffect(() => {
            const fetchCourseData = async () => {
                  try {
                        const response = await axios.get('https://be-belajaraja.vercel.app/api/course/mycourse', {
                              headers: {
                                    'Authorization': `Bearer ${user.token}`,
                              },
                        });
                        setTotalCourse(response.data.length);
                  } catch (error) {
                        console.error(error);
                  }
            };

            const fetchLessonData = async () => {
                  try {
                        const response = await axios.get('https://be-belajaraja.vercel.app/api/lesson/getbycourse/65ff79b49023bf644a0c6d2f', {
                              headers: {
                                    'Authorization': `Bearer ${user.token}`,
                              },
                        });
                        setTotalVideo(response.data.length);
                  } catch (error) {
                        console.error(error);
                  }
            };

            // Fetch data when component mounts
            fetchCourseData();
            fetchLessonData();
      }, [user]);

      return (
            <>
                  {/* card */}
                  <div className="grid sm:grid-cols-3 gap-3">
                        <Card className="h-36 shadow-md border-0">
                              <div className="flex gap-5">
                                    <div className="bg-teal-200 w-20 h-20 rounded-full flex items-center justify-center">
                                          <i className="fa-regular fa-video text-4xl text-gray-400"></i>
                                    </div>
                                    <div>
                                          <h1 className="text-2xl font-semibold text-gray-600">Total Video</h1>
                                          <span className="font-medium">{totalVideo} video</span>
                                    </div>
                              </div>
                        </Card>

                        {/* Add other cards for Total Quiz, Total Qourse, Total Submitter */}

                  </div>
                  {/* card */}
                  {/* Chart container */}
                  <div className="mt-5 p-5 rounded-lg shadow-md bg-white">
                        <div className="w-full h-96">
                              <Line
                                    data={{
                                          labels: ["Video", "Quiz", "Qourse", "Submitter"],
                                          datasets: [
                                                {
                                                      label: "Total Data",
                                                      data: [totalVideo, totalQuiz, totalCourse, totalSubmitter],
                                                      backgroundColor: [
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 99, 132, 0.2)',
                                                      ],
                                                      borderColor: [
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 99, 132, 1)',
                                                      ],
                                                      borderWidth: 1,
                                                },
                                          ],
                                    }}
                                    options={{
                                          maintainAspectRatio: false,
                                          plugins: {
                                                legend: {
                                                      display: true,
                                                      position: 'bottom',
                                                },
                                          },
                                    }}
                              />
                        </div>
                  </div>
                  {/* Chart container */}
            </>
      );
};

export default Statistic;
