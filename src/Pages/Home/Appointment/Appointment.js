import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
const Appointment = () => {
    return (
        <div 
        style={{
            background: `url(${appointment})`
        }} 
        class="hero mt-20">
            <div class="hero-content flex-col-reverse lg:flex-row ">
                <img src={doctor} class="max-w-sm rounded-lg mt-[-100px]" 
                />
                <div>
                    <h4 className='text-secondary text-2xl'>Appointment</h4>
                    <h1 class="text-5xl font-bold text-white">Make an appointment Today</h1>
                    <p class="py-6 text-white text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;