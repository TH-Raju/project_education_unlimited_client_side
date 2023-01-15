import React from 'react';

const Poster = () => {
    return (
        <div className='flex flex-wrap md:w-5/6 mx-auto justify-center items-center lg:gap-9 md:gap-20 bg-cyan-300 py-6'  >
            <p className='text-5xl font-bold sm:px-8 text-left md:w-1/3 z-10'>"Learn your Favourite Programming Language with Us"</p>
            <img src={require('../image/stu.png')} alt="poster" className='lg:h-64 md:h-52 -mb-9 ' />

        </div >
    );
};

export default Poster;