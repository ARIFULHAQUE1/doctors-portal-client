import React from 'react';

const infoCard = ({img,cardTitle,bgCls}) => {
      return (
            <div class={`card lg:card-side bg-base-100 shadow-xl ${bgCls}`}>
  <figure className='pl-5'>
      <img src={img}/>
      </figure>
  <div class="card-body text-white">
    <h2 class="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    
  </div>
</div>
      );
};

export default infoCard;