import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'

import Service from './Service';
import Button from '../Shared/Button/Button';
const Services = () => {
      const service = [

            {
                  _id: 1,
                  name: 'Fluoride Treatment',
                  description: " we are best treatment health care center and provide best service to improve health",
                  img: fluoride
            },

            {
                  _id: 2,
                  name: 'Cavity Filling',
                  description: " we are best treatment health care center and provide best service to improve health",
                  img: cavity
            },

            {
                  _id: 3,
                  name: 'Teeth Whitening',
                  description: " we are best treatment health care center and provide best service to improve health",
                  img: whitening
            }


      ]
      return (

            <div className='text-center my-24'>
                  <h3 className='text-primary font-bold text-3xl uppercase'>Our Services</h3>
                  <h2 className='text-4xl font-bold'>Services We Provide</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                              service.map(service => <Service key={service._id}
                                    service={service}
                              ></Service>)
                        }
                  </div>
                  <div class="hero min-h-screen  my-10">
                        <div class="hero-content flex-col lg:flex-row">
                            
                              <img src={treatment} className='rounded-lg shadow-lg w-96'/>
                              
                              <div>
                                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                                    <Button>Get Started</Button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Services;