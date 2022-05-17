import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteModal from './DeleteModal';
import ManageSingleUser from './ManageSingleUser';

const ManageDoctors = () => {
    const [deleting, setDeleting] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>Managing Doctors : {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((singleDoctor, index) => <ManageSingleUser
                                key={index}
                                index={index}
                                singleDoctor={singleDoctor}
                                refetch={refetch}
                                setDeleting = {setDeleting}
                            ></ManageSingleUser>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deleting && <DeleteModal
                deleting={deleting}
                refetch={refetch}
                setDeleting = {setDeleting}
                ></DeleteModal>
            }
        </div>
    );
};

export default ManageDoctors;