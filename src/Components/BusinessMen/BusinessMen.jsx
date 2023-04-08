import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BusinessMan from '../BusinessMan/BusinessMan';

const BusinessMen = () => {
    let posts = useLoaderData();
    // console.log(posts);
    return (
        <div>
            <h1 className='text-2xl mt-20'>Here shows the Business-Men status</h1>
            <hr className='pt-1 bg-slate-500 mt-8 rounded-2xl' />
           <div className='grid grid-cols-3 gap-20 mt-24'>
            {
                posts.map(data => <BusinessMan 
                key={data.id}
                data={data}
                ></BusinessMan>)
            }
            {
                posts.map(data => console.log(data))
            }
           </div>
        </div>
    );
};

export default BusinessMen;