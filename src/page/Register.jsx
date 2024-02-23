import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useSignUp } from '../hooks/useSignUp';
const Register = () => {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const { signup, error, isLoading } = useSignUp();

      const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(username, email, password);
            await signup(username, email, password);
      }
      return (
            <>
                  <section>
                        <div className="flex justify-center items-center w-full h-screen">
                              <Card className="max-w-lg w-full">
                                    <h1 className='text-lg font-medium text-center my-5'>Daftar dan nikmati kelas berkualitas!</h1>
                                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                          <div>
                                                <div className="mb-2 block">
                                                      <Label htmlFor="username" value="Username" />
                                                </div>
                                                <TextInput id="username" type="username" placeholder="jhon" name='username' onChange={(e) => setUsername(e.target.value)} value={username} />
                                          </div>
                                          <div>
                                                <div className="mb-2 block">
                                                      <Label htmlFor="email" value="Email" />
                                                </div>
                                                <TextInput id="email" type="email" placeholder="name@flowbite.com" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                          </div>
                                          <div>
                                                <div className="mb-2 block">
                                                      <Label htmlFor="password" value="Password" />
                                                </div>
                                                <TextInput id="password" type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <Checkbox id="remember" />
                                                <Label htmlFor="remember">Remember me</Label>
                                          </div>
                                          <Button type="submit" color='blue' disabled={isLoading}>
                                                {isLoading ? 'Loading...' : 'Daftar'}
                                          </Button>
                                          {error && <div className='text-red-500'>{error}</div>}
                                    </form>
                              </Card>
                        </div>
                  </section >
            </>
      )
}
export default Register