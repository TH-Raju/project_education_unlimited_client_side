import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUser, googleProviderLogin, githubProviderLogin } = useContext(AuthContext);
    const [errors, setErrors] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(password, confirm);

        createUser(email, password)
            .then(result => {
                // const user = result.user;
                form.reset();
                navigate('/home')
                // console.log(user)

            })
            .catch(error => {
                console.log(error);
                setErrors(error.message);
            });
    }


    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mb-10'>Registration</h1>
            <div className='lg:mx-32 md:mx-10 flex'>
                <form className='w-96 mx-auto border-r  border-cyan-400 pr-3' onSubmit={handleSubmit}>

                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Name</label>
                        <input type="name" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Email address</label>
                        <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required />
                    </div>
                    <p className='py-4 my-3 px-3 text-red-600'>{errors}</p>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    <br />
                    <p className='mt-4'>Already have Account? <Link to='/login' className='text-blue-900 font-bold underline'>Log in</Link></p>
                    <button type="button" onClick={handleGoogleSignIn} className="px-14 py-3 flex align-middle gap-5 w-full mt-6 text-center font-bold border rounded-xl border-blue-900 dark:border-gray-100 dark:text-gray-100 hover:bg-gray-300"><FcGoogle className='text-2xl'></FcGoogle> Register with Google</button>

                    <button type="button" onClick={handleGithubSignIn} className="px-14 py-3 flex align-middle gap-5 w-full mt-6 text-center font-bold border rounded-xl border-blue-900 dark:border-gray-100 dark:text-gray-100 hover:bg-gray-300"><FaGithub className='text-2xl'></FaGithub> Register with Github</button>
                </form>
                <div>
                    <img src={require('../image/reg.gif')} alt="" className='lg:h-full md:h-96 hidden md:block' />
                </div>
            </div>
        </div>
    );
};

export default Register;