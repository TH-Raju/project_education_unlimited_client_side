import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

const Premium = () => {
    const cours = useLoaderData();
    const { title, body, img } = cours;
    console.log(cours);
    return (
        <div>
            <h1 className="text-4xl text-center py-10 font-bold leading-none sm:text-5xl">Get {title} Premium Course</h1>

            <div className='text-center'>
                <Link to='/courses'>
                    <button className="outline outline-offset-2 hover:outline-offset-1 outline-cyan-500 hover:bg-cyan-300 rounded-md px-8 py-1 font-semibold text-xl mr-3"><span className='flex justify-center gap-3 align-middle'><FaArrowLeft className='mt-1' />  <span>Back to Courses</span></span></button>
                </Link>
            </div>
        </div>
    );
};

export default Premium;