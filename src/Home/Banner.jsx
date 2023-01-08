import React from 'react';
import { Link } from 'react-router-dom';
import back from '../image/back.png';

const Banner = () => {
    return (
        <div className='mb-3' style={{ backgroundImage: `url(${back})`, backgroundRepeat: 'no-repeat' }}>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Get Our Courses
                </h1>
                <p className='text-cyan-500 font-bold p-2'>
                    Learn More About Programming
                </p>
                <p className='md:text-2xl text-xl font-bold text-gray-900'>Learn the Best Technology with Us. Increase revenue for Desktop Laptop Mobile app platforms.</p>
                <Link to='/courses'> <button className='bg-cyan-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-gray-800'>Get Started</button></Link>
            </div>
        </div>
    );
};

export default Banner;