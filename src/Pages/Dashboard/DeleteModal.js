import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deleting, refetch, setDeleting}) => {
    console.log('deleting', deleting)
    const {name, email} = deleting;

    const handleDelete = () =>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("DeletedData", data);
            if(data.deletedCount){
                toast.success(`Doctor ${name} is deleted`);
                setDeleting(null);
                refetch();
                
                
            }
        })

    }
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            <label for="confirm-modal" class="btn modal-button">open modal</label>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-700">Are you sure to delete {name} doctor</h3>
                    <p class="py-4">If you delete, this will be removed permanently. There will be no other way to get back the data.</p>
                    <div class="modal-action">
                    <button onClick={() => handleDelete()} class="btn btn-error btn-xs">Remove Doctor</button>
                        <label for="confirm-modal" class="btn btn-xs">close</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;