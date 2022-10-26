import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from './Shared/LeftSide';

const Courses = () => {
    return (

        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-2 sm:mt-20 lg:mx-32 md:mx-10'>
            <div className='bg-gray-200'>
                <LeftSide></LeftSide>
            </div>
            <div className='col-span-2 bg-gray-200'>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Courses;