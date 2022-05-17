import React from 'react';
import chair from '../../../assets/images/chair.png';
import chairBg from '../../../assets/images/bg.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div 
        style={{background: `url(${chairBg})`}}
        className="hero min-h-screen items-center 	justify-center ">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg" alt=''/>
                <div className='p-6'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">our goal has been to maintain a very high standard of care and to provide our patients with the best and safest solutions.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"><Link to='/appointment'>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;