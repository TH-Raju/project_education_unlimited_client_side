import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-semibold bg-sky-300 text-center rounded-lg p-6">All Course : {courses.length}</h1>

            <div>
                {
                    courses.map(course => <Link to={`course/${course.id}`} key={course.id}><p
                        className="text-2xl font-semibold hover:bg-sky-200 rounded-lg p-3 m-4">
                        {course.title}
                    </p></Link>

                    )
                }
            </div>
        </div>
    );
};

export default LeftSide;