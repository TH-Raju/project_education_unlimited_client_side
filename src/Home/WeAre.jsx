import React from 'react';

const WeAre = () => {
    return (
        <div className='mb-32'>
            <h2 className="text-4xl text-center font-bold underline underline-offset-8">We Are</h2>

            <div className='flex flex-wrap gap-16 justify-center my-20'>
                <div className='text-center'>
                    <img className="p-1 w-60 h-60 rounded-full ring-2 ring-cyan-400 dark:ring-gray-500" src={require('../image/pp.jpg')} alt="Bordered avatar" />
                    <p className='font-bold mt-4 text-xl'>TH Raju</p>
                    <p>Team Leader</p>
                </div>
            </div>

            <div className='flex flex-wrap gap-16 justify-center my-20'>
                <div className='text-center mt-6'>
                    <img className="p-1 w-52 h-52 rounded-full ring-2 ring-cyan-400 dark:ring-gray-500" src={require('../image/student-1.png')} alt="Bordered avatar" />
                    <p className='font-bold mt-4 text-xl'>Mbk Mahmuda</p>
                    <p>Content Manager</p>
                </div>
                <div className='text-center mt-6'>
                    <img className="p-1 w-52 h-52 rounded-full ring-2 ring-cyan-400 dark:ring-gray-500" src={require('../image/student-2.png')} alt="Bordered avatar" />
                    <p className='font-bold mt-4 text-xl'>Kaniz Fatema</p>
                    <p>Student Executive</p>
                </div>

                <div className='text-center mt-6'>
                    <img className="p-1 w-52 h-52 rounded-full ring-2 ring-cyan-400 dark:ring-gray-500" src={require('../image/student-3.png')} alt="Bordered avatar" />
                    <p className='font-bold mt-4 text-xl'>Nazmun Nahar</p>
                    <p>Cheif Instructor</p>
                </div>
                <div className='text-center mt-6'>
                    <img className="p-1 w-52 h-52 rounded-full ring-2 ring-cyan-400 dark:ring-gray-500" src={require('../image/student-4.png')} alt="Bordered avatar" />
                    <p className='font-bold mt-4 text-xl'>Marjan Bushra</p>
                    <p>Course Manager</p>
                </div>

                <div className='text-center mt-6'>
                    <img className="p-1 w-52 h-52 rounded-full ring-2 ring-cyan-400 dark:ring-gray-500" src={require('../image/student-5.png')} alt="Bordered avatar" />
                    <p className='font-bold mt-4 text-xl'>Abdullah Mahmud</p>
                    <p>Student Support Executive</p>
                </div>
            </div>


        </div>
    );
};

export default WeAre;