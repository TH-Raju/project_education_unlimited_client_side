import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCrown, FaArrowLeft } from 'react-icons/fa';

const Detail = () => {
    const cours = useLoaderData();
    const { title, body, img } = cours;
    console.log(cours);
    return (
        <div >
            <h1 className="text-4xl text-center py-10 font-bold leading-none sm:text-5xl">{title} Tutorial</h1>
            <img src={img} alt="" className='w-4/6 my-10 h-96 mx-auto' />
            <div className='text-center'>
                <Link to='/courses'>
                    <button className="outline outline-offset-2 hover:outline-offset-1 outline-cyan-500 hover:bg-cyan-300 rounded-md px-8 py-1 font-semibold text-xl mr-3"><span className='flex justify-center gap-3 align-middle'><FaArrowLeft className='mt-1' />  <span>Back to Courses</span></span></button>
                    <button className="outline outline-offset-2 hover:outline-offset-1 outline-cyan-500 hover:bg-cyan-300 rounded-md px-10 py-1 font-semibold text-xl ml-3"><span className='flex justify-center gap-3 align-middle'><FaCrown className='mt-1' />  <span>Get Premium</span></span></button>
                </Link>
            </div>
        </div>
    );
};

export default Detail;