import React from 'react';
import Banner from './Banner';
import Info from '../Info/Info';
import Services from './Services';
import MakeAppoinment from '../Appointments/MakeAppoinment/MakeAppoinment';
import Testomonials from './Testomonials';
import Contact from '../Contact/Contact';

const Home = () => {
      return (
            <div className='px-12'>
                  <Banner></Banner>
               <Info></Info>
               <Services></Services>
              <MakeAppoinment></MakeAppoinment>
               <Testomonials></Testomonials>
               <Contact></Contact>
                  
            </div>
      );
};

export default Home;