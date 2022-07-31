import React from 'react';
import InfoCard from '../Info/InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const info = () => {
      return (
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                  <InfoCard cardTitle="Opening hour" bgCls="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
                  <InfoCard cardTitle="Locations" bgCls="bg-accent" img={marker}></InfoCard>
                  <InfoCard cardTitle="Contact us" bgCls="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
            </div>
      );
};

export default info;