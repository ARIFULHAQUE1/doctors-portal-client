
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png'
const AppointmentBanner = ({date,setDate}) => {
      
      return (
            <div
            style={{background:`url(${bg})`,backgroundSize:'cover'}}
             className="hero min-h-screen ">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} className="w-1/3"  alt='Dentist chair' />
                        <div >
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