import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">

                    <div className="grid justify-center pt-6 lg:justify-between">
                        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                            <span>©2022 All rights reserved</span>
                            <Link rel="noopener noreferrer">
                                <span>Privacy policy</span>
                            </Link>
                            <Link rel="noopener noreferrer" href="#">
                                <span>Terms of service</span>
                            </Link>
                        </div>
                        <span className='text-center py-6'>©Copyright created by <a href="https://www.facebook.com/rjraju.r8" target='__blank' className='text-blue-900'>TH-Raju</a> </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;