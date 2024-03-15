import { Table, Button, Modal, Toast, Pagination } from 'flowbite-react';
import { HiOutlineExclamationCircle, HiCheck } from 'react-icons/hi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/authHooks';
import { motion } from "framer-motion"; // Import motion from Framer Motion

const formatPrice = (price) => {
      const formattedPrice = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
      }).format(price);

      return formattedPrice;
};


const Courses = () => {
      const [courses, setCourses] = useState([]);
      const [courseToDelete, setCourseToDelete] = useState(null);
      const [openModal, setOpenModal] = useState(false);
      const [showToast, setShowToast] = useState(false); // State to control toast visibility
      const navigate = useNavigate();
      const { user } = useAuthContext();
      const [currentPage, setCurrentPage] = useState(1);

      const fetchData = async () => {
            try {
                  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}course/mycourse`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  });
                  setCourses(response.data);
            } catch (error) {
                  console.error('Error fetching data:', error);
            }
      };

      const handleClickCreate = () => {
            navigate('/mentor/course/create');
      };

      const handleDelete = async () => {
            try {
                  const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}course/delete/${courseToDelete}`, {
                        headers: {
                              'Authorization': `Bearer ${user.token}`,
                        },
                  });
                  if (response.status === 200) {
                        setShowToast(true); // Show toast on successful deletion
                        navigate('/mentor/course')
                  } else {
                        console.error('Error deleting course:', response.data.error);
                  }
            } catch (error) {
                  console.error('Error deleting course:', error.message);
            } finally {
                  setCourseToDelete(null);
                  setOpenModal(false);
            }
      };

      const handleEditCourse = (id) => {
            navigate(`/mentor/course/edit/${id}`);
      };
      const handleRedirectLessons = () => {
            navigate('/mentor/lesson')
      }

      useEffect(() => {
            fetchData();
      }, []);

      const onPageChange = (page) => {
            setCurrentPage(page);
      };

      // Pagination
      const itemsPerPage = 10;
      const totalPages = Math.ceil(courses.length / itemsPerPage);
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);

      return (
            <>
                  <div className='mt-10'>
                        <div className='mb-5 flex gap-4'>
                              <Button onClick={handleClickCreate} color='dark' size="sm"><i className="fa-regular fa-circle-plus me-3"></i>  <span>Create</span></Button>
                              <Button onClick={handleRedirectLessons} color='light' size="sm" ><i className="fa-regular fa-video me-3"></i> <span>Leason</span></Button>
                        </div>
                        <div className="overflow-x-auto">
                              {currentCourses.length > 0 ? (
                                    <Table striped>
                                          <Table.Head>
                                                <Table.HeadCell className='bg-gray-900 text-white font-normal '>No</Table.HeadCell>
                                                <Table.HeadCell className='bg-gray-900 text-white font-normal '>Title</Table.HeadCell>
                                                <Table.HeadCell className='bg-gray-900 text-white font-normal '>Cover</Table.HeadCell>
                                                <Table.HeadCell className='bg-gray-900 text-white font-normal '>Description</Table.HeadCell>
                                                <Table.HeadCell className='bg-gray-900 text-white font-normal '>Price</Table.HeadCell>
                                                <Table.HeadCell className='bg-gray-900 text-white font-normal '>
                                                      <span className="sr-only">Edit</span>
                                                </Table.HeadCell>
                                          </Table.Head>
                                          <Table.Body className="divide-y">
                                                {currentCourses.map((course, index) => (
                                                      <Table.Row key={course.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                            <Table.Cell>{indexOfFirstItem + index + 1}</Table.Cell>
                                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                  {course.title}
                                                            </Table.Cell>
                                                            <Table.Cell>
                                                                  <img src={course.cover} alt="" className='h-20 rounded-lg' />
                                                            </Table.Cell>
                                                            <Table.Cell> {course.description.length > 70 ? `${course.description.slice(0, 70)}...` : course.description}</Table.Cell>
                                                            <Table.Cell>  {formatPrice(course.price)}</Table.Cell>
                                                            <Table.Cell>
                                                                  <div className="flex gap-4">
                                                                        <button type='button' onClick={() => { setCourseToDelete(course._id); setOpenModal(true); }}>
                                                                              <i className="fa-regular fa-trash"></i>
                                                                        </button>
                                                                        <button type='button' onClick={() => handleEditCourse(course._id)}>
                                                                              <i className="fa-regular fa-pen-to-square"></i>
                                                                        </button>
                                                                  </div>
                                                            </Table.Cell>
                                                      </Table.Row>
                                                ))}
                                          </Table.Body>
                                    </Table>
                              ) : (
                                    <>
                                          <p className='text-center text-2xl font-semibold mt-10 text-gray-600'>Tidak ada kelas tersedia</p>
                                    </>
                              )}
                        </div>

                        {/* Pagination */}
                        {courses.length > itemsPerPage && (
                              <div className="flex justify-center mt-4">
                                    <Pagination
                                          layout="pagination"
                                          currentPage={currentPage}
                                          totalPages={totalPages}
                                          onPageChange={onPageChange}
                                          previousLabel="Previous"
                                          nextLabel="Next"
                                          showIcons
                                    />
                              </div>
                        )}

                        {/* modal create */}
                        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                              <Modal.Header />
                              <Modal.Body>
                                    <div className="text-center">
                                          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                Are you sure you want to delete this product?
                                          </h3>
                                          <div className="flex justify-center gap-4">
                                                <Button color="failure" onClick={handleDelete}>
                                                      {"Yes, I'm sure"}
                                                </Button>
                                                <Button color="gray" onClick={() => setOpenModal(false)}>
                                                      No, cancel
                                                </Button>
                                          </div>
                                    </div>
                              </Modal.Body>
                        </Modal>

                        {/* toaster */}
                        {showToast && (
                              <motion.div
                                    initial={{ opacity: 0, y: 50 }} // Initial animation state
                                    animate={{ opacity: 1, y: 0 }} // Animation when toast appears
                                    transition={{ duration: 0.5 }} // Transition duration
                                    className='absolute bottom-5 right-6'
                              >
                                    <Toast>
                                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime-100 text-lime-500 dark:bg-lime-800 dark:text-lime-200">
                                                <HiCheck className="h-5 w-5" />
                                          </div>
                                          <div className="ml-3 text-sm font-normal">Successfully</div>
                                          <Toast.Toggle />
                                    </Toast>
                              </motion.div>
                        )}

                  </div>
            </>
      )
};

export default Courses;
