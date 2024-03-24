import { Button, Label, TextInput, FileInput, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../../hooks/authHooks';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const EditCourse = () => {
      const { id } = useParams();
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const { user } = useAuthContext();
      const [cover, setCover] = useState(null);
      const [previewCover, setPreviewCover] = useState(null);
      const [price, setPrice] = useState(0);
      const [mentor, setMentor] = useState('');
      const navigate = useNavigate()

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}course/get/${id}`, {
                              headers: {
                                    'Authorization': `Bearer ${user.token}`
                              }
                        });
                        setTitle(response.data.title);
                        setDescription(response.data.description);
                        setCover(response.data.cover);
                        setPrice(response.data.price);
                        setMentor(response.data.mentor.username);
                  } catch (error) {
                        console.error(error);
                  }
            };

            if (user) {
                  fetchData();
            }
      }, [id, user]);

      const handleCoverChange = (e) => {
            const file = e.target.files[0];
            setCover(file);
            setPreviewCover(URL.createObjectURL(file));
      };

      const handleUpdateCourse = async () => {
            try {
                  await axios.put(`${import.meta.env.VITE_API_BASE_URL}course/update/${id}`, {
                        title,
                        description,
                        cover,
                        price: parseFloat(price),
                        mentor: user._id,
                  }, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                              'Content-Type': 'multipart/form-data'
                        }
                  });

                  setTimeout(() => {
                        window.location.href = "/mentor/course";
                  }, 3000);
                  toast.success('Course Berhasil Di Update!', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                  });
            } catch (error) {
                  console.error('Error editing course:', error.message);
            }
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            handleUpdateCourse();
      };

      const handleBackPage = () => {
            navigate('/mentor/course')
      }

      return (
            <div className="sm:flex gap-7">
                  <div className='sm:max-w-xl w-full'>
                        <form onSubmit={handleSubmit}>
                              <div className="mb-3">
                                    <div className="mb-2 block">
                                          <Label htmlFor="title" value="Title" />
                                    </div>
                                    <TextInput id="title" type="text" placeholder="Enter new title" value={title} onChange={(e) => setTitle(e.target.value)} />
                              </div>
                              <div className="mb-3">
                                    <div className="mb-2 block">
                                          <Label htmlFor="price" value="Price" />
                                    </div>
                                    <TextInput id="price" type="number" placeholder="Enter new price" value={price} onChange={(e) => setPrice(e.target.value)} />
                              </div>
                              <div className="mb-3">
                                    <div className="mb-2 block">
                                          <Label htmlFor="cover" value="Cover" />
                                    </div>
                                    <FileInput id="cover" sizing="sm" onChange={handleCoverChange} />
                              </div>
                              <div className="mb-3">
                                    <div className="mb-2 block">
                                          <Label htmlFor="description" value="Description" />
                                    </div>
                                    <Textarea id="description" placeholder="Enter new description" rows={5} className='resize-none' value={description} onChange={(e) => setDescription(e.target.value)} />
                              </div>
                              <div className="flex gap-3">
                                    <Button type="submit" color='dark'>Update</Button>
                                    <Button color='light' onClick={handleBackPage}>Cancel</Button>
                              </div>
                        </form>
                  </div>
                  <div className="max-w-2xl w-full">
                        {previewCover && <img className='w-full rounded-2xl mt-6 shadow' src={previewCover} alt="Preview Cover" />}
                  </div>
                  <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition:Bounce />


            </div>

      );
};

export default EditCourse;
