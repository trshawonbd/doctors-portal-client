import React from 'react';
import { toast } from 'react-toastify';

const User = ({user, index, refetch}) => {
    const {email, role} = user;

    const makeAdmin = () =>{
        fetch(`https://nameless-oasis-83145.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
   }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>

        </tr>
    );
};

export default User;