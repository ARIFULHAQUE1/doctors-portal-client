import React from 'react';
import Banner from './Banner';
import Info from '../Info/Info';
import Services from './Services';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
const Home = () => {
      return (
            <div className='px-12'>
                  <Banner></Banner>
               <Info></Info>
               <Services></Services>
               <MakeAppoinment></MakeAppoinment>
                  
            </div>
      );
};

export default Home;