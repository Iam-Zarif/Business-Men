import React from 'react';

const BusinessMan = ({data}) => {
    let {name} =data;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default BusinessMan;