import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ course }) => {
    const { id, name, img, body, title, price } = course;

    return (
        <div>
            <Link to={`/detail/${id}`} >
                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={img} alt={name} className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between py-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                            <p className="dark:text-gray-200">{body.length > 150 ? body.slice(' ', 150) : body}</p>
                        </div>
                        <p
                            className="text-2xl font-semibold hover:bg-sky-200 rounded-lg py-3 my-4">Price: $
                            {price}
                        </p>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide bg-blue-700 text-white rounded-md dark:bg-violet-400 dark:text-gray-900">Detail</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;

