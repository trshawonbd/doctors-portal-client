import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import DentalCare from '../Services/DentalCare';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Home;