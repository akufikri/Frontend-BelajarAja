import React, { useState } from 'react';
import { Button, Textarea, Label, TextInput } from 'flowbite-react';

const Stepper = () => {
      const [currentStep, setCurrentStep] = useState(1);
      const [fullname, setFullname] = useState('');
      const [background, setBackground] = useState('');

      const handleNext = () => {
            if (currentStep === 1 && fullname.trim() !== '' && background.trim() !== '') {
                  setCurrentStep(currentStep + 1);
            }
      };

      const handlePrevious = () => {
            if (currentStep > 1) {
                  setCurrentStep(currentStep - 1);
            }
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted with data:', { fullname, background });
      };

      return (
            <div className="h-screen flex items-center justify-center">
                  <form className="flex max-w-2xl flex-col gap-4 w-full" onSubmit={handleSubmit}>
                        {currentStep === 1 && (
                              <>
                                    <div>
                                          <div className="mb-2 block">
                                                <Label htmlFor="fullname" value="Fullname" />
                                          </div>
                                          <TextInput
                                                id="fullname"
                                                type="text"
                                                placeholder="Fullname"
                                                value={fullname}
                                                onChange={(e) => setFullname(e.target.value)}
                                                required // Add for basic HTML5 validation
                                          />
                                    </div>
                                    <div>
                                          <div className="mb-2 block">
                                                <Label htmlFor="background" value="Background" />
                                          </div>
                                          <Textarea
                                                id="background"
                                                placeholder="Background..."
                                                rows={4}
                                                value={background}
                                                onChange={(e) => setBackground(e.target.value)}
                                                required // Add for basic HTML5 validation
                                          />
                                    </div>
                              </>
                        )}

                        {currentStep === 2 && (
                              <div>
                                    <div className="mb-2 block">
                                          <Label htmlFor="confirmed-quest" value="Why do you want to be a mentor?" />
                                    </div>
                                    <Textarea id="confirmed-quest" placeholder="Why do you want to be a mentor?" required rows={4} />
                              </div>
                        )}

                        <div className="flex justify-between mt-4">
                              {currentStep > 1 && <Button type="button" onClick={handlePrevious}>Previous</Button>}
                              <Button className='px-5' type="button" color="blue" onClick={handleNext}>
                                    {currentStep === 1 ? 'Next' : 'Submit'}
                              </Button>
                        </div>
                  </form>
            </div>
      );
};

export default Stepper;
