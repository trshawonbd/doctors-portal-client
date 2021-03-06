import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../../assets/images/treatment.png';

const DentalCare = () => {
    return (
<div className="hero min-h-screen justify-center">
  <div className="hero-content flex-col-reverse lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div className='p-6'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold "><Link to='/appointment'>Get Started</Link></button>
    </div>
  </div>
</div>
    );
};

export default DentalCare;