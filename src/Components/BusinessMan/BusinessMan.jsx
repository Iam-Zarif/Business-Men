import React from 'react';
import { Link } from 'react-router-dom';

const BusinessMan = ({data}) => {
    let {name,phone,email} =data;
    return (
        <div className='border py-10 rounded-xl border-black'>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <Link className='hover:border-green-400 border border-black mt-10 py-2 px-4 rounded-xl inline-block'>Show details</Link>
        </div>
    );
};

export default BusinessMan;