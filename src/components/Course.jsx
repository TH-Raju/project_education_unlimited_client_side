import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const cours = useLoaderData();
    const { id, title, body, img } = cours;
    console.log(cours);
    return (
        <div >
            <h1 className="text-4xl text-center py-10 font-bold leading-none sm:text-5xl">{title} Tutorial</h1>
            {
                body ?
                    <>
                        <img src={img} width='100%' className=' h-auto rounded-lg' alt="" />
                        <p className="px-4 mt-6 mb-12 text-lg">{body}</p>
                        <div className='text-center'>
                            <Link to={`/detail/${id}`}>
                                <button className="outline outline-offset-2 outline-cyan-500 hover:bg-cyan-300 hover:outline-none rounded-md px-8 py-1 font-semibold text-xl">Detail</button>
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