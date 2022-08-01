import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = ({date,setDate}) => {
      
      return (
            <div class="hero min-h-screen">
                  <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} alt='Dentist chair' />
                        <div>
                              <DayPicker 
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              />
                              <p className='text-secondary text-xl '>You Have selected : <span className='underline'>{format(date, 'PP')}</span></p>
                        </div>
                  </div>
            </div>
      );
};

export default AppointmentBanner;