import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCrown, FaArrowLeft } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [22, 15]
};

const Detail = () => {
    const cours = useLoaderData();
    const { id, name, title, body, img, variable, condition, loop, functions } = cours;
    // console.log(cours);
    return (
        <div className='lg:mx-32 md:mx-12'>

            <div className='flex justify-center items-center gap-5'>
                <h1 className="text-4xl text-center py-10 font-bold leading-none sm:text-5xl">{name} Tutorial</h1>
                <div>
                    <Pdf targetRef={ref} filename="code-example.pdf" options={options} x={.5} y={.5} scale={0.8}>
                        {({ toPdf }) => <button type="button" onClick={toPdf} className="px-8 py-3 font-semibold rounded-full bg-cyan-700 hover:bg-cyan-500 hover:text-black text-white dark:bg-gray-100 dark:text-gray-800">Download</button>}
                    </Pdf>
                </div>
            </div>

            <div ref={ref}>
                <h1 className="text-4xl text-center py-6 font-bold leading-none sm:text-4xl border border-cyan-400 rounded-xl w-4/6 mx-auto">{title}</h1>
                <img src={img} alt="" className='lg:w-4/12  md:w-3/4 my-10 h-96 mx-auto rounded-lg' />

                <p className="px-4 mt-6 mb-12 text-lg">{body}</p>

                {/* detail */}

                {/* variable */}
                <h2 className="text-4xl py-10 px-5 mb-8 font-bold bg-gray-500 rounded-xl leading-none sm:text-5xl">-{name} {variable.v_name}</h2>

                <p className="px-4 mb-12 text-lg">{variable.v_desc}</p>

                <h2 className="text-4xl pb-10 font-bold leading-none sm:text-3xl">- {name} {variable.v_name} Syntax</h2>

                <p className="px-4 mb-12 text-lg">{variable.value}</p>

                {/* condition */}
                <h2 className="text-4xl py-10 px-5 mb-8 font-bold bg-gray-500 rounded-xl leading-none sm:text-5xl">- {name} {condition.v_name}</h2>

                <p className="px-4 mb-12 text-lg">{condition.v_desc}</p>

                <h2 className="text-4xl pb-10 font-bold leading-none sm:text-3xl">- {name} {condition.v_name} Syntax</h2>

                <p className="px-4 mb-12 text-lg">{condition.value}</p>

                {/* loop */}
                <h2 className="text-4xl py-10 px-5 mb-8 font-bold bg-gray-500 rounded-xl leading-none sm:text-5xl">- {name} {loop.v_name}</h2>

                <p className="px-4 mb-12 text-lg">{loop.v_desc}</p>

                <h2 className="text-4xl pb-10 font-bold leading-none sm:text-3xl">- {name} {loop.v_name} Syntax</h2>

                <p className="px-4 mb-12 text-lg">{loop.value}</p>


                {/* function */}
                <h2 className="text-4xl py-10 px-5 mb-8 font-bold bg-gray-500 rounded-xl leading-none sm:text-5xl">- {name} {functions.v_name}</h2>

                <p className="px-4 mb-12 text-lg">{functions.v_desc}</p>

                <h2 className="text-4xl pb-10 font-bold leading-none sm:text-3xl">- {name} {functions.v_name} Syntax</h2>

                <p className="px-4 mb-12 text-lg">{functions.value}</p>
            </div>



            <div className='text-center'>
                <Link to='/courses'>
                    <button className="outline outline-offset-2 hover:outline-offset-1 outline-cyan-500 hover:bg-cyan-300 rounded-md px-8 py-1 font-semibold text-xl mr-6"><span className='flex justify-center gap-3 align-middle'><FaArrowLeft className='mt-1' />  <span>Back to Courses</span></span></button>
                </Link>
                <Link to={`/premium/${id}`}>
                    <button className="outline outline-offset-2 hover:outline-offset-1 outline-cyan-500 hover:bg-cyan-300 rounded-md px-10 py-1 font-semibold text-xl mt-6 ml-6"><span className='flex justify-center gap-3 align-middle'><FaCrown className='mt-1' />  <span>Get Premium</span></span></button>
                </Link>
            </div>
        </div>
    );
};

export default Detail;