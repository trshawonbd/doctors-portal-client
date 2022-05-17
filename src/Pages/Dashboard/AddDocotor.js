import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDocotor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { isLoading, refetch, data: services } = useQuery(['services'], () =>
        fetch(`http://localhost:5000/service`)
           /*  {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            } */
            .then(res =>
                res.json()
            )

    )

    if (isLoading) {
        return <Loading></Loading>
    }


    const imageStorageKey ="5013833aebae0eedbc72b8f4f357d327";


    const onSubmit = async data => {
        console.log('data' , data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then (result => {
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    picture: img,
                }
                

                fetch(`http://localhost:5000/doctor`,{
                    method: "POST",
                    headers: {
                        'content-type' : 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then (inserted => {
                    console.log('Inserted', inserted);
                    if (inserted.insertedId){
                        toast.success(`Doctors added successfully`);
                        reset();
                    }
                    else{
                        toast.error("Something went wrong, please try again")
                        reset();
                    }
                })
            }
            console.log('img', result);
        })
    }


    return (
        <div className='h-screen md : flex flex-col items-center justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Doctor</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Speciality</span>
                            </label>
                            <select {...register("speciality")} class="select w-full max-w-xs input-bordered">
                                {
                                    services.map(service => <option
                                        key={service._id}
                                        value={service.name}
                                    >{service.name}</option>)
                                }

                            </select>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input  type="file"
                               
                                className="input input-bordered w-full max-w-xs "
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'image is required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value='Add Doctor' />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddDocotor;