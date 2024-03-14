import { useState } from 'react'
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useSignUpMentor } from '../hooks/useSignUpMentor';
function RegisterMentor() {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const { signup, error, isLoading } = useSignUpMentor();

      const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(username, email, password);
            await signup(username, email, password);

            setUsername('');
            setEmail('');
            setPassword('');
      }
      return (
            <>
                  <section>
                        <div className="flex justify-center items-center w-full h-screen gap-4 sm:p-0 p-4">
                              {/* <Testimoni /> */}
                              <Card className="max-w-md w-full shadow border">
                                    <div className='text-center my-7'>
                                          <h1 className='sm:text-[48px] text-2xl font-medium my-2'>Daftar Mentor</h1>
                                          <span className='text-sm leading-3 font-normal'>Buat akun untuk membuka fitur eksklusif.</span>
                                    </div>
                                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                          <div>
                                                <div className="mb-2 block">
                                                      <Label htmlFor="username" value="Username" className='font-normal' />
                                                </div>
                                                <TextInput id="username" type="username" placeholder="Enter Your Username" name='username' onChange={(e) => setUsername(e.target.value)} value={username} />
                                          </div>
                                          <div>
                                                <div className="mb-2 block">
                                                      <Label htmlFor="email" value="Email" className='font-normal' />
                                                </div>
                                                <TextInput id="email" type="email" placeholder="Enter Your Email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                          </div>
                                          <div>
                                                <div className="mb-2 block">
                                                      <Label htmlFor="password" value="Password" className='font-normal' />
                                                </div>
                                                <TextInput id="password" type="password" name='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                                          </div>

                                          <Button type="submit" color='blue' disabled={isLoading}>
                                                {isLoading ? 'Loading...' : 'SignUp'}
                                          </Button>
                                          {error && <div className='text-red-500'>{error}</div>}
                                    </form>
                                    <div className='my-2 text-center'>
                                          <span className='text-sm font-normal'>Sudah punya akun ? <Link to='/login' className='hover:underline me-1'>Login</Link><i className="fa-regular fa-arrow-up-right "></i></span>
                                    </div>
                              </Card>
                        </div>
                  </section >
            </>
      )
}

export default RegisterMentor