import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from './Shared/LeftSide';

const Courses = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-2'>
                <div className='bg-red-600'>
                    <LeftSide></LeftSide>
                </div>
                <div className='col-span-2 bg-slate-400'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Courses;