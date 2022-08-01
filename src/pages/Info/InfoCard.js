import React from 'react';

const infoCard = ({img,cardTitle,bgCls}) => {
      return (
            <div className={`card lg:card-side  shadow-xl ${bgCls}`}>
  <figure className='pl-5 py-5'>
      <img src={img}/>
      </figure>
  <div className="card-body text-white">
    <h2 className="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    
  </div>
</div>
      );
};

export default infoCard;