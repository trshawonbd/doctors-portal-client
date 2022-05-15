import React from 'react';

const Service = ({img, cardTitle, cardDes}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="fluoride" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDes}</p>
            </div>
        </div>
    );
};

export default Service;