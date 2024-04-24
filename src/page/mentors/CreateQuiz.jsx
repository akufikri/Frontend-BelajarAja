import React, { useState, useEffect } from 'react';
import { Button, Card, Label, TextInput, Select, Textarea } from 'flowbite-react';
import { useAuthContext } from '../../hooks/authHooks';
import axios from 'axios';

const CreateQuiz = () => {
      const { user } = useAuthContext();
      const [lessons, setLessons] = useState([]);
      const [selectedLesson, setSelectedLesson] = useState('');
      const [answerA, setAnswerA] = useState('');
      const [answerB, setAnswerB] = useState('');
      const [answerC, setAnswerC] = useState('');
      const [correctAnswer, setCorrectAnswer] = useState(''); // State for correct answer
      const [userAnswer, setUserAnswer] = useState('');

      useEffect(() => {
            fetchLessons();
      }, []);

      const fetchLessons = async () => {
            try {
                  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}lesson/get`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  });
                  setLessons(response.data);
            } catch (error) {
                  console.error('Error fetching lessons:', error);
            }
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                  const formData = {
                        lesson_id: selectedLesson,
                        title: selectedLesson ? lessons.find(lesson => lesson._id === selectedLesson).title : '',
                        question: userAnswer,
                        correct_answer: correctAnswer,
                        sequence: parseInt(document.getElementById('sequence').value), // Assuming you have an input with id 'sequence'
                  };

                  // Make POST request to create quiz
                  const response = await axios.post('https://be-belajaraja.vercel.app/api/lesson/create', formData, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                              'Content-Type': 'application/json',
                        },
                  });

                  console.log('Quiz created:', response.data);

                  // Clear form fields after successful submission
                  setSelectedLesson('');
                  setAnswerA('');
                  setAnswerB('');
                  setAnswerC('');
                  setCorrectAnswer('');
                  setUserAnswer('');
            } catch (error) {
                  console.error('Error creating quiz:', error.message);
            }
      };

      return (
            <Card>
                  <div className='flex justify-between'>
                        {/* Form */}
                        <div className='max-w-xl w-full'>
                              <div className="mb-5">
                                    <div className="mb-2 block">
                                          <Label htmlFor="lessons" value="Select your lesson" />
                                    </div>
                                    <Select id="lessons" required onChange={(e) => setSelectedLesson(e.target.value)}>
                                          <option value="">Select a lesson</option>
                                          {lessons.map((lesson) => (
                                                <option key={lesson._id} value={lesson._id}>
                                                      {lesson.title}
                                                </option>
                                          ))}
                                    </Select>
                              </div>
                              <div className='mb-5'>
                                    <div className="mb-2 block">
                                          <Label htmlFor="sequence" value="Sequence" />
                                    </div>
                                    <TextInput id="sequence" type="number" placeholder="Enter sequence" required />
                              </div>
                              <div className="mb-5 flex flex-col items-start gap-2">
                                    <div className="mb-2 block">
                                          <Label htmlFor="answerA" value="Answer A" />
                                    </div>
                                    <div className='flex mb-3 w-full items-center gap-4'>
                                          <div>A</div>
                                          <TextInput id="answerA" className='w-full' value={answerA} onChange={(e) => setAnswerA(e.target.value)} />
                                    </div>
                                    <div className="mb-2 block">
                                          <Label htmlFor="answerB" value="Answer B" />
                                    </div>
                                    <div className='flex mb-3 w-full items-center gap-4'>
                                          <div>B</div>
                                          <TextInput id="answerB" className='w-full' value={answerB} onChange={(e) => setAnswerB(e.target.value)} />
                                    </div>
                                    <div className="mb-2 block">
                                          <Label htmlFor="answerC" value="Answer C" />
                                    </div>
                                    <div className='flex mb-3 w-full items-center gap-4'>
                                          <div>C</div>
                                          <TextInput id="answerC" className='w-full' value={answerC} onChange={(e) => setAnswerC(e.target.value)} />
                                    </div>
                              </div>
                              <div className="mb-5">
                                    <div className="mb-2 block">
                                          <Label htmlFor="correctAnswer" value="Correct Answer" />
                                    </div>
                                    <Select id="correctAnswer" required onChange={(e) => setCorrectAnswer(e.target.value)}>
                                          <option value="">Select correct answer</option>
                                          <option value="A">A</option>
                                          <option value="B">B</option>
                                          <option value="C">C</option>
                                    </Select>
                              </div>
                              <div className="mb-5">
                                    <div className="mb-2 block">
                                          <Label htmlFor="userAnswer" value="Your Answer" />
                                    </div>
                                    <Textarea id="userAnswer" className='h-56' value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
                              </div>
                              <div className='flex gap-4'>
                                    <Button color='blue' onClick={handleSubmit}>Submit</Button>
                                    <Button color='light'>Cancel</Button>
                              </div>
                        </div>
                        {/* Form */}
                        {/* Preview Display */}
                        <div className='max-w-2xl w-full'>
                              <div className="flex justify-end gap-5 mb-16">
                                    <span className='block mt-1.5'>*max 5 quizzes</span>
                                    <div>
                                          <Button color='light'>Add new quiz</Button>
                                    </div>
                              </div>
                              <div>
                                    <div className="bg-gray-200 h-96 rounded-lg"></div>
                                    <div className="flex justify-between mt-5">
                                          <div>
                                                <span>Title</span>
                                          </div>
                                          <div>
                                                <span>Sequence 1</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {/* Preview Display */}
                  </div>
            </Card>
      );
};

export default CreateQuiz;
