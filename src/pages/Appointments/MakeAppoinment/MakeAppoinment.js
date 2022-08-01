import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import Button from '../../Shared/Button/Button';
const MakeAppoinment = () => {
      return (
            <section style={{background:`url(${appointment})`}}
             className='flex justify-center items-center'>
                  <div className='flex-1 hidden lg:block'>
                        <img  className='mt-[-100px]' src={doctor} alt="" />
                  </div>
                  <div className='flex-1 px-4'>
                        <h3 className='text-xl text-primary font-bold '>Appointment</h3>
                        <h2 className='text-2xl text-white '>Make an appointment Today</h2>
                        <p className='text-white mb-4 mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get Appointment</Button>
                  </div>
            </section>


      );
};

export default MakeAppoinment;