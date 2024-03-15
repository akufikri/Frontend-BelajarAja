import { Button, Label, TextInput, FileInput, Textarea, Toast } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../../hooks/authHooks';

const EditCourse = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const { user } = useAuthContext();
      const [cover, setCover] = useState(null);
      const [previewCover, setPreviewCover] = useState(null);
      const [price, setPrice] = useState(0);
      const [mentor, setMentor] = useState('');
      const [showSuccessToast, setShowSuccessToast] = useState(false);

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

      const handleBackPage = () => {
            navigate('/mentor/course');
      }

      const handleUpdateCourse = async () => {
            try {
                  const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}course/update/${id}`, {
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

                  if (response.status === 201) {
                        setShowSuccessToast(true); // Show success toast on successful update
                        setTimeout(() => {
                              navigate('/mentor/course'); // Redirect to /mentor/course after showing success toast
                        }, 2000); // 2 seconds delay before redirecting
                  } else {
                        console.error('Error editing course:', response.data.error);
                  }

            } catch (error) {
                  console.error('Error editing course:', error.message);
            }
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            handleUpdateCourse();
      };

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
                  {showSuccessToast && (
                        <Toast className="fixed bottom-10 right-10" duration={2000} onClose={() => setShowSuccessToast(false)}>
                              <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm">Course successfully updated!</p>
                              </div>
                        </Toast>
                  )}
            </div>
      );
};

export default EditCourse;
