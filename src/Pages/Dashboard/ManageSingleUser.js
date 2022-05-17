import React from 'react';
import { toast } from 'react-toastify';

const ManageSingleUser = ({index, singleDoctor, refetch, setDeleting}) => {



    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
  <div class="w-20 rounded">
    <img src={singleDoctor.picture} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div></td>
            <td>{singleDoctor.name}</td>
            <td>{singleDoctor.speciality}</td>
            
            
            <td>
            <label onClick={() => setDeleting(singleDoctor)} for="confirm-modal" class="btn btn-error btn-xs">Delete</label>
                </td>

        </tr>
    );
};

export default ManageSingleUser;