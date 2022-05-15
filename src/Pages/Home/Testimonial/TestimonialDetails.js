import React from 'react';

const TestimonialDetails = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-6">
                        <img src={review.img} />
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>{review.name}</h4>
                    <p>{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;