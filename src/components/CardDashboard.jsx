import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/authHooks";
import { redirect } from "react-router-dom";

const CardDashboard = () => {
      const { user } = useAuthContext();

      const [courses, setCourses] = useState([]);
      const [lessons, setLessons] = useState([]);

      useEffect(() => {
            if (!user) {
                  redirect('/')
            } else {
                  fetchData();
            }
      }, [user, history]);

      const fetchData = async () => {
            try {
                  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}course/mycourse`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  });
                  setCourses(response.data);
                  // Ambil data pelajaran untuk setiap kursus
                  const lessonsPromises = response.data.map(async (course) => {
                        try {
                              const lessonResponse = await axios.get(`https://be-belajaraja.vercel.app/api/lesson/getbycourse/${course._id}`, {
                                    headers: {
                                          'Authorization': `Bearer ${user.token}`,
                                    },
                              });
                              return { courseId: course.id, lessonCount: lessonResponse.data.length };
                        } catch (error) {
                              console.error('Error fetching lessons:', error);
                              return { courseId: course.id, lessonCount: 0 };
                        }
                  });
                  const lessonsData = await Promise.all(lessonsPromises);
                  setLessons(lessonsData);
            } catch (error) {
                  console.error('Error fetching data:', error);
            }
      };

      const totalCourses = courses.length;
      const totalLessons = lessons.reduce((total, lesson) => total + lesson.lessonCount, 0);

      return (
            <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-500 shadow-lg rounded-xl p-8 flex items-center space-x-7">
                        <div>
                              <i className="fa-light fa-book text-6xl text-white"></i>
                        </div>
                        <div className="pt-1">
                              <h1 className="text-4xl text-white font-bold">{totalCourses}</h1>
                              <span className="text-lg text-white">Courses</span>
                        </div>
                  </div>
                  <div className="bg-blue-500 shadow-lg rounded-xl p-8 flex items-center space-x-7">
                        <div>
                              <i className="fa-light fa-video text-6xl text-white"></i>
                        </div>
                        <div className="pt-1">
                              <h1 className="text-4xl text-white font-bold">{totalLessons}</h1>
                              <span className="text-lg text-white">Lessons</span>
                        </div>
                  </div>
            </div>
      );
};

export default CardDashboard;
