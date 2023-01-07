import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('https://education-unlimited-server-side.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div >
            <h1 className="text-3xl font-semibold bg-sky-300 text-center rounded-lg p-6">{courses.length} Course <p><small className='text-sm'>choose any course</small></p> </h1>
            <div>

                {
                    courses.map(course => <Link to={`course/${course.id}`} key={course.id}><p
                        className="text-2xl font-semibold hover:bg-sky-200 rounded-lg p-3 m-4">
                        {course.name}
                    </p></Link>

                    )
                }
            </div>
        </div>
    );
};

export default LeftSide;