import { Avatar, TextInput, Label, Textarea, Button } from 'flowbite-react';
// import { useAuthContext } from '../hooks/authHooks';
const Dashboard = () => {
      return (
            <>
                  <div className="pt-20 h-screen px-5">
                        <div className="flex justify-center">
                              <div className="max-w-4xl w-full">
                                    <div className="flex gap-5 w-full">
                                          <div className='w-56'>
                                                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded bordered size="xl" className='mt-2' />
                                          </div>
                                          <div className="grid w-full">
                                                <div className="mb-3">
                                                      <Label htmlFor="small" value="Username" />
                                                      <TextInput id="small" type="text" sizing="md" />
                                                </div>
                                                <div className="mb-3">
                                                      <Label htmlFor="small" value="Email" />
                                                      <TextInput id="small" type="text" sizing="md" />
                                                </div>
                                                <div className="mb-3">
                                                      <Label htmlFor="small" value="Address" />
                                                      <Textarea id="comment" required rows={5} className='resize-none' />
                                                </div>
                                                <div className="flex gap-4">
                                                      <Button className='px-5' color="blue">Submit</Button>
                                                      <Button className='px-5'>Cancel</Button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div >
            </>
      )
}
export default Dashboard