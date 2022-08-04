import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ service,setService, date }) => {
      const { name, slots } = service;
      const handleSubmit =(event)=>{
            event.preventDefault();
            const slot = event.target.slot.value; 
            const date = event.target.date.value;
            console.log(date,slot,name)
            setService(null);
      }
      
      return (
            <div>
                  <input type="checkbox" id="booking-modal" className="modal-toggle" />
                  <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                              <label for="booking-modal" className="btn btn-sm bg-secondary border-none btn-circle absolute right-2 top-2 text-white">✕</label>
                              <h3 className="font-bold text-lg text-secondary text-center">{name}</h3>

                              <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-1 mt-2 justify-items-center'>
                                    <input name='date' readOnly value={format(date, 'PP')} className="input w-full input-bordered input-secondary max-w-xs" />
                                    <select name='slot' className="select select-bordered select-secondary w-full max-w-xs">
                                       {
                                             slots.map(slot=><option>{slot}</option>)
                                       }
                                   
                                    </select>
                                    <input type="text" name='patientName' placeholder="Your Name" className="input w-full input-bordered input-secondary max-w-xs" />

                                    <input type="email" name='email' placeholder="Email address" className="input w-full input-bordered input-secondary max-w-xs" />

                                    <input type="text" name='phone' placeholder="Phone Number" className="input w-full input-bordered input-secondary max-w-xs" />

                                    <input type="submit" value="Submit" className="btn btn-secondary w-full border-none max-w-xs text-white" />
                              </form>


                        </div>
                  </div>
            </div>
      );
};

export default BookingModal;