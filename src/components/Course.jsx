import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from './Card';

const Course = () => {
    const [courses, setCourses] = useState([]);
    const cours = useLoaderData();
    const { id, name, body, img, variable, condition, loop, functions } = cours;
    // console.log(cours);

    useEffect(() => {
        fetch('https://education-unlimited-server-side.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div >
            <h1 className="text-4xl text-center py-10 font-bold leading-none sm:text-5xl">{name} Tutorial</h1>
            {
                body ?
                    <>
                        <img src={img} alt="" className='w-90 my-10 h-96 mx-auto rounded-xl' />
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
                        <p className='text-center text-2xl text-blue-800'> <span className='text-4xl align-middle'>← </span> Select any Course</p>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6 md:ml-0'>
                            {
                                courses.map(course => <Card
                                    key={course.id}
                                    course={course}

                                ></Card>

                                )
                            }
                        </div>
                    </>
            }

        </div>
    );

};

export default Course;



