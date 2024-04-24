import { Table, Button, Modal, Pagination, Card } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/authHooks';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
      const navigate = useNavigate();
      const { user } = useAuthContext();
      const [currentPage, setCurrentPage] = useState(1);
      const [showNoCoursesMessage, setShowNoCoursesMessage] = useState(false);
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
                        setTimeout(() => {
                              window.location.href = '/mentor/course'
                        }, 3000);
                        toast.success('Course berhasil dihapus!', {
                              position: "bottom-right",
                              autoClose: 2000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                        });
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
      const handleRedirectLesson = (id) => {
            navigate(`/mentor/lesson/${id}`)
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

      const renderNoCoursesMessage = () => {
            if (showNoCoursesMessage) {
                  return (
                        <p className='text-center text-2xl font-semibold mt-10 text-gray-600'>Tidak ada kelas tersedia</p>
                  );
            }
            return null;
      };
      return (
            <>
                  <div >
                        <div className='mb-5 flex gap-4'>
                              <Button onClick={handleClickCreate} color='light' size="sm" className='transition shadow-md'><i className="fa-regular fa-circle-plus me-3"></i>  <span>Create</span></Button>
                        </div>


                        <div className="overflow-x-auto shadow-md rounded-2xl">
                              {currentCourses.length > 0 ? (
                                    <Table striped >
                                          <Table.Head>
                                                <Table.HeadCell className='bg-blue-500 text-white font-normal '>No</Table.HeadCell>
                                                <Table.HeadCell className='bg-blue-500 text-white font-normal '>Title</Table.HeadCell>
                                                <Table.HeadCell className='bg-blue-500 text-white font-normal '>Cover</Table.HeadCell>
                                                <Table.HeadCell className='bg-blue-500 text-white font-normal '>Description</Table.HeadCell>
                                                <Table.HeadCell className='bg-blue-500 text-white font-normal '>Price</Table.HeadCell>
                                                <Table.HeadCell className='bg-blue-500 text-white font-normal '>
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
                                                                  <img src={course.cover} alt="" className='h-20 rounded-lg img-fluid' />
                                                            </Table.Cell>
                                                            <Table.Cell> {course.description.length > 70 ? `${course.description.slice(0, 70)}...` : course.description}</Table.Cell>
                                                            <Table.Cell>  {formatPrice(course.price)}</Table.Cell>
                                                            <Table.Cell>
                                                                  <div className="flex gap-4">
                                                                        <button className='shadow h-8 w-8 rounded-full bg-gray-800 text-white' onClick={() => { handleRedirectLesson(course._id) }}>
                                                                              <i className="fa-regular fa-video "></i>
                                                                        </button>
                                                                        <button className='shadow h-8 w-8 rounded-full bg-gray-800 text-white' type='button' onClick={() => { setCourseToDelete(course._id); setOpenModal(true); }}>
                                                                              <i className="fa-regular fa-trash"></i>
                                                                        </button>
                                                                        <button className='shadow h-8 w-8 rounded-full bg-gray-800 text-white' type='button' onClick={() => handleEditCourse(course._id)}>
                                                                              <i className="fa-regular fa-pen-to-square"></i>
                                                                        </button>
                                                                  </div>
                                                            </Table.Cell>
                                                      </Table.Row>
                                                ))}
                                          </Table.Body>
                                    </Table>
                              ) : (
                                    renderNoCoursesMessage()
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
                                                Are you sure can delete this ?
                                          </h3>
                                          <div className="flex justify-center gap-4">
                                                <Button color="failure" onClick={handleDelete}>
                                                      {"Yes, i deleted"}
                                                </Button>
                                                <Button color="gray" onClick={() => setOpenModal(false)}>
                                                      No, i deleted
                                                </Button>
                                          </div>
                                    </div>
                              </Modal.Body>
                        </Modal>



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
            </>
      )
};

export default Courses;
