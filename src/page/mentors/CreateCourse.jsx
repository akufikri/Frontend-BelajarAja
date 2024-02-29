
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/authHooks';
const CreateCourse = () => {
      const [title, setTitle] = useState('');
      const [price, setPrice] = useState('');
      const [content, setContent] = useState('');
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
                              content,
                              price: parseFloat(price), // Ensure it's a number
                              mentor: user._id, // Assuming user.id is the mentor's ID
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
                  <div className='max-w-lg'>
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
                                          <Label htmlFor="content" value="Content" />
                                    </div>
                                    <TextInput id="content" type="text" placeholder="Enter new content" onChange={(e) => setContent(e.target.value)} value={content} />
                              </div>
                              <div className="mb-3">
                                    <div className="mb-2 block">
                                          <Label htmlFor="description" value="Description" />
                                    </div>
                                    <Textarea id="description" placeholder="Enter new description" rows={5} className='resize-none' onChange={(e) => setDescription(e.target.value)} value={description} />
                              </div>
                              <div className="flex gap-3">
                                    <Button type="submit" color='blue'>Create</Button>
                                    <Button>Cancle</Button>
                              </div>
                        </form>
                  </div>
            </>
      )
}
export default CreateCourse