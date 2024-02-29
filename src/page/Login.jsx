import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom';
import Testimoni from '../components/Testimoni';
const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const { login, error, isLoading } = useLogin()
      const handleSubmit = async (e) => {
            e.preventDefault()
            await login(email, password)
            setEmail('');
            setPassword('');
      }
      return (
            <>
                  <section>
                        <div className="flex items-center w-full h-screen gap-4 justify-center">
                              <Testimoni />
                              <Card className="max-w-md w-full shadow-none border-0">
                                    <div className='text-center my-7'>
                                          <h1 className='text-[48px] font-medium my-2'>Login</h1>
                                          <span className='text-sm leading-3 font-normal'>Welcome back! Please log in to access your account.</span>
                                    </div>
                                    <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
                                          <div>
                                                <div className="mb-2 block">
                                                      <Label htmlFor="email" value="Email" className=' font-normal' />
                                                </div>
                                                <TextInput id="email" type="email" placeholder="Enter Your Email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                          </div>
                                          <div>
                                                <div className="mb-2 block">
                                                      <Label htmlFor="password" value="Password" className=' font-normal' />
                                                </div>
                                                <TextInput id="password" type="password" placeholder='Enter Your Password' name='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                                          </div>

                                          <Button type="submit" color='blue' disabled={isLoading}>
                                                {isLoading ? 'Loading...' : 'Login'}
                                          </Button>
                                          {error && <div className='text-red-500'>{error}</div>}
                                    </form>

                                    <div className='my-2 text-center'>
                                          <span className='text-sm font-normal'>Dont have account ? <Link to='/signup' className='hover:underline me-1'>SignUp</Link><i className="fa-regular fa-arrow-up-right "></i></span>
                                    </div>
                              </Card>
                        </div>
                  </section >
            </>
      )
}
export default Login