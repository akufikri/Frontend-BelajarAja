import { Button, Label, TextInput, Select, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/authHooks';
import { useNavigate, useParams } from 'react-router-dom';

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
                        navigate(`/mentor/lesson/${id}`);
                  } else {
                        console.error('Error creating course:', res.data.error);
                  }
            } catch (error) {
                  console.error('Error creating lesson:', error);
            }
      };

      return (
            <>
                  <div className="sm:flex gap-7">
                        <div className='max-w-xl w-full'>
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
                                          <Button type="submit" color='dark'>Create</Button>
                                          <Button color='light'>Cancel</Button>
                                    </div>
                              </form>
                        </div>
                  </div>
            </>
      );
};

export default CreateLesson;
