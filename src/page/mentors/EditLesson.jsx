import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useAuthContext } from '../../hooks/authHooks';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const EditLesson = () => {
      const { id } = useParams();
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [video_url, setVideoUrl] = useState('');
      const [sequence, setSequence] = useState(0);
      const { user } = useAuthContext();
      const navigate = useNavigate();


      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await axios.get(`https://be-belajaraja.vercel.app/api/lesson/get/${id}`, {
                              headers: {
                                    'Authorization': `Bearer ${user.token}`,
                              }
                        });

                        setTitle(response.data.title);
                        setDescription(response.data.description);
                        setVideoUrl(response.data.video_url);
                        setSequence(response.data.sequence);

                  } catch (error) {
                        console.error(error);
                  }
            };
            if (user) {
                  fetchData();
            }
      }, [id, user]);


      const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                  const res = await axios.put(`https://be-belajaraja.vercel.app/api/lesson/update/${id}`, {
                        title,
                        description,
                        video_url,
                        sequence,
                  }, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        }
                  });

                  if (res.status === 200) {
                        // Memperbarui notifikasi untuk menunjukkan bahwa data berhasil diperbarui
                        toast.success('Lesson successfully update, please wait...', {
                              position: "bottom-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                        });
                  }
            } catch (error) {
                  console.error('Error editing lesson:', error.message);
                  // Menampilkan notifikasi jika terjadi kesalahan saat mengirimkan permintaan
                  toast.error('Terjadi kesalahan saat mengirimkan permintaan.', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                  });
            }
      };


      return (
            <>
                  <Card className='max-w-3xl border-l-8 border-l-blue-500 border-t-0 border-b-0 border-r-0'>
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
                                                <TextInput id="videoUrl" type="url" placeholder="Enter video URL" value={video_url} onChange={(e) => setVideoUrl(e.target.value)} />
                                          </div>
                                          <div className="mb-3">
                                                <div className="mb-2 block">
                                                      <Label htmlFor="description" value="Description" />
                                                </div>
                                                <Textarea id="description" placeholder="Enter new description" rows={5} className='resize-none' value={description} onChange={(e) => setDescription(e.target.value)} />
                                          </div>
                                          <div className="flex gap-3">
                                                <Button type="submit" color='dark'>Update</Button>
                                                <Button color='light' onClick={() => navigate(`/mentor/lesson/${id}`)}>Cancel</Button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </Card>
                  <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
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
      )
}

export default EditLesson;
