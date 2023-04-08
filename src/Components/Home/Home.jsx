import React from 'react';
import cover from '../../media/cover.jpg'
import Common from '../Common/Common';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mt-14'>
            
            <img className='shadow-black shadow-2xl' src={cover} alt="" />
            
<footer className='bg-slate-300'>

</footer>

        </div>
    );
};

export default Home;