import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';




const Appointments = () => {
      const [date,setDate]=useState(new Date());
      return (
            <div className='px-12'>
                  <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
                  
                  <AvailableAppointments date={date}></AvailableAppointments>
                 
            </div>
      );
};

export default Appointments;