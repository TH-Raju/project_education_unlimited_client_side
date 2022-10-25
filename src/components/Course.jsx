import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const cours = useLoaderData();
    const { title, body, img } = cours;
    console.log(cours);
    return (
        <div>
            <h1 className="text-4xl text-center py-10 font-bold leading-none sm:text-5xl">{title} Tutorial</h1>
            <img src={img} width='100%' className=' h-auto rounded-lg' alt="" />
            <p className="px-4 mt-6 mb-12 text-lg">{body}</p>
        </div>
    );
};

export default Course;