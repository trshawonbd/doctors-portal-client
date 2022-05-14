import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data)); 
    } 
        ,[])
    return (
        <div className='mx-12'>
            <h3 className='text-secondary text-center text-xl font-bold my-16'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service = {service}
                    setTreatment = {setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                date = {date}
                treatment= {treatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;