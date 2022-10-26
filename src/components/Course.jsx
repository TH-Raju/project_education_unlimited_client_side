import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const cours = useLoaderData();
    const { id, title, body, img, variable, condition, loop, functions } = cours;
    // console.log(cours);
    return (
        <div >
            <h1 className="text-4xl text-center py-10 font-bold leading-none sm:text-5xl">{title} Tutorial</h1>
            {
                body ?
                    <>
                        <img src={img} alt="" className='w-full my-10 h-96 mx-auto rounded-xl' />
                        <p className="px-4 mt-6 mb-12 text-lg">{body}</p>
                        <div className='grid grid-cols-2 gap-4 my-10'>
                            <Link to={`/detail/${id}`}>
                                <div className='bg-cyan-600 p-4 text-white font-semibol text-2xl rounded-xl'>
                                    <p>{variable.v_name}</p>
                                </div>
                            </Link>
                            <Link to={`/detail/${id}`}>
                                <div className='bg-cyan-600 p-4 text-white font-semibol text-2xl rounded-xl'>
                                    <p>{condition.v_name}</p>
                                </div>
                            </Link>
                            <Link to={`/detail/${id}`}>
                                <div className='bg-cyan-600 p-4 text-white font-semibol text-2xl rounded-xl'>
                                    <p>{loop.v_name}</p>
                                </div>
                            </Link>
                            <Link to={`/detail/${id}`}>
                                <div className='bg-cyan-600 p-4 text-white font-semibol text-2xl rounded-xl'>
                                    <p>{functions.v_name}</p>
                                </div>
                            </Link>
                        </div>

                        <div className='text-center'>
                            <Link to={`/detail/${id}`}>
                                <button className="outline outline-offset-2 outline-cyan-500 hover:bg-cyan-300 hover:outline-none rounded-md px-8 py-1 font-semibold text-xl">Details</button>
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <p className='text-center text-blue-800'> <span className='text-3xl align-middle'>← </span> Select any Course first</p>
                    </>
            }

        </div>
    );
};

export default Course;