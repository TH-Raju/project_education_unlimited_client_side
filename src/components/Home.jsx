import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="w-full dark:bg-gray-600">
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:py-28">
                    <h1 className="text-5xl antialiased font-bold leading-none text-center md:text-6xl dark:text-gray-100">Get Our Courses</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Learn More about Programming</p>

                    <Link to='/courses'>
                        <Button type="button" className=" w-full p-3 font-semibold text-center rounded-r-lg  dark:bg-violet-400 dark:text-gray-900">Get Start</Button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Home;