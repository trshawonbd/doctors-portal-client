import React from 'react';
import chair from '../../../assets/images/chair.png';
import chairBg from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <div 
        style={{background: `url(${chairBg})`}}
        class="hero min-h-screen justify-center ">
            <div class="hero-content  flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg " />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">our goal has been to maintain a very high standard of care and to provide our patients with the best and safest solutions.</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;