import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';
import TestimonialDetails from './TestimonialDetails';

const TestimonialHeader = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people3
        },
    ];
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-secondary text-2xl mb-4'>Testimonial</h4>
                    <h2 className='text-6xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" srcset="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    reviews.map(review => <TestimonialDetails
                        key={review._id}
                        review={review}
                    >
                    </TestimonialDetails>)
                }

            </div>
        </div>
    );
};

export default TestimonialHeader;