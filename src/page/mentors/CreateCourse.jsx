import { Button, Label, TextInput, FileInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/authHooks';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
      const [title, setTitle] = useState('');
      const [price, setPrice] = useState('');
      const [cover, setCover] = useState(null);
      const [description, setDescription] = useState('');
      const [previewCover, setPreviewCover] = useState(null); // State for the preview image
      const navigate = useNavigate();
      const { user } = useAuthContext();

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const formData = new FormData();
                  formData.append('title', title);
                  formData.append('description', description);
                  formData.append('cover', cover);
                  formData.append('price', parseFloat(price));
                  formData.append('mentor', user._id);

                  const response = await axios.post(
                        `${import.meta.env.VITE_API_BASE_URL}course/create`,
                        formData,
                        {
                              headers: {
                                    Authorization: `Bearer ${user.token}`,
                                    'Content-Type': 'multipart/form-data',
                              },
                        }
                  );

                  if (response.status === 201) {
                        navigate('/mentor/course');
                  } else {
                        console.error('Error creating course:', response.data.error);
                  }
            } catch (error) {
                  console.error('Error creating course:', error.message);
            }
      };

      const handleCoverChange = (e) => {
            const file = e.target.files[0];
            setCover(file);
            setPreviewCover(URL.createObjectURL(file)); // Create preview URL for the selected file
      };
      const handleBackPage = () => {
            navigate('/mentor/course')
      }

      return (
            <>
                  <div className="sm:flex gap-7">
                        <div className='max-w-xl w-full'>
                              <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                          <div className="mb-2 block">
                                                <Label htmlFor="title" value="Title" />
                                          </div>
                                          <TextInput id="title" type="text" placeholder="Enter new title" onChange={(e) => setTitle(e.target.value)} value={title} />
                                    </div>
                                    <div className="mb-3">
                                          <div className="mb-2 block">
                                                <Label htmlFor="price" value="Price" />
                                          </div>
                                          <TextInput id="price" type="number" placeholder="Enter new price" onChange={(e) => setPrice(e.target.value)} value={price} />
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
                                          <Textarea id="description" placeholder="Enter new description" rows={5} className='resize-none' onChange={(e) => setDescription(e.target.value)} value={description} />
                                    </div>
                                    <div className="flex gap-3">
                                          <Button type="submit" color='dark'>Create</Button>
                                          <Button color='light' onClick={handleBackPage}>Cancle</Button>
                                    </div>
                              </form>
                        </div>
                        <div className="max-w-2xl w-full">
                              {previewCover && <img className='w-full rounded-2xl mt-6 shadow' src={previewCover} alt="Preview Cover" />}
                        </div>
                  </div>
            </>
      );
};

export default CreateCourse;
