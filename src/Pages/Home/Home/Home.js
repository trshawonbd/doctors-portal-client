import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import DentalCare from '../Services/DentalCare';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;