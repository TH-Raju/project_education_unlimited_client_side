import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../image/education.png'
import { FaUserAlt } from 'react-icons/fa';
import { MdNightlightRound } from "react-icons/md";
import { CiDark } from "react-icons/ci";



const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // console.log(user)
    let [open, setOpen] = useState(true);
    let [toggle, setToggle] = useState(true);
    let [errors, setError] = useState('');

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => setError(error))
    }

    return (
        <div className=''>
            <nav className="bg-cyan-400 mb-20 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/home" className="flex items-center">
                        <img src={logo} className="mr-3 h-12 md:h-10 sm:h-8" alt="Education Unlimited" />
                        <span className="self-center md:text-xl sm:text-sm font-semibold whitespace-nowrap dark:text-white">Education Unlimited</span>
                    </Link>
                    <div className="flex md:order-2">
                        <span>
                            {
                                user?.photoURL ? <abbr title={user?.uid ? user.displayName
                                    : user.email}><img src={user.photoURL} className='h-12 w-12 rounded-full' alt="" /> </abbr> :
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <FaUserAlt />
                                    </button>
                            }
                        </span>
                        <button onClick={() => setToggle(!toggle)} type="button" className='ml-3 hidden md:block '>
                            {
                                toggle ?
                                    <>
                                        <div><MdNightlightRound />dark</div>
                                    </>
                                    :
                                    <>
                                        <div> <CiDark />light</div>
                                    </>
                            }
                        </button>
                        <button onClick={() => setOpen(!open)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="true">
                            <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${open ? 'hidden' : 'block'} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 bg-cyan-400 rounded-lg border border-cyan-400 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-cyan-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/home" className="block lg:text-base  py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link to="/courses" className="block lg:text-base  py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Courses</Link>
                            </li>
                            <li>
                                <Link to="/blog" className="block lg:text-base  py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="block lg:text-base py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQ</Link>
                            </li>
                            <button onClick={() => setToggle(!toggle)} type="button" className='ml-3 lg:hidden bg-cyan-600 md:hidden flex items-center py-2 px-2 w-20 rounded-xl gap-2'>
                                {
                                    toggle ?
                                        <>
                                            <MdNightlightRound />dark
                                        </>
                                        :
                                        <>
                                            <CiDark />light
                                        </>
                                }
                            </button>
                            <>{
                                user?.uid ?
                                    <>
                                        <li>
                                            <Link onClick={handleLogOut} className="bg-cyan-700 px-3 py-2 text-white rounded-lg" >Log out</Link>
                                        </li>
                                        <li>
                                            <Link className="inline py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-gray-100 md:hidden lg:block sm:block md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{user?.uid ? user.displayName
                                                : user.email}</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <Link to="/login" className="block lg:text-base  py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Log in</Link>
                                        </li>
                                        <li>
                                            <Link to="/register" className="block lg:text-base  py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</Link>
                                        </li>
                                    </>
                            }
                            </>
                        </ul>
                    </div>
                </div>
                <p>{errors}</p>
            </nav>
        </div>






    );
};

export default Header;