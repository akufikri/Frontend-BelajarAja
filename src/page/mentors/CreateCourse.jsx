
import { Button, Label, TextInput, FileInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/authHooks';
const CreateCourse = () => {
      const [title, setTitle] = useState('');
      const [price, setPrice] = useState('');
      const [cover, setCover] = useState('');
      const [description, setDescription] = useState('');

      const { user } = useAuthContext();

      const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                  const response = await axios.post(
                        'https://be-belajaraja.vercel.app/api/course/create',
                        {
                              title,
                              description,
                              cover,
                              price: parseFloat(price),
                              mentor: user._id,
                        },
                        {
                              headers: {
                                    Authorization: `Bearer ${user.token}`,
                                    'Content-Type': 'application/json',
                              },
                        }
                  );

                  if (response.status === 201) {
                        // Course created successfully, you might want to redirect or perform some action
                  } else {
                        console.error('Error creating course:', response.data.error);
                  }
            } catch (error) {
                  console.error('Error creating course:', error.message);
            }
      };
      return (
            <>
                  <div className='max-w-xl'>
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
                                    <FileInput id="cover" sizing="sm" onChange={(e) => setCover(e.target.value)} value={cover} />
                              </div>
                              <div className="mb-3">
                                    <div className="mb-2 block">
                                          <Label htmlFor="description" value="Description" />
                                    </div>
                                    <Textarea id="description" placeholder="Enter new description" rows={5} className='resize-none' onChange={(e) => setDescription(e.target.value)} value={description} />
                              </div>
                              <div className="flex gap-3">
                                    <Button type="submit" color='dark'>Create</Button>
                                    <Button color='light'>Cancle</Button>
                              </div>
                        </form>
                  </div>
            </>
      )
}
export default CreateCourse