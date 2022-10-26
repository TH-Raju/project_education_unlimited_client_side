import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCrown, FaArrowLeft } from 'react-icons/fa';

const Detail = () => {
    const cours = useLoaderData();
    const { id, title, body, img, variable, condition, loop, functions } = cours;
    console.log(cours);
    return (
        <div className='lg:mx-32 md:mx-12'>

            <h1 className="text-4xl text-center py-10 font-bold leading-none sm:text-5xl">{title} Tutorial</h1>

            <img src={img} alt="" className='w-full my-10 h-96 mx-auto rounded-lg' />

            <p className="px-4 mt-6 mb-12 text-lg">{body}</p>

            {/* detail */}
            {/* variable */}
            <h2 className="text-4xl py-10 font-bold leading-none sm:text-5xl">- {variable.v_name}</h2>

            <p className="px-4 mb-12 text-lg">{variable.v_desc}</p>

            <h2 className="text-4xl pb-10 font-bold leading-none sm:text-3xl">- {variable.v_name} Syntax</h2>

            <p className="px-4 mb-12 text-lg">{variable.value}</p>



            <div className='text-center'>
                <Link to='/courses'>
                    <button className="outline outline-offset-2 hover:outline-offset-1 outline-cyan-500 hover:bg-cyan-300 rounded-md px-8 py-1 font-semibold text-xl mr-3"><span className='flex justify-center gap-3 align-middle'><FaArrowLeft className='mt-1' />  <span>Back to Courses</span></span></button>
                </Link>
                <Link to={`/premium/${id}`}>
                    <button className="outline outline-offset-2 hover:outline-offset-1 outline-cyan-500 hover:bg-cyan-300 rounded-md px-10 py-1 font-semibold text-xl ml-3"><span className='flex justify-center gap-3 align-middle'><FaCrown className='mt-1' />  <span>Get Premium</span></span></button>
                </Link>
            </div>
        </div>
    );
};

export default Detail;