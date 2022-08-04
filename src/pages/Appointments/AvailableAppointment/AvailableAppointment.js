import React from 'react';
const AvailableAppointment = ({appointment,setService}) => {
      const {name,slots} = appointment;
      return (
            <div className="card w-96 lg:max-h-lg  shadow-xl ">
            
            <div className="card-body text-center ">
              <h2 className="text-xl font-bold  text-secondary">{name}</h2>
              <p >{slots.length> 0 ?
              <span>{slots[0]}</span>
              :
              <span className=' text-red-600 uppercase'>Try another Day</span>
              }</p>
              <p className='text-center uppercase text-slate-400'>{slots.length} {slots.length > 1 ? 'services' : 'service'} available</p>
              <div className="card-actions justify-center">

              <label
              onClick={()=>setService(appointment)}
               disabled={slots.length===0}
               htmlFor="booking-modal" 
               className="btn bg-gradient-to-r from-primary to-secondary text-white uppercase border-none">Get Appointment</label>
               
              </div>
            </div>
          </div>
      );
};

export default AvailableAppointment;