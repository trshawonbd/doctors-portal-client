import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
const Appointment = () => {
    return (
        <div 
        style={{
            background: `url(${appointment})`
        }} 
        class="flex justify-center items-center">
            <div class="flex-1 hidden lg:block ">
                <img class=" mt-[-100px]" src={doctor}  
              alt=''/>  </div>
                <div className='flex-1 p-12'>
                    <h4 className='text-secondary text-2xl'>Appointment</h4>
                    <h1 class="text-5xl font-bold text-white">Make an appointment Today</h1>
                    <p class="py-6 text-white text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
                </div>
            </div>
        
    );
};

export default Appointment;