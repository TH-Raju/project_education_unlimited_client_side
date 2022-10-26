import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {

    const { user, signIn, googleProviderLogin, githubProviderLogin } = useContext(AuthContext);
    const [errors, setErrors] = useState('');
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigates = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {

                form.reset();
            })
            .catch(error => {
                console.error(error.message);
                setErrors(error.message)
            })


    }
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

    useEffect(() => {
        if (user) {
            navigates(from, { replace: true })
        }
    }, [user])
    return (
        <div className='lg:mx-32 md:mx-10'>
            <form className='w-80 mx-auto' onSubmit={handleOnSubmit}>
                <h1 className='text-4xl font-semibold text-center'>Log In</h1>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required />
                </div>
                <p className='py-4 my-3 px-3'>{errors}</p>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log in</button>
                <br />
                <p className='mt-4'>Don't have Account? <Link to='/register' className='text-blue-900 font-bold underline'>Create Account</Link></p>
                <button type="button" onClick={handleGoogleSignIn} className="px-14 py-3 flex align-middle gap-5 w-full mt-6 text-center font-semibold border rounded-xl border-blue-900 dark:border-gray-100 dark:text-gray-100 hover:bg-gray-300"><FcGoogle className='text-2xl'></FcGoogle> Log in with Google</button>

                <button type="button" onClick={handleGithubSignIn} className="px-14 py-3 flex align-middle gap-5 w-full mt-6 text-center font-semibold border rounded-xl border-blue-900 dark:border-gray-100 dark:text-gray-100 hover:bg-gray-300"><FaGithub className='text-2xl'></FaGithub> Log in with Github</button>
            </form>


        </div>
    );
};

export default Login;