import React from 'react';
import chair from '../../../assets/images/chair.png'
const AvailableAppointment = ({appointment}) => {
      const {name,slots} = appointment;
      return (
            <div class="card w-96 lg:max-h-lg  shadow-xl ">
            
            <div class="card-body ">
              <h2 class="text-xl font-bold text-center text-secondary">{name}</h2>
              <p className='text-center'>{slots.length> 0 ?
              <span>{slots[0]}</span>
              :
              <span className=' text-red-600 uppercase'>Try another Day</span>
              }</p>
              <p className='text-center uppercase text-slate-400'>{slots.length} {slots.length > 1 ? 'services' : 'service'} available</p>
              <div class="card-actions justify-center">
                <button disabled={slots.length===0} class="btn bg-gradient-to-r from-primary to-secondary text-white uppercase border-none">Get Appointment</button>
              </div>
            </div>
          </div>
      );
};

export default AvailableAppointment;