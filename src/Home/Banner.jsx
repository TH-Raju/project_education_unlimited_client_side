import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' bg-gradient-to-t from-white via-cyan-200 to-cyan-400'>
            <div className='mb-3'>
                <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        Get Our Courses
                    </h1>
                    <p className='text-cyan-800 font-bold p-2'>
                        Learn More About Programming
                    </p>
                    <p className='md:text-2xl text-xl font-bold text-gray-900'>Learn the Best Programming Language with Us and Increase revenue for Desktop Web Mobile app platforms.</p>
                    <Link to='/courses'> <button className='bg-cyan-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-gray-800'>Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;