import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppointment = ({date}) => {
    /* const [services, setServices] = useState([]); */
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date,'PP');

    const { isLoading, refetch, data: services } = useQuery(['available', formattedDate], () =>
     fetch(`https://nameless-oasis-83145.herokuapp.com/available?date=${formattedDate}`).then(res =>
       res.json()
     )
   )

   if (isLoading){
       return <Loading></Loading>
   }

    return (
        <div className='mx-12'>
            <h3 className='text-secondary text-center text-xl font-bold my-16'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                    key={service._id}
                    service = {service}
                    setTreatment = {setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                date = {date}
                treatment= {treatment}
                setTreatment = {setTreatment}
                refetch = {refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;