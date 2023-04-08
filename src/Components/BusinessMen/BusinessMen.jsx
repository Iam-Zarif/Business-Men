import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BusinessMan from '../BusinessMan/BusinessMan';

const BusinessMen = () => {
    let posts = useLoaderData();
    // console.log(posts);
    return (
        <div>
            <h1 className='text-2xl mt-10'>Here shows the Business-Men status</h1>
           <div>
            {
                posts.map(data => <BusinessMan 
                key={data.id}
                data={data}
                ></BusinessMan>)
            }
           </div>
        </div>
    );
};

export default BusinessMen;