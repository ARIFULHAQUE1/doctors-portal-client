import React from 'react';

const Review = ({ review }) => {
      return (
            <div>
                  <div class="card md:max-w-md bg-base-100 shadow-xl">
                        <div class="card-body">
                              <p>{review.review}</p>
                              <div className='flex items-center' >
                                    <div class="avatar">
                                          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                                                <img src={review.img}/>
                                          </div>
                                    </div>
                                    <div>
                                          <h3 className='text-xl font-semibold'>{review.name} </h3>
                                          <h4>{review.location}</h4>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Review;