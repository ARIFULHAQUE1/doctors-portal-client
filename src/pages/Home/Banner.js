import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from '../Shared/Button/Button';
import bg from '../../assets/images/bg.png'
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="w-2/4 rounded-lg shadow-2xl" />
          <div style={{background:`url(${bg})`,backgroundSize:'cover'}}>
            <h1 className="text-5xl font-bold">Your new Smile Start hare</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Button>Get Started</Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;