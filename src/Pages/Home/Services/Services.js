import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import teeth from '../../../assets/images/whitening.png';

const Services = () => {
    return (
        <div className='mt-16'>
            <h4 className='text-center text-secondary mb-6 text-2xl font-bold'>Our Services</h4>
            <h2 className='text-center text-6xl'>Services We Provide</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Service cardTitle = "Fluoride Treatment" cardDes = "Dentistry in the narrower sense means the correction of dental defects with various filling materials" img={fluoride}></Service>
                <Service cardTitle = "Cavity Filling" cardDes = "Composite materials are well suited for repairing minor tooth defects. Modern materials are tissue-friendly and allow to restore aesthetics" img={cavity}></Service>
                <Service cardTitle = "Teeth Whitening" cardDes = "Glass ionomeric materials are used because of their ability to strengthen dental tissues as long-term temporary fillings and also in the treatment of deciduous teeth." img={teeth}></Service>
            </div>

        </div>
    );
};

export default Services;