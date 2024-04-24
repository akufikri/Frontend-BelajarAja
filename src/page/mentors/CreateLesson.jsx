import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/authHooks';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const CreateLesson = () => {

      const { id } = useParams()
      const { user } = useAuthContext();
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [videoUrl, setVideoUrl] = useState('');
      const [sequence, setSequence] = useState(0);
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const lessonData = {
                        course_id: id,
                        title: title,
                        description: description,
                        video_url: videoUrl,
                        sequence: sequence,
                  };

                  const res = await axios.post(
                        `${import.meta.env.VITE_API_BASE_URL}lesson/create`,
                        lessonData,
                        {
                              headers: {
                                    Authorization: `Bearer ${user.token}`,
                                    'Content-Type': 'application/json', // Set content type to JSON
                              },
                        }
                  );

                  if (res.status === 201) {
                        setTimeout(() => {
                              navigate(`/mentor/lesson/${id}`);
                        }, 3000);
                        toast.success('Successfully creating new lesson!, please wait...', {
                              position: "bottom-right",
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                        });
                  } else {
                        console.error('Error creating course:', res.data.error);
                  }
            } catch (error) {
                  console.error('Error creating lesson:', error);
            }
      };

      return (
            <>
                  <Card className='border-l-8 border-l-blue-500 border-t-0 border-b-0 border-r-0 max-w-3xl '>
                        <div className="sm:flex gap-7">
                              <div className='max-w-3xl w-full'>
                                    <form onSubmit={handleSubmit}>

                                          <div className="mb-3">
                                                <div className="mb-2 block">
                                                      <Label htmlFor="title" value="Title" />
                                                </div>
                                                <TextInput id="title" type="text" placeholder="Enter new title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                          </div>
                                          <div className="mb-3">
                                                <div className="mb-2 block">
                                                      <Label htmlFor="sequence" value="Sequence" />
                                                </div>
                                                <TextInput id="sequence" type="number" placeholder="Enter new sequence" value={sequence} onChange={(e) => setSequence(e.target.value)} />
                                          </div>
                                          <div className="mb-3">
                                                <div className="mb-2 block">
                                                      <Label htmlFor="videoUrl" value="Video Url" />
                                                </div>
                                                <TextInput id="videoUrl" type="url" placeholder="Enter video URL" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
                                          </div>
                                          <div className="mb-3">
                                                <div className="mb-2 block">
                                                      <Label htmlFor="description" value="Description" />
                                                </div>
                                                <Textarea id="description" placeholder="Enter new description" rows={5} className='resize-none' value={description} onChange={(e) => setDescription(e.target.value)} />
                                          </div>
                                          <div className="flex gap-3">
                                                <Button type="submit" color='blue'>Create</Button>
                                                <Button color='light'>Cancel</Button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </Card>
                  <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
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

export default CreateLesson;
