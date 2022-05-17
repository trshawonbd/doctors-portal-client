import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import { Link } from 'react-router-dom';
const Appointment = () => {
    return (
        <div 
        style={{
            background: `url(${appointment})`
        }} 
        className="flex justify-center items-center">
            <div className="flex-1 hidden lg:block ">
                <img className=" mt-[-100px]" src={doctor}  
              alt=''/>  </div>
                <div className='flex-1 p-12'>
                    <h4 className='text-secondary text-2xl'>Appointment</h4>
                    <h1 className="text-3xl py-3 lg:text-5xl font-bold text-white ">Make an appointment Today</h1>
                    <p className=" text-white py-3 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold"><Link to='/appointment'>Get Started</Link></button>
                </div>
            </div>
        
    );
};

export default Appointment;