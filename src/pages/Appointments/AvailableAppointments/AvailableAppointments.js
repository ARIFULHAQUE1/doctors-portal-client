import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const AvailableAppointments = ({date}) => {
      const [appointments,setAppointments] = useState([]);
      useEffect(()=>{
            fetch ('services.json')
            .then(res=>res.json())
            .then(data=>setAppointments(data))
      },[])
      return (
            <div className='my-10'>
                  <h4 className='text-xl text-center text-secondary font-semibold'>Available Appointments on{format(date, 'PP')}</h4>
                  <h3 className='text-center text-slate-400 text-xl underline'>Select a Service</h3>
                  <div className='grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                      {
                        appointments.map(appointment=><AvailableAppointment key={appointment._id} appointment={appointment}></AvailableAppointment>)
                      }
                  </div>
            </div>
      );
};

export default AvailableAppointments;