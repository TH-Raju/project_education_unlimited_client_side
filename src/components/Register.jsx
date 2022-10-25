import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
    return (
        <div>
            <form className='w-80 mx-auto'>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="name" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="text" id="text" name='photoUrl' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                    <input type="password" name="confirm" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••" required />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-24 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                <br />
                <button type="button" className="px-14 py-3 flex align-middle gap-5 w-full mt-6 text-center font-semibold border rounded-xl border-blue-900 dark:border-gray-100 dark:text-gray-100 hover:bg-gray-300"><FcGoogle className='text-2xl'></FcGoogle> Sign in with Google</button>

                <button type="button" className="px-14 py-3 flex align-middle gap-5 w-full mt-6 text-center font-semibold border rounded-xl border-blue-900 dark:border-gray-100 dark:text-gray-100 hover:bg-gray-300"><FaGithub className='text-2xl'></FaGithub> Sign in with Github</button>


            </form>


        </div>
    );
};

export default Register;