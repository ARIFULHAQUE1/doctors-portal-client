import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from '../Review/Review';
const Testomonials = () => {
      const reviews = [
            {_id:1,
                  review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
                  name:'Harry Potter',
                  location:'Florida',
                  img:people1,
            },
            {_id:2,
                  review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
                  name:'jorinah',
                  location:'Losvegus',
                  img:people2,
            },
            {_id:3,
                  review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
                  name:'Sokinah',
                  location:'Gulistan',
                  img:people3,
            },
      ]
      return (
            <section>
                  <div className='flex justify-between my-20'>
                        <div>
                        <h3 className='text-primary text-xl font-bold'>Testimonials</h3>
                        <h2 className='text-2xl'>What Our Patients Says</h2>
                        </div>
                        <div>
                        <img src={quote} className='w-24 lg:w-48' alt="" />
                        </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                              reviews.map(review=><Review key={review._id}
                                    review={review}
                              ></Review>)
                        }
                  </div>
            </section>
      );
};

export default Testomonials;